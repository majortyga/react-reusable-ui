import React from "react";
import Select from "@/components/Select/Select";

/**
 * Props for the Calendar component
 * @interface CalendarProps
 */
export interface CalendarProps {
  /** The currently selected date */
  value?: Date;
  /** Callback fired when a date is selected */
  onChange?: (date: Date) => void;
  /** Additional CSS classes for the calendar container */
  className?: string;
  /** Additional CSS classes for calendar buttons and interactive elements */
  calendarButtonClassName?: string;
  /** Text color class to be applied to calendar elements */
  textColor?: string;
  /** Whether to show the time picker */
  showTimePicker?: boolean;
  /** Whether to show seconds in the time picker */
  showSeconds?: boolean;
  /** Whether to use 12-hour format (AM/PM) */
  hour12?: boolean;
  /** Interval in minutes for the minute picker (e.g., 5 for 5-minute intervals) */
  timeInterval?: number;
  /** Interval in seconds for the second picker (e.g., 5 for 5-second intervals) */
  secondInterval?: number;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Function to disable specific dates */
  disableDate?: (date: Date) => boolean;
  /** Function to disable specific times */
  disableTime?: (date: Date, h: number, m: number, s: number) => boolean;
  /** Whether to show time picker inline with the calendar */
  timePickerInline?: boolean;
  /** Callback fired when the calendar opens */
  onOpen?: () => void;
  /** Callback fired when the calendar closes */
  onClose?: () => void;
  /** Custom render function for day cells */
  renderDay?: (
    date: Date,
    isSelected: boolean,
    isToday: boolean,
    disabled: boolean
  ) => React.ReactNode;
  /** Custom render function for time picker cells */
  renderTimeCell?: (
    h: number,
    m: number,
    s: number,
    selected: boolean,
    disabled: boolean
  ) => React.ReactNode;
}

/**
 * Calendar component for date and time selection
 * @component
 * @example
 * ```tsx
 * <Calendar
 *   value={selectedDate}
 *   onChange={setSelectedDate}
 *   showTimePicker
 *   hour12
 *   className="bg-white"
 *   calendarButtonClassName="hover:bg-blue-100"
 *   textColor="text-gray-900"
 * />
 * ```
 */
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

const getYears = (center: number, range = 20) => {
  const years = [];
  for (let i = center - range; i <= center + range; i++) years.push(i);
  return years;
};

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  className = "",
  showTimePicker = false,
  showSeconds = false,
  hour12 = false,
  timeInterval = 1,
  secondInterval = 1,
  minDate,
  maxDate,
  disableDate,
  disableTime,
  timePickerInline = true,
  renderDay,
  calendarButtonClassName = "",
  textColor = "",
}) => {
  const today = new Date();
  const [current, setCurrent] = React.useState(() => value || today);
  const [showTime, setShowTime] = React.useState(timePickerInline);
  const [selected, setSelected] = React.useState<Date | undefined>(value);

  React.useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  const year = current.getFullYear();
  const month = current.getMonth();
  const days = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const years = getYears(year);

  const handleSelect = (day: number) => {
    const date = new Date(
      year,
      month,
      day,
      selected?.getHours() || 0,
      selected?.getMinutes() || 0,
      selected?.getSeconds() || 0
    );
    if (disableDate && disableDate(date)) return;
    setSelected(date);
    onChange?.(date);
  };

  // --- Time Picker Logic ---
  const handleTimeChange = (
    h: number,
    m: number,
    s: number,
    ampm?: "AM" | "PM"
  ) => {
    let hour = h;
    if (hour12) {
      if (ampm === "PM" && hour < 12) hour += 12;
      if (ampm === "AM" && hour === 12) hour = 0;
    }
    const date = new Date(selected || current);
    date.setHours(hour, m, s);
    if (disableTime && disableTime(date, hour, m, s)) return;
    setSelected(date);
    onChange?.(date);
  };

  const selectedHour = (selected || current).getHours();
  const selectedMinute = (selected || current).getMinutes();
  const selectedSecond = (selected || current).getSeconds();
  const ampm = hour12 ? (selectedHour >= 12 ? "PM" : "AM") : undefined;

  // --- Min/Max/Disable Logic ---
  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    if (disableDate && disableDate(date)) return true;
    return false;
  };

  // --- Render ---
  return (
    <div
      className={`w-full max-w-[320px] sm:max-w-sm p-2 sm:p-4 rounded-lg ${className} ${textColor}`}
    >
      <div className="flex items-center justify-between w-full mb-2 gap-1 sm:gap-2">
        <button
          onClick={() => setCurrent(new Date(year, month - 1, 1))}
          className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px] ${calendarButtonClassName}`}
        >
          &lt;
        </button>
        <Select
          value={year.toString()}
          onChange={(y) => setCurrent(new Date(Number(y), month, 1))}
          options={years.map((y) => ({
            value: y.toString(),
            label: y.toString(),
          }))}
          className={`w-20 sm:w-24`}
          wrapperClassName={`${
            calendarButtonClassName.length > 0
              ? calendarButtonClassName
              : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          optionClassName={`${
            calendarButtonClassName.length > 0
              ? calendarButtonClassName
              : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          optionsContainerClassName={`${
            calendarButtonClassName.length > 0
              ? calendarButtonClassName
              : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          labelClassName={`${textColor}`}
          selectClassName={`${textColor}`}
        />
        <span className="font-semibold text-sm sm:text-base flex-1 text-center">
          {current.toLocaleString("default", { month: "long" })}
        </span>
        <button
          onClick={() => setCurrent(new Date(year, month + 1, 1))}
          className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px] ${calendarButtonClassName}`}
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-xs mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div
            key={d}
            className="text-center font-medium text-gray-500 dark:text-gray-400 py-1"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: days }, (_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const isToday =
            today.getFullYear() === year &&
            today.getMonth() === month &&
            today.getDate() === day;
          const isSelected = Boolean(
            selected &&
              selected.getFullYear() === year &&
              selected.getMonth() === month &&
              selected.getDate() === day
          );
          const disabled = isDateDisabled(date);
          return renderDay ? (
            <div key={`day-${day}`}>
              {renderDay(date, isSelected, isToday, disabled)}
            </div>
          ) : (
            <button
              key={`day-${day}`}
              className={`min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] rounded-full text-center transition-colors text-sm sm:text-base flex items-center justify-center ${calendarButtonClassName}
                ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : isToday
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                    : "hover:bg-gray-100 dark:hover:bg-gray-500/50"
                }
                ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
              onClick={() => handleSelect(day)}
              disabled={disabled}
            >
              {day}
            </button>
          );
        })}
      </div>
      {/* Time Picker */}
      {showTimePicker && (timePickerInline || showTime) && (
        <div className="mt-4 flex flex-col gap-2 items-center">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 items-center w-full">
            {/* Hour */}
            <Select
              popupPosition="top"
              value={
                hour12
                  ? (selectedHour % 12 || 12).toString()
                  : selectedHour.toString()
              }
              onChange={(v) =>
                handleTimeChange(
                  Number(v),
                  selectedMinute,
                  selectedSecond,
                  ampm
                )
              }
              options={Array.from({ length: hour12 ? 12 : 24 }, (_, i) => ({
                value: (hour12 ? i + 1 : i).toString(),
                label: (hour12 ? i + 1 : i).toString().padStart(2, "0"),
              }))}
              className={`w-16 sm:w-20`}
              wrapperClassName={`${
                calendarButtonClassName.length > 0
                  ? calendarButtonClassName
                  : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              optionClassName={`${
                calendarButtonClassName.length > 0
                  ? calendarButtonClassName
                  : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              optionsContainerClassName={`${
                calendarButtonClassName.length > 0
                  ? calendarButtonClassName
                  : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            />
            <span className="text-gray-500 font-medium">:</span>
            {/* Minute */}
            <Select
              popupPosition="top"
              value={selectedMinute.toString()}
              onChange={(v) =>
                handleTimeChange(selectedHour, Number(v), selectedSecond, ampm)
              }
              options={Array.from(
                { length: 60 / timeInterval },
                (_, i) => i * timeInterval
              ).map((m) => ({
                value: m.toString(),
                label: m.toString().padStart(2, "0"),
              }))}
              className={`w-16 sm:w-20`}
              wrapperClassName={`${
                calendarButtonClassName.length > 0
                  ? calendarButtonClassName
                  : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              optionClassName={`${
                calendarButtonClassName.length > 0
                  ? calendarButtonClassName
                  : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              optionsContainerClassName={`${
                calendarButtonClassName.length > 0
                  ? calendarButtonClassName
                  : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            />
            {showSeconds && (
              <>
                <span className="text-gray-500 font-medium">:</span>
                <Select
                  popupPosition="top"
                  value={selectedSecond.toString()}
                  onChange={(v) =>
                    handleTimeChange(
                      selectedHour,
                      selectedMinute,
                      Number(v),
                      ampm
                    )
                  }
                  options={Array.from(
                    { length: 60 / secondInterval },
                    (_, i) => i * secondInterval
                  ).map((s) => ({
                    value: s.toString(),
                    label: s.toString().padStart(2, "0"),
                  }))}
                  className={`w-16 sm:w-20`}
                  wrapperClassName={`${
                    calendarButtonClassName.length > 0
                      ? calendarButtonClassName
                      : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  optionClassName={`${
                    calendarButtonClassName.length > 0
                      ? calendarButtonClassName
                      : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  optionsContainerClassName={`${
                    calendarButtonClassName.length > 0
                      ? calendarButtonClassName
                      : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                />
              </>
            )}
            {hour12 && (
              <Select
                popupPosition="top"
                value={ampm}
                onChange={(v) =>
                  handleTimeChange(
                    selectedHour % 12 || 12,
                    selectedMinute,
                    selectedSecond,
                    v as "AM" | "PM"
                  )
                }
                options={[
                  { value: "AM", label: "AM" },
                  { value: "PM", label: "PM" },
                ]}
                className={`w-16 sm:w-20`}
                wrapperClassName={`${
                  calendarButtonClassName.length > 0
                    ? calendarButtonClassName
                    : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                optionClassName={`${
                  calendarButtonClassName.length > 0
                    ? calendarButtonClassName
                    : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                optionsContainerClassName={`${
                  calendarButtonClassName.length > 0
                    ? calendarButtonClassName
                    : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              />
            )}
          </div>
        </div>
      )}
      {showTimePicker && !timePickerInline && (
        <button
          className={`mt-2 text-sm sm:text-base text-blue-600 dark:text-blue-400 underline w-full py-2 ${calendarButtonClassName}`}
          onClick={() => setShowTime((v) => !v)}
        >
          {showTime ? "Hide Time Picker" : "Show Time Picker"}
        </button>
      )}
    </div>
  );
};

export default Calendar;
