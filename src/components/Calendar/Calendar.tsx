import React from "react";
import Select from "@/components/Select/Select";

export interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
  showTimePicker?: boolean;
  showSeconds?: boolean;
  hour12?: boolean;
  timeInterval?: number; // minutes interval
  secondInterval?: number; // seconds interval
  minDate?: Date;
  maxDate?: Date;
  disableDate?: (date: Date) => boolean;
  disableTime?: (date: Date, h: number, m: number, s: number) => boolean;
  timePickerInline?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  renderDay?: (
    date: Date,
    isSelected: boolean,
    isToday: boolean,
    disabled: boolean
  ) => React.ReactNode;
  renderTimeCell?: (
    h: number,
    m: number,
    s: number,
    selected: boolean,
    disabled: boolean
  ) => React.ReactNode;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

const getYears = (center: number, range = 50) => {
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
      className={`inline-block p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 ${className}`}
    >
      <div className="flex items-center justify-between mb-2 gap-2">
        <button onClick={() => setCurrent(new Date(year, month - 1, 1))}>
          &lt;
        </button>
        <Select
          value={year.toString()}
          onChange={(y) => setCurrent(new Date(Number(y), month, 1))}
          options={years.map((y) => ({
            value: y.toString(),
            label: y.toString(),
          }))}
          className="w-24"
        />
        <span className="font-semibold">
          {current.toLocaleString("default", { month: "long" })}
        </span>
        <button onClick={() => setCurrent(new Date(year, month + 1, 1))}>
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div
            key={d}
            className="text-center font-medium text-gray-500 dark:text-gray-400"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={i} />
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
            renderDay(date, isSelected, isToday, disabled)
          ) : (
            <button
              key={day}
              className={`w-8 h-8 rounded-full text-center transition-colors
                ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : isToday
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
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
          <div className="flex gap-2 items-center">
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
              className="w-20"
            />
            :{/* Minute */}
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
              className="w-20"
            />
            {showSeconds && (
              <>
                :
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
                  className="w-20"
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
                className="w-20"
              />
            )}
          </div>
        </div>
      )}
      {showTimePicker && !timePickerInline && (
        <button
          className="mt-2 text-blue-600 dark:text-blue-400 underline"
          onClick={() => setShowTime((v) => !v)}
        >
          {showTime ? "Hide Time Picker" : "Show Time Picker"}
        </button>
      )}
    </div>
  );
};

export default Calendar;
