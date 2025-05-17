import React from 'react';
import { IconType } from 'react-icons';

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

interface SelectOption {
    value: string;
    label: string;
    icon?: IconType;
    disabled?: boolean;
    description?: string;
    group?: string;
}
interface SelectProps {
    options: SelectOption[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    multiple?: boolean;
    searchable?: boolean;
    leftIcon?: IconType;
    rightIcon?: IconType;
    className?: string;
    disabled?: boolean;
    clearable?: boolean;
    maxDisplayedItems?: number;
    groupBy?: string;
    popupPosition?: "top" | "bottom";
    customOptionRenderer?: (option: SelectOption) => React.ReactNode;
    wrapperClassName?: string;
    labelClassName?: string;
    selectContainerClassName?: string;
    selectClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
    errorClassName?: string;
    optionsContainerClassName?: string;
    searchInputClassName?: string;
    optionsListClassName?: string;
    optionClassName?: string;
    checkmarkClassName?: string;
    groupHeaderClassName?: string;
    noOptionsClassName?: string;
}
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
 * Props for the Card component.
 *
 * @property {React.ReactNode} [title] - The card title.
 * @property {React.ReactNode} [subtitle] - The card subtitle.
 * @property {IconType} [icon] - Optional icon component.
 * @property {React.ReactNode} [children] - Card content.
 * @property {React.ReactNode} [footer] - Card footer content.
 * @property {"default" | "bordered" | "elevated" | "news"} [variant] - Card style variant.
 * @property {string} [className] - Additional class for the card container.
 * @property {string} [headerClassName] - Additional class for the card header.
 * @property {string} [bodyClassName] - Additional class for the card body.
 * @property {string} [footerClassName] - Additional class for the card footer.
 * @property {() => void} [onClick] - Click handler for the card.
 * @property {object} [image] - Image settings for the card.
 * @property {"scale" | "lift" | "glow" | "none"} [hoverEffect] - Hover effect style.
 * @property {boolean} [loading] - Show loading state.
 * @property {boolean} [skeleton] - Show skeleton placeholder.
 * @property {object} [metadata] - News card metadata (time, category, author, comments, views).
 * @property {string} [link] - Optional link for the card (news variant).
 */
interface CardProps {
    /** The card title. */
    title?: React.ReactNode;
    /** The card subtitle. */
    subtitle?: React.ReactNode;
    /** Optional icon component. */
    icon?: IconType;
    /** Card content. */
    children?: React.ReactNode;
    /** Card footer content. */
    footer?: React.ReactNode;
    /** Card style variant. */
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
     * @property {string} src - Image source URL.
     * @property {string} [alt] - Image alt text.
     * @property {"top" | "bottom" | "left" | "right"} [position] - Image position.
     * @property {"square" | "video" | "auto"} [aspectRatio] - Image aspect ratio.
     * @property {boolean} [overlay] - Show overlay on image.
     */
    image?: {
        src: string;
        alt?: string;
        position?: "top" | "bottom" | "left" | "right";
        aspectRatio?: "square" | "video" | "auto";
        overlay?: boolean;
    };
    /** Hover effect style. */
    hoverEffect?: "scale" | "lift" | "glow" | "none";
    /** Show loading state. */
    loading?: boolean;
    /** Show skeleton placeholder. */
    skeleton?: boolean;
    /**
     * News card metadata.
     * @property {string} [time] - Time or date string.
     * @property {string} [category] - News category.
     * @property {string} [author] - Author name.
     * @property {number} [comments] - Number of comments.
     * @property {number} [views] - Number of views.
     */
    metadata?: {
        time?: string;
        category?: string;
        author?: string;
        comments?: number;
        views?: number;
    };
    /** Optional link for the card (news variant). */
    link?: string;
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
    count?: number;
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

interface CalendarProps {
    value?: Date;
    onChange?: (date: Date) => void;
    className?: string;
    showTimePicker?: boolean;
    showSeconds?: boolean;
    hour12?: boolean;
    timeInterval?: number;
    secondInterval?: number;
    minDate?: Date;
    maxDate?: Date;
    disableDate?: (date: Date) => boolean;
    disableTime?: (date: Date, h: number, m: number, s: number) => boolean;
    timePickerInline?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    renderDay?: (date: Date, isSelected: boolean, isToday: boolean, disabled: boolean) => React.ReactNode;
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
    current: number;
    total: number;
    pageSize: number;
    onChange: (page: number) => void;
    className?: string;
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
    title: string;
    value: string | number;
    icon?: IconType;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    description?: string;
    className?: string;
    iconClassName?: string;
    trendClassName?: string;
}
declare const StatCard: React.FC<StatCardProps>;

interface Step {
    label: string;
    description?: string;
}
interface StepperProps {
    steps: Step[];
    current: number;
    className?: string;
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

export { Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, Calendar, type CalendarProps, Card, type CardProps, Collapse, type CollapseProps, type Column, Input, type InputProps, List, type ListItem, type ListProps, Modal, type ModalProps, Pagination, type PaginationProps, Popover, type PopoverProps, Progress, type ProgressProps, Rating, type RatingProps, Select, type SelectOption, type SelectProps, Skeleton, type SkeletonProps, Slider, type SliderProps, Spinner, type SpinnerProps, StatCard, type StatCardProps, Stepper, type StepperProps, Table, type TableProps, Tabs, type TabsProps, TagInput, type TagInputProps, Timeline, type TimelineProps, Toast, ToastContainer, type ToastContainerProps, type ToastProps, Tooltip, type TooltipProps, Upload, type UploadProps };
