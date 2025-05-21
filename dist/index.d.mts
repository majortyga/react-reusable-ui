import React from 'react';
import { IconType } from 'react-icons';

type MaskType = "phone" | "date" | "credit-card" | "ssn" | "zip" | "currency" | "custom";
interface MaskOptions {
    type: MaskType;
    pattern?: string;
    placeholder?: string;
}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: IconType;
    rightIcon?: IconType;
    label?: string;
    error?: string;
    searchable?: boolean;
    options?: string[];
    maxLength?: number;
    showCharacterCount?: boolean;
    type?: string;
    theme?: "light" | "dark";
    mask?: MaskOptions;
    validation?: {
        pattern?: RegExp;
        message?: string;
    };
    wrapperClassName?: string;
    labelClassName?: string;
    inputContainerClassName?: string;
    inputClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
    errorClassName?: string;
    optionsContainerClassName?: string;
    optionClassName?: string;
    characterCountClassName?: string;
}
declare const Input: React.FC<InputProps>;

/**
 * Interface for select options
 * @interface SelectOption
 */
interface SelectOption {
    /** The value of the option */
    value: string;
    /** The display label for the option */
    label: string;
    /** Optional icon component for the option */
    icon?: IconType;
    /** Whether the option is disabled */
    disabled?: boolean;
    /** Optional description text for the option */
    description?: string;
    /** Optional group name for grouping options */
    group?: string;
}
/**
 * Props for the Select component
 * @interface SelectProps
 */
interface SelectProps {
    /** Array of options to display in the select */
    options: SelectOption[];
    /** Currently selected value(s) */
    value?: string | string[];
    /** Callback fired when selection changes */
    onChange?: (value: string | string[]) => void;
    /** Placeholder text when no option is selected */
    placeholder?: string;
    /** Label text for the select */
    label?: string;
    /** Error message to display */
    error?: string;
    /** Whether multiple selections are allowed */
    multiple?: boolean;
    /** Whether the select is searchable */
    searchable?: boolean;
    /** Icon to display on the left side */
    leftIcon?: IconType;
    /** Icon to display on the right side */
    rightIcon?: IconType;
    /** Additional CSS classes for the select container */
    className?: string;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** Whether the select can be cleared */
    clearable?: boolean;
    /** Maximum number of items to display in multiple select */
    maxDisplayedItems?: number;
    /** Property name to group options by */
    groupBy?: string;
    /** Position of the options popup */
    popupPosition?: "top" | "bottom";
    /** Custom render function for options */
    customOptionRenderer?: (option: SelectOption) => React.ReactNode;
    /** Additional CSS classes for the wrapper div */
    wrapperClassName?: string;
    /** Additional CSS classes for the label */
    labelClassName?: string;
    /** Additional CSS classes for the select container */
    selectContainerClassName?: string;
    /** Additional CSS classes for the select element */
    selectClassName?: string;
    /** Additional CSS classes for the icon container */
    iconContainerClassName?: string;
    /** Additional CSS classes for the icon */
    iconClassName?: string;
    /** Additional CSS classes for the error message */
    errorClassName?: string;
    /** Additional CSS classes for the options container */
    optionsContainerClassName?: string;
    /** Additional CSS classes for the search input */
    searchInputClassName?: string;
    /** Additional CSS classes for the options list */
    optionsListClassName?: string;
    /** Additional CSS classes for individual options */
    optionClassName?: string;
    /** Additional CSS classes for the checkmark */
    checkmarkClassName?: string;
    /** Additional CSS classes for group headers */
    groupHeaderClassName?: string;
    /** Additional CSS classes for the no options message */
    noOptionsClassName?: string;
}
/**
 * A customizable select component with support for single/multiple selection,
 * search, grouping, and custom styling.
 *
 * @component
 * @example
 * ```tsx
 * <Select
 *   options={[
 *     { value: "1", label: "Option 1" },
 *     { value: "2", label: "Option 2" }
 *   ]}
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   placeholder="Select an option"
 *   searchable
 *   multiple
 * />
 * ```
 *
 * @example With custom styling
 * ```tsx
 * <Select
 *   options={options}
 *   value={value}
 *   onChange={onChange}
 *   className="custom-select"
 *   optionClassName="custom-option"
 *   wrapperClassName="custom-wrapper"
 * />
 * ```
 */
declare const Select: React.FC<SelectProps>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    leftIcon?: IconType;
    rightIcon?: IconType;
    isLoading?: boolean;
    fullWidth?: boolean;
    iconContainerClassName?: string;
    iconClassName?: string;
    spinnerClassName?: string;
    theme?: "light" | "dark";
    /** Custom color classes to override default variant colors */
    colors?: {
        base?: string;
        hover?: string;
        focus?: string;
        text?: string;
    };
}
declare const Button: React.FC<ButtonProps>;

/**
 * A flexible and customizable modal dialog component that supports various features like animations, positioning, and draggable behavior.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Example Modal"
 * >
 *   <p>Modal content goes here</p>
 * </Modal>
 *
 * // With different sizes
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   size="lg"
 * >
 *   <p>Large modal content</p>
 * </Modal>
 *
 * // Full screen modal
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   size="screen"
 * >
 *   <p>Full screen content</p>
 * </Modal>
 *
 * // With dark mode support
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   contentClassName="bg-white dark:bg-gray-800"
 * >
 *   <p>Dark mode compatible content</p>
 * </Modal>
 *
 * // With custom backdrop click handling
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   closeOnOverlayClick={false}
 * >
 *   <p>Modal that doesn't close on backdrop click</p>
 * </Modal>
 * ```
 */
interface ModalProps {
    /**
     * Controls whether the modal is visible or hidden
     * @required
     */
    isOpen: boolean;
    /**
     * Callback function to be called when the modal is closed
     * @required
     * @example
     * ```tsx
     * onClose={() => setIsOpen(false)}
     * ```
     */
    onClose: () => void;
    /**
     * Optional title text to be displayed in the modal header
     * @example
     * ```tsx
     * title="Confirmation Dialog"
     * ```
     */
    title?: string;
    /**
     * Content to be rendered inside the modal body
     * @required
     * @example
     * ```tsx
     * children={<div>Your content here</div>}
     * ```
     */
    children: React.ReactNode;
    /**
     * Size of the modal
     * @default "md"
     * @example
     * ```tsx
     * size="sm" // Small modal (max-width: 24rem)
     * size="md" // Medium modal (max-width: 28rem)
     * size="lg" // Large modal (max-width: 32rem)
     * size="xl" // Extra large modal (max-width: 36rem)
     * size="2xl" // 2X large modal (max-width: 42rem)
     * size="3xl" // 3X large modal (max-width: 48rem)
     * size="4xl" // 4X large modal (max-width: 56rem)
     * size="5xl" // 5X large modal (max-width: 64rem)
     * size="6xl" // 6X large modal (max-width: 72rem)
     * size="7xl" // 7X large modal (max-width: 80rem)
     * size="full" // Full width modal with margins
     * size="screen" // Full screen modal
     * ```
     */
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full" | "screen";
    /**
     * Position of the modal on the screen
     * @default "center"
     * @example
     * ```tsx
     * position="top" // Positions modal at the top of the screen
     * ```
     */
    position?: "center" | "top" | "bottom" | "left" | "right";
    /**
     * Whether the modal should close when the Escape key is pressed
     * @default true
     * @example
     * ```tsx
     * closeOnEsc={false} // Disable closing on Escape key
     * ```
     */
    closeOnEsc?: boolean;
    /**
     * Whether the modal should close when clicking outside
     * @default true
     * @example
     * ```tsx
     * closeOnOverlayClick={false} // Disable closing on overlay click
     * ```
     */
    closeOnOverlayClick?: boolean;
    /**
     * Whether to show the close button in the header
     * @default true
     * @example
     * ```tsx
     * showCloseButton={false} // Hide the close button
     * ```
     */
    showCloseButton?: boolean;
    /**
     * Additional CSS classes for the overlay/backdrop
     * @example
     * ```tsx
     * overlayClassName="bg-black/70" // Custom overlay styling
     * ```
     */
    overlayClassName?: string;
    /**
     * Additional CSS classes for the modal content container
     * @example
     * ```tsx
     * contentClassName="bg-white dark:bg-gray-800" // Custom content styling
     * ```
     */
    contentClassName?: string;
    /**
     * Additional CSS classes for the modal header
     * @example
     * ```tsx
     * headerClassName="bg-primary text-white" // Custom header styling
     * ```
     */
    headerClassName?: string;
    /**
     * Additional CSS classes for the modal title
     * @example
     * ```tsx
     * titleClassName="text-xl font-bold" // Custom title styling
     * ```
     */
    titleClassName?: string;
    /**
     * Additional CSS classes for the close button
     * @example
     * ```tsx
     * closeButtonClassName="hover:bg-gray-200" // Custom close button styling
     * ```
     */
    closeButtonClassName?: string;
    /**
     * Additional CSS classes for the modal body
     * @example
     * ```tsx
     * bodyClassName="p-6" // Custom body styling
     * ```
     */
    bodyClassName?: string;
    /**
     * Optional footer content to be rendered at the bottom of the modal
     * @example
     * ```tsx
     * footer={<button>Submit</button>} // Add action buttons
     * ```
     */
    footer?: React.ReactNode;
    /**
     * Additional CSS classes for the modal footer
     * @example
     * ```tsx
     * footerClassName="bg-gray-50" // Custom footer styling
     * ```
     */
    footerClassName?: string;
    /**
     * Animation type for the modal
     * @default "fade"
     * @example
     * ```tsx
     * animation="slide" // Use slide animation
     * ```
     */
    animation?: "fade" | "slide" | "zoom" | "bounce" | "flip" | "none";
    /**
     * Duration of the animation
     * @default "normal"
     * @example
     * ```tsx
     * animationDuration="fast" // Use faster animation
     * ```
     */
    animationDuration?: "fast" | "normal" | "slow";
    /**
     * Reference to the element that should receive focus when the modal opens
     * @example
     * ```tsx
     * const inputRef = useRef<HTMLInputElement>(null);
     * initialFocus={inputRef} // Focus input when modal opens
     * ```
     */
    initialFocus?: React.RefObject<HTMLElement>;
    /**
     * Whether to apply a blur effect to the backdrop
     * @default false
     * @example
     * ```tsx
     * backdropBlur={true} // Enable backdrop blur
     * ```
     */
    backdropBlur?: boolean;
    /**
     * Whether the modal can be dragged around
     * @default false
     * @example
     * ```tsx
     * draggable={true} // Enable dragging
     * ```
     */
    draggable?: boolean;
    /**
     * Whether the modal can be resized
     * @default false
     * @example
     * ```tsx
     * resizable={true} // Enable resizing
     * ```
     */
    resizable?: boolean;
    /**
     * Minimum width of the modal
     * @example
     * ```tsx
     * minWidth="300px" // Set minimum width
     * ```
     */
    minWidth?: string;
    /**
     * Maximum width of the modal
     * @example
     * ```tsx
     * maxWidth="800px" // Set maximum width
     * ```
     */
    maxWidth?: string;
    /**
     * Minimum height of the modal
     * @example
     * ```tsx
     * minHeight="200px" // Set minimum height
     * ```
     */
    minHeight?: string;
    /**
     * Maximum height of the modal
     * @example
     * ```tsx
     * maxHeight="600px" // Set maximum height
     * ```
     */
    maxHeight?: string;
    /**
     * Custom background color for the modal backdrop
     * @default "rgba(0, 0, 0, 0.5)"
     * @example
     * ```tsx
     * backdropColor="rgba(0, 0, 0, 0.7)" // Darker backdrop
     * backdropColor="rgba(255, 255, 255, 0.8)" // Light backdrop
     * ```
     */
    backdropColor?: string;
}
declare const Modal: React.FC<ModalProps>;

interface SkeletonProps {
    type?: "text" | "circle" | "rectangle" | "avatar" | "card" | "list" | "table";
    width?: number | string;
    height?: number | string;
    className?: string;
    animation?: "pulse" | "wave" | "shimmer" | "none";
    rounded?: boolean;
    count?: number;
    gap?: number;
    direction?: "row" | "column";
    variant?: "light" | "dark";
    speed?: "slow" | "normal" | "fast";
}
declare const Skeleton: React.FC<SkeletonProps>;

/**
 * Card Component
 *
 * A versatile card component that supports various styles, layouts, and interactive features.
 *
 * @example
 * ```tsx
 * <Card
 *   title="Card Title"
 *   subtitle="Card Subtitle"
 *   icon={HiUser}
 *   variant="bordered"
 *   hoverEffect="lift"
 * >
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
/**
 * Props for the Card component.
 */
interface CardProps {
    /** The card title. Can be any valid React node. */
    title?: React.ReactNode;
    /** The card subtitle. Can be any valid React node. */
    subtitle?: React.ReactNode;
    /** Optional icon component from react-icons. */
    icon?: IconType;
    /** Card content. Can be any valid React node. */
    children?: React.ReactNode;
    /** Card footer content. Can be any valid React node. */
    footer?: React.ReactNode;
    /**
     * Card style variant.
     * - "default": Basic card with white background
     * - "bordered": Card with border
     * - "elevated": Card with shadow and hover effect
     * - "news": Special layout for news articles with metadata
     */
    variant?: "default" | "bordered" | "elevated" | "news";
    /** Additional class for the card container. */
    className?: string;
    /** Additional class for the card header. */
    headerClassName?: string;
    /** Additional class for the card body. */
    bodyClassName?: string;
    /** Additional class for the card footer. */
    footerClassName?: string;
    /** Click handler for the card. */
    onClick?: () => void;
    /**
     * Image settings for the card.
     * @property {string} src - Image source URL
     * @property {string} [alt] - Image alt text
     * @property {"top" | "bottom" | "left" | "right"} [position] - Image position
     * @property {"square" | "video" | "auto"} [aspectRatio] - Image aspect ratio
     * @property {boolean} [overlay] - Show overlay on image
     * @property {string} [overlayColor] - Color of the overlay
     */
    image?: {
        src: string;
        alt?: string;
        position?: "top" | "bottom" | "left" | "right";
        aspectRatio?: "square" | "video" | "auto";
        overlay?: boolean;
        overlayColor?: string;
    };
    /**
     * Hover effect style.
     * - "scale": Card scales up on hover
     * - "lift": Card lifts up with shadow on hover
     * - "glow": Card glows with custom color on hover
     * - "none": No hover effect
     */
    hoverEffect?: "scale" | "lift" | "glow" | "none";
    /** Show loading state with skeleton animation. */
    loading?: boolean;
    /** Show skeleton placeholder instead of content. */
    skeleton?: boolean;
    /**
     * News card metadata.
     * @property {string} [time] - Time or date string
     * @property {string} [category] - News category
     * @property {string} [author] - Author name
     * @property {number} [comments] - Number of comments
     * @property {number} [views] - Number of views
     */
    metadata?: {
        time?: string;
        category?: string;
        author?: string;
        comments?: number;
        views?: number;
    };
    /** Optional link for the card (news variant). Makes the entire card clickable. */
    link?: string;
    /**
     * Custom colors for the card.
     * @property {string} [bg] - Background color class
     * @property {string} [text] - Text color class
     * @property {string} [border] - Border color class
     * @property {string} [headerBg] - Header background color class
     * @property {string} [headerText] - Header text color class
     * @property {string} [headerBorder] - Header border color class
     * @property {string} [footerBg] - Footer background color class
     * @property {string} [footerText] - Footer text color class
     * @property {string} [footerBorder] - Footer border color class
     * @property {string} [overlay] - Image overlay color (rgba)
     * @property {string} [hover] - Hover effect color (rgba)
     * @property {string} [skeleton] - Skeleton loading color class
     */
    colors?: {
        bg?: string;
        text?: string;
        border?: string;
        headerBg?: string;
        headerText?: string;
        headerBorder?: string;
        footerBg?: string;
        footerText?: string;
        footerBorder?: string;
        overlay?: string;
        hover?: string;
        skeleton?: string;
    };
}
declare const Card: React.FC<CardProps>;

/**
 * Column definition for the Table component.
 *
 * @template T - The type of the table data record.
 * @property {string} key - Unique key for the column.
 * @property {string} title - Column header title.
 * @property {keyof T} dataIndex - Field in the data record to display.
 * @property {(value: unknown, record: T) => React.ReactNode} [render] - Custom render function for cell content.
 * @property {(a: T, b: T) => number} [sorter] - Sorting function for the column.
 * @property {number | string} [width] - Column width.
 * @property {"left" | "right" | false} [fixed] - Fixed column position.
 * @property {boolean} [resizable] - Whether the column is resizable.
 * @property {"left" | "center" | "right"} [align] - Text alignment.
 * @property {boolean} [ellipsis] - Truncate cell content with ellipsis.
 * @property {boolean} [tooltip] - Show tooltip on cell hover.
 * @property {boolean} [filterable] - Enable filtering for the column.
 * @property {Array<{text: string, value: string}>} [filters] - Filter options.
 * @property {(value: string, record: T) => boolean} [onFilter] - Filter function.
 */
interface Column<T> {
    key: string;
    title: string;
    dataIndex: keyof T;
    render?: (value: unknown, record: T) => React.ReactNode;
    sorter?: (a: T, b: T) => number;
    width?: number | string;
    fixed?: "left" | "right" | false;
    resizable?: boolean;
    align?: "left" | "center" | "right";
    ellipsis?: boolean;
    tooltip?: boolean;
    filterable?: boolean;
    filters?: {
        text: string;
        value: string;
    }[];
    onFilter?: (value: string, record: T) => boolean;
}
/**
 * Props for the Table component.
 *
 * @template T - The type of the table data record.
 */
interface TableProps<T> {
    /** Array of column definitions */
    columns: Column<T>[];
    /** Array of data records */
    data: T[];
    /** Loading state or loading config */
    loading?: boolean | {
        delay?: number;
        tip?: string;
    };
    /** Pagination config */
    pagination?: {
        current: number;
        pageSize: number;
        total: number;
        onChange: (page: number, pageSize: number) => void;
        showSizeChanger?: boolean;
        pageSizeOptions?: number[];
    };
    /** Row selection config */
    selection?: {
        selectedRowKeys: (string | number)[];
        onChange: (selectedRowKeys: (string | number)[]) => void;
    };
    /** Row expand/collapse config */
    expandable?: {
        expandedRowRender: (record: T) => React.ReactNode;
        expandedRowKeys?: (string | number)[];
        onExpand?: (expanded: boolean, record: T) => void;
        defaultExpandAllRows?: boolean;
        expandIcon?: (props: {
            expanded: boolean;
            onExpand: () => void;
            record: T;
        }) => React.ReactNode;
    };
    /** Render row actions */
    rowActions?: (record: T) => React.ReactNode;
    /** Enable row drag-and-drop */
    draggable?: boolean;
    /** Callback for row reorder */
    onRowReorder?: (newData: T[]) => void;
    /** Row event handlers */
    onRow?: (record: T, index: number) => {
        onClick?: () => void;
        onDoubleClick?: () => void;
        onContextMenu?: () => void;
        className?: string;
        style?: React.CSSProperties;
    };
    /** Additional class for the table container */
    className?: string;
    /** Additional class for the table header */
    headerClassName?: string;
    /** Additional class for the table body */
    bodyClassName?: string;
    /** Additional class for each row */
    rowClassName?: string;
    /** Additional class for each cell */
    cellClassName?: string;
    /** Scroll config for x/y directions */
    scroll?: {
        x?: number | string;
        y?: number | string;
    };
    /** Show table borders */
    bordered?: boolean;
    /** Table size */
    size?: "small" | "middle" | "large";
    /** Show table header */
    showHeader?: boolean;
    /** Text to display when no data */
    emptyText?: React.ReactNode;
    /** Text to display when loading */
    loadingText?: string;
    /** Error state config */
    error?: {
        message: string;
        retry?: () => void;
    };
}
declare function Table<T extends {
    id?: string | number;
}>({ columns, data, loading, pagination, selection, expandable, rowActions, draggable, onRowReorder, onRow, className, headerClassName, bodyClassName, rowClassName, cellClassName, scroll, bordered, size, showHeader, emptyText, loadingText, error, }: TableProps<T>): React.JSX.Element;

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
    size?: "sm" | "md" | "lg";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    className?: string;
    animation?: "pulse" | "bounce" | "none";
    dot?: boolean;
    count?: number | string;
    maxCount?: number;
    showZero?: boolean;
    offset?: [number, number];
    status?: "online" | "offline" | "away" | "busy";
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    standalone?: boolean;
    processing?: boolean;
    ribbon?: boolean;
    ribbonText?: string;
    ribbonColor?: "primary" | "success" | "warning" | "error" | "info";
}
declare const Badge: React.FC<BadgeProps>;

interface AlertProps {
    type?: "success" | "error" | "warning" | "info";
    message: string;
    description?: string;
    closable?: boolean;
    onClose?: () => void;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
}
declare const Alert: React.FC<AlertProps>;

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg" | "xl";
    shape?: "circle" | "rounded";
    initials?: string;
    icon?: React.ReactNode;
    className?: string;
}
declare const Avatar: React.FC<AvatarProps>;

interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
}
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;

/**
 * Props for the Calendar component
 * @interface CalendarProps
 */
interface CalendarProps {
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
    renderDay?: (date: Date, isSelected: boolean, isToday: boolean, disabled: boolean) => React.ReactNode;
    /** Custom render function for time picker cells */
    renderTimeCell?: (h: number, m: number, s: number, selected: boolean, disabled: boolean) => React.ReactNode;
}
declare const Calendar: React.FC<CalendarProps>;

/**
 * Interface for individual collapse items
 * @interface CollapseItem
 */
interface CollapseItem {
    /** Unique identifier for the item */
    key: string;
    /** Content to be displayed in the header */
    header: React.ReactNode;
    /** Content to be displayed when expanded */
    content: React.ReactNode;
    /** Optional icon to be displayed in the header */
    icon?: IconType;
    /** Whether the item is disabled */
    disabled?: boolean;
}
/**
 * A collapsible content component that can show/hide content with smooth animations.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Collapse
 *   items={[
 *     {
 *       key: "1",
 *       header: "Section 1",
 *       content: "Content for section 1"
 *     },
 *     {
 *       key: "2",
 *       header: "Section 2",
 *       content: "Content for section 2"
 *     }
 *   ]}
 * />
 *
 * // With icons and disabled state
 * <Collapse
 *   items={[
 *     {
 *       key: "1",
 *       header: "Section 1",
 *       content: "Content for section 1",
 *       icon: FiInfo,
 *       disabled: true
 *     }
 *   ]}
 * />
 *
 * // With custom styling
 * <Collapse
 *   items={items}
 *   className="space-y-4"
 *   headerClassName="bg-gray-100"
 *   contentClassName="bg-white"
 * />
 * ```
 */
interface CollapseProps {
    /** Array of items to be displayed in the collapse */
    items: CollapseItem[];
    /** Array of keys that should be expanded by default */
    defaultActiveKeys?: string[];
    /** Callback function when active items change */
    onChange?: (keys: string[]) => void;
    /** Additional CSS classes for the container */
    className?: string;
    /** Additional CSS classes for each item */
    itemClassName?: string;
    /** Additional CSS classes for the header */
    headerClassName?: string;
    /** Additional CSS classes for the content */
    contentClassName?: string;
    /** Additional CSS classes for active items */
    activeItemClassName?: string;
    /** Additional CSS classes for disabled items */
    disabledItemClassName?: string;
}
/**
 * Collapse component that displays a list of expandable/collapsible items.
 * Each item has a header and content section that can be toggled.
 *
 * Features:
 * - Smooth expand/collapse animations
 * - Support for icons in headers
 * - Disabled state for items
 * - Customizable styling
 * - Multiple items can be expanded at once
 * - Default expanded items
 * - Change callback
 *
 * @example
 * ```tsx
 * const items = [
 *   {
 *     key: "1",
 *     header: "Section 1",
 *     content: "Content for section 1",
 *     icon: FiInfo
 *   },
 *   {
 *     key: "2",
 *     header: "Section 2",
 *     content: "Content for section 2",
 *     disabled: true
 *   }
 * ];
 *
 * <Collapse
 *   items={items}
 *   defaultActiveKeys={["1"]}
 *   onChange={(keys) => console.log("Active keys:", keys)}
 *   className="space-y-4"
 *   headerClassName="bg-gray-100 hover:bg-gray-200"
 *   contentClassName="bg-white"
 *   activeItemClassName="border-blue-500"
 *   disabledItemClassName="opacity-50"
 * />
 * ```
 */
declare const Collapse: React.FC<CollapseProps>;

interface DropdownOption {
    label: string;
    value: string;
    icon?: IconType;
    disabled?: boolean;
    description?: string;
    group?: string;
    submenu?: DropdownOption[];
    /** Link to navigate to when option is clicked */
    href?: string;
    /** Custom data for advanced use cases */
    data?: {
        badge?: string | number;
        tooltip?: string;
        [key: string]: unknown;
    };
    /** Custom class names for this specific option */
    className?: string;
    /** Whether this option should be hidden from search results */
    hideFromSearch?: boolean;
}
interface DropdownProps {
    /** The currently selected value */
    value?: string;
    /** Callback fired when an option is selected */
    onChange?: (value: string) => void;
    /** Array of options to display in the dropdown */
    options: DropdownOption[];
    /** Whether the dropdown is disabled */
    disabled?: boolean;
    /** Whether the dropdown is in a loading state */
    isLoading?: boolean;
    /** Custom class names for different parts of the dropdown */
    className?: string;
    wrapperClassName?: string;
    triggerClassName?: string;
    optionsContainerClassName?: string;
    optionClassName?: string;
    /** Custom colors for different states */
    colors?: {
        base?: string;
        hover?: string;
        focus?: string;
        text?: string;
        border?: string;
        background?: string;
        /** Colors for the options container */
        container?: {
            background?: string;
            border?: string;
            shadow?: string;
        };
        /** Colors for option text and hover states */
        option?: {
            text?: string;
            hover?: {
                background?: string;
                text?: string;
            };
            selected?: {
                background?: string;
                text?: string;
            };
            disabled?: {
                text?: string;
                background?: string;
            };
            description?: string;
        };
        /** Colors for search input */
        search?: {
            background?: string;
            text?: string;
            border?: string;
            placeholder?: string;
        };
        /** Colors for group headers */
        group?: {
            text?: string;
            background?: string;
        };
        /** Colors for dividers */
        divider?: string;
    };
    /** Theme variant */
    theme?: "light" | "dark";
    /** Whether to show the dropdown arrow */
    showArrow?: boolean;
    /** Whether to use plain text style without background */
    plain?: boolean;
    /** Whether to activate on hover */
    hover?: boolean;
    /** Custom render function for the trigger element */
    renderTrigger?: (selected: DropdownOption | undefined) => React.ReactNode;
    /** Custom render function for options */
    renderOption?: (option: DropdownOption, isSelected: boolean) => React.ReactNode;
    /** Custom render function for groups */
    renderGroup?: (group: string) => React.ReactNode;
    /** Callback fired when the dropdown opens */
    onOpen?: () => void;
    /** Callback fired when the dropdown closes */
    onClose?: () => void;
    /** Custom Link component to use for navigation */
    LinkComponent?: React.ComponentType<{
        href: string;
        className?: string;
        onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
        children: React.ReactNode;
    }>;
    /** Whether to enable search functionality */
    searchable?: boolean;
    /** Custom search function */
    onSearch?: (query: string) => void;
    /** Placeholder text for search input */
    searchPlaceholder?: string;
    /** Maximum height of the dropdown menu */
    maxHeight?: string;
    /** Whether to close the dropdown when an option is selected */
    closeOnSelect?: boolean;
    /** Custom loading spinner component */
    loadingSpinner?: React.ReactNode;
    /** Custom checkmark component */
    checkmark?: React.ReactNode;
    /** Custom divider component */
    groupDivider?: React.ReactNode;
    /** Custom tooltip component */
    tooltip?: React.ComponentType<{
        content: string;
        children: React.ReactNode;
    }>;
    /** Custom badge component */
    badge?: React.ComponentType<{
        content: string | number;
    }>;
    /** Display options */
    display?: {
        /** Whether to show icons in the trigger */
        triggerIcon?: boolean;
        /** Whether to show descriptions in the trigger */
        triggerDescription?: boolean;
        /** Whether to show icons in options */
        optionIcons?: boolean;
        /** Whether to show descriptions in options */
        optionDescriptions?: boolean;
        /** Whether to show icons in submenus */
        submenuIcons?: boolean;
        /** Whether to show descriptions in submenus */
        submenuDescriptions?: boolean;
        /** Whether to show the search icon */
        searchIcon?: boolean;
        /** Whether to show the submenu arrow */
        submenuArrow?: boolean;
        /** Whether to show the dropdown arrow */
        dropdownArrow?: boolean;
        /** Whether to show the loading spinner */
        loadingSpinner?: boolean;
        /** Whether to show the checkmark */
        checkmark?: boolean;
        /** Whether to show the group divider */
        groupDivider?: boolean;
        /** Whether to show tooltips */
        tooltips?: boolean;
        /** Whether to show badges */
        badges?: boolean;
        /** Whether to show arrows in submenus */
        arrow?: boolean;
    };
}
declare const Dropdown: React.FC<DropdownProps>;

interface ListItem {
    id: string | number;
    title: string;
    description?: string;
    icon?: IconType;
    avatar?: string;
    actions?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
interface ListProps {
    items: ListItem[];
    loading?: boolean;
    emptyText?: string;
    className?: string;
    itemClassName?: string;
    headerClassName?: string;
    contentClassName?: string;
    actionClassName?: string;
}
declare const List: React.FC<ListProps>;

interface PaginationProps {
    /** Current page number */
    current: number;
    /** Total number of items */
    total: number;
    /** Number of items per page */
    pageSize: number;
    /** Callback when page changes */
    onChange: (page: number) => void;
    /** Additional class for the container */
    className?: string;
    /** Show quick jump to first/last page */
    showFirstLast?: boolean;
    /** Show page size selector */
    showSizeChanger?: boolean;
    /** Available page sizes */
    pageSizeOptions?: number[];
    /** Callback when page size changes */
    onPageSizeChange?: (size: number) => void;
    /** Number of pages to show before and after current page */
    siblingCount?: number;
    /** Custom colors for the pagination */
    colors?: {
        bg?: string;
        text?: string;
        border?: string;
        activeBg?: string;
        activeText?: string;
        activeBorder?: string;
        hoverBg?: string;
        hoverText?: string;
        hoverBorder?: string;
        disabledBg?: string;
        disabledText?: string;
        disabledBorder?: string;
    };
    /** Custom icons */
    icons?: {
        prev?: React.ReactNode;
        next?: React.ReactNode;
        first?: React.ReactNode;
        last?: React.ReactNode;
        ellipsis?: React.ReactNode;
    };
    /** Show total items count */
    showTotal?: boolean;
    /** Custom total items text */
    totalText?: (total: number, range: [number, number]) => string;
    /** Show current page info */
    showCurrent?: boolean;
    /** Custom current page text */
    currentText?: (current: number, total: number) => string;
    /** Disable pagination */
    disabled?: boolean;
    /** Size of the pagination */
    size?: "small" | "middle" | "large";
}
declare const Pagination: React.FC<PaginationProps>;

interface PopoverProps {
    trigger: React.ReactNode;
    content: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right";
    hover?: boolean;
    className?: string;
}
declare const Popover: React.FC<PopoverProps>;

interface ProgressProps {
    value: number;
    max?: number;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    showValue?: boolean;
    valuePosition?: "inside" | "outside";
    striped?: boolean;
    animated?: boolean;
    className?: string;
    trackClassName?: string;
    barClassName?: string;
    valueClassName?: string;
    label?: string;
    labelPosition?: "top" | "bottom";
    labelClassName?: string;
}
declare const Progress: React.FC<ProgressProps>;

interface RatingProps {
    value: number;
    max?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    className?: string;
    showInfo?: boolean;
    infoPosition?: "top" | "bottom";
}
declare const Rating: React.FC<RatingProps>;

interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
    className?: string;
}
declare const Slider: React.FC<SliderProps>;

interface SpinnerProps {
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    text?: string;
    textPosition?: "left" | "right" | "top" | "bottom";
    type?: "circular" | "dots" | "pulse" | "gradient" | "bounce";
}
declare const Spinner: React.FC<SpinnerProps>;

interface StatCardProps {
    /** The title of the stat card */
    title: string;
    /** The main value to display */
    value: string | number;
    /** Optional icon component */
    icon?: IconType;
    /** Trend information */
    trend?: {
        value: number;
        isPositive: boolean;
        label?: string;
        showArrow?: boolean;
    };
    /** Additional description text */
    description?: string;
    /** Additional class for the card container */
    className?: string;
    /** Additional class for the icon container */
    iconClassName?: string;
    /** Additional class for the trend indicator */
    trendClassName?: string;
    /** Card style variant */
    variant?: "default" | "bordered" | "elevated" | "gradient";
    /** Loading state */
    loading?: boolean;
    /** Skeleton loading state */
    skeleton?: boolean;
    /** Click handler for the card */
    onClick?: () => void;
    /** Custom colors for the card */
    colors?: {
        bg?: string;
        text?: string;
        border?: string;
        iconBg?: string;
        iconColor?: string;
        trendPositive?: string;
        trendNegative?: string;
        gradient?: {
            from: string;
            to: string;
        };
    };
    /** Alert state */
    alert?: {
        message: string;
        type: "info" | "warning" | "error" | "success";
    };
    /** Prefix for the value */
    prefix?: string;
    /** Suffix for the value */
    suffix?: string;
    /** Format the value (e.g., currency, percentage) */
    format?: "number" | "currency" | "percentage" | "custom";
    /** Custom formatter function */
    formatter?: (value: string | number) => string;
    /** Animation duration for value changes */
    animationDuration?: number;
}
declare const StatCard: React.FC<StatCardProps>;

interface Step {
    label: string;
    description?: string;
    icon?: React.ReactNode;
    component?: React.ReactNode;
}
interface StepperProps {
    steps: Step[];
    current: number;
    className?: string;
    stepClassName?: string;
    stepContentClassName?: string;
    circleClassName?: string;
    activeCircleClassName?: string;
    completedCircleClassName?: string;
    inactiveCircleClassName?: string;
    labelClassName?: string;
    activeLabelClassName?: string;
    completedLabelClassName?: string;
    inactiveLabelClassName?: string;
    descriptionClassName?: string;
    activeDescriptionClassName?: string;
    completedDescriptionClassName?: string;
    inactiveDescriptionClassName?: string;
    lineClassName?: string;
    activeLineClassName?: string;
    completedLineClassName?: string;
    inactiveLineClassName?: string;
    showDescriptionOnMobile?: boolean;
    verticalOnMobile?: boolean;
    renderStep?: (step: Step, index: number, isActive: boolean, isCompleted: boolean) => React.ReactNode;
    renderCircle?: (step: Step, index: number, isActive: boolean, isCompleted: boolean) => React.ReactNode;
}
declare const Stepper: React.FC<StepperProps>;

interface TagInputProps {
    label?: string;
    placeholder?: string;
    leftIcon?: IconType;
    tags: string[];
    onChange: (tags: string[]) => void;
    className?: string;
    inputClassName?: string;
    tagClassName?: string;
}
declare const TagInput: React.FC<TagInputProps>;

interface TimelineItem {
    key: string;
    title: string;
    content: React.ReactNode;
    time?: string;
    icon?: IconType;
    status?: "success" | "error" | "warning" | "info";
}
interface TimelineProps {
    items: TimelineItem[];
    className?: string;
    itemClassName?: string;
    iconClassName?: string;
    contentClassName?: string;
    timeClassName?: string;
}
declare const Timeline: React.FC<TimelineProps>;

/**
 * Type of toast notification
 * @typedef {'success' | 'error' | 'info' | 'warning'} ToastType
 */
/**
 * Props for the Toast component
 * @interface ToastProps
 * @property {string} id - Unique identifier for the toast
 * @property {ToastType} type - Type of toast notification (success, error, info, warning)
 * @property {string} message - Main message content to display
 * @property {string} [title] - Optional title for the toast
 * @property {number} [duration=5000] - Duration in milliseconds before auto-dismiss (0 for persistent)
 * @property {'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'} [position='top-right'] - Position of the toast on screen
 * @property {(id: string) => void} onClose - Callback function when toast is closed
 * @property {IconType} [icon] - Custom icon component to override default icons
 * @property {{ label: string; onClick: () => void }} [action] - Optional action button configuration
 * @property {string} [className] - Additional CSS classes for the toast container
 * @property {string} [contentClassName] - Additional CSS classes for the toast content
 * @property {string} [titleClassName] - Additional CSS classes for the toast title
 * @property {string} [messageClassName] - Additional CSS classes for the toast message
 * @property {string} [iconClassName] - Additional CSS classes for the toast icon
 * @property {string} [closeButtonClassName] - Additional CSS classes for the close button
 * @property {string} [actionButtonClassName] - Additional CSS classes for the action button
 * @property {string} [progressClassName] - Additional CSS classes for the progress bar
 * @property {'slide' | 'fade' | 'zoom' | 'bounce' | 'flip'} [animation='slide'] - Animation style for the toast
 * @property {'fast' | 'normal' | 'slow'} [animationDuration='normal'] - Duration of the animation
 */
type ToastType = "success" | "error" | "info" | "warning";
interface ToastProps {
    id: string;
    type: ToastType;
    message: string;
    title?: string;
    duration?: number;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    onClose: (id: string) => void;
    icon?: IconType;
    action?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
    contentClassName?: string;
    titleClassName?: string;
    messageClassName?: string;
    iconClassName?: string;
    closeButtonClassName?: string;
    actionButtonClassName?: string;
    progressClassName?: string;
    animation?: "slide" | "fade" | "zoom" | "bounce" | "flip";
    animationDuration?: "fast" | "normal" | "slow";
}
/**
 * Toast component for displaying notifications
 * @component
 * @example
 * ```tsx
 * <Toast
 *   id="1"
 *   type="success"
 *   message="Operation successful!"
 *   title="Success"
 *   duration={3000}
 *   position="top-right"
 *   onClose={(id) => console.log(`Toast ${id} closed`)}
 * />
 * ```
 */
declare const Toast: React.FC<ToastProps>;

interface ToastContainerProps {
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    className?: string;
    limit?: number;
}
declare const ToastContainer: React.FC<ToastContainerProps>;

interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    delay?: number;
    className?: string;
    contentClassName?: string;
    arrowClassName?: string;
    animation?: "fade" | "zoom" | "slide" | "bounce";
    animationDuration?: "fast" | "normal" | "slow";
    maxWidth?: string;
    interactive?: boolean;
}
declare const Tooltip: React.FC<TooltipProps>;

interface UploadProps {
    onChange: (files: FileList) => void;
    multiple?: boolean;
    accept?: string;
    className?: string;
}
declare const Upload: React.FC<UploadProps>;

interface TabItem {
    key: string;
    label: string;
    icon?: IconType;
    content: React.ReactNode;
    disabled?: boolean;
}
interface TabsProps {
    items: TabItem[];
    defaultActiveKey?: string;
    onChange?: (key: string) => void;
    className?: string;
    tabClassName?: string;
    contentClassName?: string;
    activeTabClassName?: string;
    disabledTabClassName?: string;
}
declare const Tabs: React.FC<TabsProps>;

/**
 * Grid Component
 *
 * A flexible and responsive grid system that supports various layouts including:
 * - Responsive column layouts
 * - Masonry layouts
 * - Auto-fit layouts
 * - Custom gaps and spacing
 * - Column and row spanning
 *
 * @example
 * ```tsx
 * // Basic responsive grid
 * <Grid
 *   columns={{
 *     xs: 1,
 *     sm: 2,
 *     md: 3,
 *     lg: 4,
 *   }}
 *   gap={{ x: "1rem", y: "1rem" }}
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Grid>
 * ```
 *
 * @example
 * // Masonry layout with row spanning
 * <Grid
 *   masonry
 *   columns={{ xs: 1, sm: 2, md: 3 }}
 *   gap={{ x: "1.5rem", y: "1.5rem" }}
 * >
 *   <Col rowSpan={2}>
 *     <div>Tall Item</div>
 *   </Col>
 *   <Col>
 *     <div>Regular Item</div>
 *   </Col>
 * </Grid>
 * ```
 *
 * @example
 * // Auto-fit layout with custom styling
 * <Grid
 *   autoFit
 *   containerClassName="bg-gray-100"
 *   itemClassName="hover:scale-105"
 *   className="gap-6"
 * >
 *   <div>Auto Item 1</div>
 *   <div>Auto Item 2</div>
 * </Grid>
 * ```
 */
/**
 * Props for the Grid component.
 */
type GridProps = {
    /** Child elements to be rendered in the grid */
    children: React.ReactNode;
    /**
     * Number of columns at different breakpoints.
     * @property {number} [xs] - Number of columns on extra small screens (default: 1)
     * @property {number} [sm] - Number of columns on small screens (default: 2)
     * @property {number} [md] - Number of columns on medium screens (default: 3)
     * @property {number} [lg] - Number of columns on large screens (default: 4)
     * @property {number} [xl] - Number of columns on extra large screens (default: 5)
     * @property {number} [2xl] - Number of columns on 2xl screens (default: 6)
     */
    columns?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        "2xl"?: number;
    };
    /**
     * Gap between grid items.
     * @property {string} [x] - Horizontal gap (default: '1rem')
     * @property {string} [y] - Vertical gap (default: '1rem')
     */
    gap?: {
        x?: string;
        y?: string;
    };
    /** Whether to automatically fit items based on container width */
    autoFit?: boolean;
    /** Height of automatically generated rows (default: 'auto') */
    autoRows?: string;
    /** Whether to use masonry layout */
    masonry?: boolean;
    /** Additional classes for the grid container */
    className?: string;
    /** Additional classes for grid items */
    itemClassName?: string;
    /** Additional classes for the outer container */
    containerClassName?: string;
    /** Callback fired when grid layout is complete */
    onLayoutComplete?: () => void;
};
/**
 * Props for the Col component.
 */
type ColProps = {
    /** Child elements to be rendered in the column */
    children: React.ReactNode;
    /**
     * Column span at different breakpoints.
     * @property {number} [xs] - Column span on extra small screens
     * @property {number} [sm] - Column span on small screens
     * @property {number} [md] - Column span on medium screens
     * @property {number} [lg] - Column span on large screens
     * @property {number} [xl] - Column span on extra large screens
     * @property {number} [2xl] - Column span on 2xl screens
     */
    span?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        "2xl"?: number;
    };
    /** Number of rows to span */
    rowSpan?: number;
    /** Additional classes for the column */
    className?: string;
};
declare const Col: React.FC<ColProps>;
/**
 * Grid Component
 *
 * A flexible grid component that supports:
 * - Responsive column layouts
 * - Masonry layout
 * - Auto-fit layouts
 * - Custom gaps
 * - Column spanning
 *
 * @example
 * // Basic usage with responsive columns
 * <Grid
 *   columns={{
 *     xs: 1,
 *     sm: 2,
 *     md: 3,
 *     lg: 4,
 *   }}
 *   gap={{ x: "1rem", y: "1rem" }}
 * >
 *   <div className="col-span-1">Item 1</div>
 *   <div className="col-span-2">Item 2</div>
 * </Grid>
 *
 * @example
 * // Masonry layout
 * <Grid
 *   masonry
 *   columns={{
 *     xs: 1,
 *     sm: 2,
 *     md: 3,
 *   }}
 * >
 *   {items.map(item => (
 *     <div key={item.id}>{item.content}</div>
 *   ))}
 * </Grid>
 *
 * @example
 * // Auto-fit layout
 * <Grid
 *   autoFit
 *   gap={{ x: "1rem", y: "1rem" }}
 * >
 *   {items.map(item => (
 *     <div key={item.id}>{item.content}</div>
 *   ))}
 * </Grid>
 */
declare const Grid: React.FC<GridProps>;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The content to be rendered inside the container
     */
    children: React.ReactNode;
    /**
     * Maximum width of the container
     * @default "7xl"
     */
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full" | "none";
    /**
     * Padding configuration for different breakpoints
     * @default { x: "1rem", y: "1rem" }
     */
    padding?: {
        x?: string;
        y?: string;
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
    /**
     * Whether to center the container horizontally
     * @default true
     */
    center?: boolean;
    /**
     * Whether to add a background color
     * @default false
     */
    withBackground?: boolean;
    /**
     * Background color opacity (0-100)
     * @default 50
     */
    backgroundOpacity?: number;
    /**
     * Whether to add a border
     * @default false
     */
    withBorder?: boolean;
    /**
     * Border color opacity (0-100)
     * @default 50
     */
    borderOpacity?: number;
    /**
     * Whether to add backdrop blur effect
     * @default false
     */
    withBlur?: boolean;
    /**
     * Blur intensity (sm, md, lg, xl, 2xl, 3xl)
     * @default "sm"
     */
    blurIntensity?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    /**
     * Whether to add rounded corners
     * @default true
     */
    rounded?: boolean;
    /**
     * Border radius size (sm, md, lg, xl, 2xl, 3xl, full)
     * @default "xl"
     */
    roundedSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    /**
     * Additional classes for the container
     */
    className?: string;
    /**
     * Additional classes for the inner wrapper
     */
    wrapperClassName?: string;
}
declare const Container: React.FC<ContainerProps>;

export { Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, Calendar, type CalendarProps, Card, type CardProps, Col, type ColProps, Collapse, type CollapseProps, type Column, Container, type ContainerProps, Dropdown, type DropdownOption, type DropdownProps, Grid, type GridProps, Input, type InputProps, List, type ListItem, type ListProps, Modal, type ModalProps, Pagination, type PaginationProps, Popover, type PopoverProps, Progress, type ProgressProps, Rating, type RatingProps, Select, type SelectOption, type SelectProps, Skeleton, type SkeletonProps, Slider, type SliderProps, Spinner, type SpinnerProps, StatCard, type StatCardProps, Stepper, type StepperProps, Table, type TableProps, Tabs, type TabsProps, TagInput, type TagInputProps, Timeline, type TimelineProps, Toast, ToastContainer, type ToastContainerProps, type ToastProps, Tooltip, type TooltipProps, Upload, type UploadProps };
