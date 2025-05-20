import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import type { IconType } from "react-icons";
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";

export interface DropdownOption {
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

export interface DropdownProps {
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
  renderOption?: (
    option: DropdownOption,
    isSelected: boolean
  ) => React.ReactNode;
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
  tooltip?: React.ComponentType<{ content: string; children: React.ReactNode }>;
  /** Custom badge component */
  badge?: React.ComponentType<{ content: string | number }>;
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

interface SubmenuProps {
  options: DropdownOption[];
  selectedValues: string[];
  themeClasses: {
    background: string;
    border: string;
    option: string;
    selected: string;
    text: string;
  };
  optionClassName?: string;
  optionsContainerClassName?: string;
  onOptionClick: (option: DropdownOption) => void;
  LinkComponent?: React.ComponentType<{
    href: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
  }>;
  level: number;
  display?: {
    icons?: boolean;
    descriptions?: boolean;
    arrow?: boolean;
    checkmark?: boolean;
    badges?: boolean;
    tooltips?: boolean;
  };
  checkmark?: React.ReactNode;
  badge?: React.ComponentType<{ content: string | number }>;
  tooltip?: React.ComponentType<{ content: string; children: React.ReactNode }>;
}

const Submenu: React.FC<SubmenuProps> = ({
  options,
  selectedValues,
  themeClasses,
  optionClassName,
  optionsContainerClassName,
  onOptionClick,
  LinkComponent,
  level,
  display = {
    icons: true,
    descriptions: true,
    arrow: true,
    checkmark: true,
    badges: false,
    tooltips: false,
  },
  checkmark,
  badge: Badge,
  tooltip: Tooltip,
}) => {
  const submenuRef = useRef<HTMLDivElement>(null);
  const [submenuPosition, setSubmenuPosition] = useState<{
    left: string;
    top: string;
  }>({ left: "calc(100% - 4px)", top: "0" });
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const updateSubmenuPosition = (optionElement: HTMLElement) => {
    if (!optionElement) return;

    const rect = optionElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const spaceRight = viewportWidth - rect.right;
    const spaceLeft = rect.left;
    const spaceBelow = viewportHeight - rect.top;
    const spaceAbove = rect.top;

    // Determine horizontal position
    const left =
      spaceRight < 200 && spaceLeft > spaceRight ? "auto" : "calc(100% - 4px)";
    const right =
      spaceRight < 200 && spaceLeft > spaceRight ? "calc(100% - 4px)" : "auto";

    // Determine vertical position
    const top = spaceBelow < 200 && spaceAbove > spaceBelow ? "auto" : "0";
    const bottom = spaceBelow < 200 && spaceAbove > spaceBelow ? "0" : "auto";

    setSubmenuPosition({ left, top });
  };

  useEffect(() => {
    const handleScroll = () => {
      const activeOption = document.querySelector(".submenu-active");
      if (activeOption) {
        updateSubmenuPosition(activeOption as HTMLElement);
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const renderOption = (option: DropdownOption) => {
    const isSelected = selectedValues.includes(option.value);
    const hasSubmenu = option.submenu && option.submenu.length > 0;

    const optionContent = (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {display.icons && option.icon && (
            <span className="mr-2">
              {React.createElement(option.icon, { className: "h-5 w-5" })}
            </span>
          )}
          <div>
            <div>{option.label}</div>
            {display.descriptions && option.description && (
              <div className={`text-xs opacity-75 ${themeClasses.text}`}>
                {option.description}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          {display.badges && Badge && option.data?.badge && (
            <Badge content={option.data.badge as string | number} />
          )}
          {display.checkmark &&
            isSelected &&
            (checkmark || <span className="ml-2">✓</span>)}
          {display.arrow && hasSubmenu && (
            <FaChevronRight className="h-4 w-4 ml-2" />
          )}
        </div>
      </div>
    );

    return (
      <div key={option.value} className="relative group">
        {display.tooltips && Tooltip && option.data?.tooltip ? (
          <Tooltip content={option.data.tooltip as string}>
            {optionContent}
          </Tooltip>
        ) : (
          optionContent
        )}
        {hasSubmenu && activeSubmenu === option.value && option.submenu && (
          <div
            className="absolute left-full top-0 z-50"
            style={{
              position: "absolute",
              left: "100%",
              top: 0,
              zIndex: 1000,
            }}
            onMouseEnter={() => setActiveSubmenu(null)}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <div
              className={`${themeClasses.background} border ${themeClasses.border} rounded-md shadow-lg ${optionsContainerClassName}`}
              style={{
                minWidth: "200px",
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {option.submenu.map((subOption) => (
                <div
                  key={subOption.value}
                  className="relative"
                  onMouseEnter={() => setActiveSubmenu(subOption.value)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <button
                    type="button"
                    onClick={() => onOptionClick(subOption)}
                    disabled={subOption.disabled}
                    className={`w-full px-4 py-2 text-left text-sm ${
                      subOption.disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    } ${
                      selectedValues.includes(subOption.value)
                        ? themeClasses.selected
                        : themeClasses.option
                    } ${subOption.className || ""} ${optionClassName}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {display.icons && subOption.icon && (
                          <span className="mr-2">
                            {React.createElement(subOption.icon, {
                              className: "h-5 w-5",
                            })}
                          </span>
                        )}
                        <div>
                          <div>{subOption.label}</div>
                          {display.descriptions && subOption.description && (
                            <div
                              className={`text-xs opacity-75 ${themeClasses.text}`}
                            >
                              {subOption.description}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center">
                        {display.badges && Badge && subOption.data?.badge && (
                          <Badge
                            content={subOption.data.badge as string | number}
                          />
                        )}
                        {display.checkmark &&
                          selectedValues.includes(subOption.value) &&
                          (checkmark || <span className="ml-2">✓</span>)}
                        {display.arrow &&
                          subOption.submenu &&
                          subOption.submenu.length > 0 && (
                            <FaChevronRight className="h-4 w-4 ml-2" />
                          )}
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      ref={submenuRef}
      className={`absolute ${
        submenuPosition.left === "auto" ? "left-full" : "right-full"
      } top-0 min-w-[200px] ${themeClasses.background} border ${
        themeClasses.border
      } rounded-md shadow-lg ${optionsContainerClassName}`}
      style={{ zIndex: level + 1 }}
    >
      {options.map(renderOption)}
    </div>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  disabled = false,
  isLoading = false,
  className = "",
  wrapperClassName = "",
  triggerClassName = "",
  optionsContainerClassName = "",
  optionClassName = "",
  colors,
  theme = "light",
  showArrow = true,
  plain = false,
  hover = false,
  renderTrigger,
  renderOption,
  renderGroup,
  onOpen,
  onClose,
  LinkComponent,
  searchable = false,
  onSearch,
  searchPlaceholder = "Search...",
  maxHeight = "300px",
  closeOnSelect = true,
  loadingSpinner,
  checkmark,
  groupDivider,
  tooltip: Tooltip,
  badge: Badge,
  display = {
    triggerIcon: true,
    triggerDescription: false,
    optionIcons: true,
    optionDescriptions: true,
    submenuIcons: true,
    submenuDescriptions: true,
    searchIcon: true,
    submenuArrow: true,
    dropdownArrow: true,
    loadingSpinner: true,
    checkmark: true,
    groupDivider: true,
    tooltips: false,
    badges: false,
    arrow: true,
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    value ? [value] : []
  );
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [position, setPosition] = useState<"top" | "bottom">("bottom");
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: string;
    bottom: string;
  }>({ top: "0", bottom: "auto" });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [submenuPosition, setSubmenuPosition] = useState<{
    left: string;
    top: string;
  }>({ left: "calc(100% - 4px)", top: "0" });

  const updateSubmenuPosition = (optionElement: HTMLElement) => {
    if (!optionElement) return;

    const rect = optionElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const spaceRight = viewportWidth - rect.right;
    const spaceLeft = rect.left;
    const spaceBelow = viewportHeight - rect.top;
    const spaceAbove = rect.top;

    // Determine horizontal position
    const left =
      spaceRight < 200 && spaceLeft > spaceRight ? "auto" : "calc(100% - 4px)";
    const right =
      spaceRight < 200 && spaceLeft > spaceRight ? "calc(100% - 4px)" : "auto";

    // Determine vertical position
    const top = spaceBelow < 200 && spaceAbove > spaceBelow ? "auto" : "0";
    const bottom = spaceBelow < 200 && spaceAbove > spaceBelow ? "0" : "auto";

    setSubmenuPosition({ left, top });
  };

  const updateDropdownPosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      setDropdownPosition(
        spaceBelow < 200 && spaceAbove > spaceBelow
          ? { top: "auto", bottom: "100%" }
          : { top: "100%", bottom: "auto" }
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      updateDropdownPosition();
      const activeOption = document.querySelector(".submenu-active");
      if (activeOption) {
        updateSubmenuPosition(activeOption as HTMLElement);
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const getThemeClasses = () => {
    if (colors) {
      return {
        trigger: plain
          ? colors.text || ""
          : `${colors.base || ""} ${colors.text || ""} ${colors.border || ""}`,
        hover: plain ? "" : colors.hover || "",
        focus: plain ? "" : colors.focus || "",
        background: colors.background || "",
        option: `${colors.option?.text || ""} ${
          colors.option?.hover?.background || ""
        } ${colors.option?.hover?.text || ""}`,
        selected: `${colors.option?.selected?.background || ""} ${
          colors.option?.selected?.text || ""
        }`,
        border: colors.border || "",
        text: colors.text || "",
        container: {
          background: colors.container?.background || "",
          border: colors.container?.border || "",
          shadow: colors.container?.shadow || "",
        },
        search: {
          background: colors.search?.background || "",
          text: colors.search?.text || "",
          border: colors.search?.border || "",
          placeholder: colors.search?.placeholder || "",
        },
        group: {
          text: colors.group?.text || "",
          background: colors.group?.background || "",
        },
        divider: colors.divider || "",
        description: colors.option?.description || "",
        disabled: {
          text: colors.option?.disabled?.text || "",
          background: colors.option?.disabled?.background || "",
        },
      };
    }

    return theme === "dark"
      ? {
          trigger: plain
            ? "text-white"
            : "bg-gray-800 text-white border-gray-700",
          hover: "hover:bg-gray-700 hover:text-white",
          focus: "focus:ring-gray-500 focus:border-gray-500",
          background: "bg-gray-900",
          option: "text-gray-200 hover:bg-gray-700 hover:text-white",
          selected: "bg-gray-700 text-white",
          border: "border-gray-700",
          text: "text-white",
          container: {
            background: "bg-gray-900",
            border: "border-gray-700",
            shadow: "shadow-lg",
          },
          search: {
            background: "bg-gray-800",
            text: "text-white",
            border: "border-gray-700",
            placeholder: "placeholder-gray-400",
          },
          group: {
            text: "text-gray-400",
            background: "bg-gray-900",
          },
          divider: "bg-gray-700",
          description: "text-gray-400",
          disabled: {
            text: "text-gray-500",
            background: "bg-gray-800",
          },
        }
      : {
          trigger: plain
            ? "text-gray-900"
            : "bg-white text-gray-900 border-gray-300",
          hover: "hover:bg-gray-50 hover:text-gray-900",
          focus: "focus:ring-blue-500 focus:border-blue-500",
          background: "bg-white",
          option: "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
          selected: "bg-blue-50 text-blue-900",
          border: "border-gray-200",
          text: "text-gray-900",
          container: {
            background: "bg-white",
            border: "border-gray-200",
            shadow: "shadow-lg",
          },
          search: {
            background: "bg-white",
            text: "text-gray-900",
            border: "border-gray-300",
            placeholder: "placeholder-gray-400",
          },
          group: {
            text: "text-gray-500",
            background: "bg-white",
          },
          divider: "bg-gray-200",
          description: "text-gray-500",
          disabled: {
            text: "text-gray-400",
            background: "bg-gray-50",
          },
        };
  };

  const themeClasses = getThemeClasses();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveSubmenu(null);
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (triggerRef.current && isOpen) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      setPosition(
        spaceBelow < 200 && spaceAbove > spaceBelow ? "top" : "bottom"
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleTriggerClick = () => {
    if (!disabled && !isLoading && !hover) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        onOpen?.();
      } else {
        onClose?.();
      }
    }
  };

  const handleTriggerHover = () => {
    if (!disabled && !isLoading && hover) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setIsHovering(true);
      setIsOpen(true);
      updateDropdownPosition();
      onOpen?.();
    }
  };

  const handleTriggerLeave = (event: React.MouseEvent) => {
    if (hover) {
      const relatedTarget = event.relatedTarget as HTMLElement;
      // Don't close if we're moving to the dropdown content
      if (relatedTarget?.closest(".dropdown-content")) {
        return;
      }

      // Add a small delay before closing
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      hoverTimeoutRef.current = setTimeout(() => {
        if (!isHovering) {
          setIsOpen(false);
          setActiveSubmenu(null);
          onClose?.();
        }
      }, 100);
    }
  };

  const handleDropdownContentHover = () => {
    if (hover) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setIsHovering(true);
      setIsOpen(true);
    }
  };

  const handleDropdownContentLeave = (event: React.MouseEvent) => {
    if (hover) {
      const relatedTarget = event.relatedTarget as HTMLElement;
      // Don't close if we're moving back to the trigger
      if (relatedTarget?.closest(".dropdown-trigger")) {
        return;
      }

      setIsHovering(false);
      // Add a small delay before closing
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      hoverTimeoutRef.current = setTimeout(() => {
        if (!isHovering) {
          setIsOpen(false);
          setActiveSubmenu(null);
          onClose?.();
        }
      }, 100);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;

    if (option.submenu) {
      setActiveSubmenu(option.value);
      return;
    }

    setSelectedValues([option.value]);
    onChange?.(option.value);
    if (closeOnSelect) {
      setIsOpen(false);
      setActiveSubmenu(null);
      onClose?.();
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          handleOptionClick(options[focusedIndex]);
        }
        break;
      case "Escape":
        event.preventDefault();
        setIsOpen(false);
        setActiveSubmenu(null);
        onClose?.();
        break;
    }
  };

  const getSelectedOption = () => {
    return options.find((option) => option.value === value);
  };

  const filteredOptions = searchQuery
    ? options.filter(
        (option) =>
          !option.hideFromSearch &&
          (option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            option.description
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase()))
      )
    : options;

  const selectedOption = getSelectedOption();

  const renderGroupHeader = (group: string) => {
    if (renderGroup) {
      return renderGroup(group);
    }
    return (
      <div
        className={`px-4 py-2 text-xs font-semibold ${themeClasses.group.text} ${themeClasses.group.background}`}
      >
        {group}
      </div>
    );
  };

  const renderGroupDivider = () => {
    if (groupDivider) {
      return groupDivider;
    }
    return <div className={`h-px ${themeClasses.divider} my-1`} />;
  };

  const handleOptionHover = (
    option: DropdownOption,
    event: React.MouseEvent
  ) => {
    if (option.submenu && option.submenu.length > 0) {
      const target = event.currentTarget as HTMLElement;
      target.classList.add("submenu-active");
      updateSubmenuPosition(target);
      setActiveSubmenu(option.value);
    }
  };

  const handleOptionLeave = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const relatedTarget = event.relatedTarget as HTMLElement;

    // Don't remove the active class or close the submenu if we're moving to a submenu
    if (relatedTarget?.closest(".submenu-container")) {
      return;
    }

    target.classList.remove("submenu-active");
    setActiveSubmenu(null);
  };

  const handleSubmenuHover = (option: DropdownOption) => {
    if (option.submenu && option.submenu.length > 0) {
      setActiveSubmenu(option.value);
    }
  };

  const handleSubmenuLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;

    // Don't close if we're moving back to the parent menu item
    if (relatedTarget?.closest(".group")) {
      return;
    }

    setActiveSubmenu(null);
  };

  const renderOptions = (options: DropdownOption[]) => {
    const groupedOptions = options.reduce((acc, option) => {
      const group = option.group || "default";
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(option);
      return acc;
    }, {} as Record<string, DropdownOption[]>);

    return Object.entries(groupedOptions).map(
      ([group, groupOptions], groupIndex) => (
        <div key={group}>
          {group !== "default" && renderGroupHeader(group)}
          {groupOptions.map((option, index) => {
            const isSelected = selectedValues.includes(option.value);
            const isSubmenuActive = activeSubmenu === option.value;
            const isFocused = index === focusedIndex;

            return renderOption ? (
              <div key={option.value}>{renderOption(option, isSelected)}</div>
            ) : (
              <div
                key={option.value}
                className="relative group"
                onMouseEnter={(event) => handleOptionHover(option, event)}
                onMouseLeave={handleOptionLeave}
              >
                {option.href ? (
                  LinkComponent ? (
                    <LinkComponent
                      href={option.href}
                      className={`block w-full px-4 py-2 text-left text-sm ${
                        option.disabled
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      } ${
                        isSelected ? themeClasses.selected : themeClasses.option
                      } ${option.className || ""} ${optionClassName} ${
                        isFocused ? "bg-gray-100 dark:bg-gray-800" : ""
                      }`}
                      onClick={() =>
                        !option.disabled && handleOptionClick(option)
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {display.optionIcons && option.icon && (
                            <span className="mr-2">
                              {React.createElement(option.icon, {
                                className: "h-5 w-5",
                              })}
                            </span>
                          )}
                          <div>
                            <div>{option.label}</div>
                            {display.optionDescriptions &&
                              option.description && (
                                <div
                                  className={`text-xs opacity-75 ${themeClasses.text}`}
                                >
                                  {option.description}
                                </div>
                              )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          {display.badges && Badge && option.data?.badge && (
                            <Badge
                              content={option.data.badge as string | number}
                            />
                          )}
                          {display.checkmark &&
                            isSelected &&
                            (checkmark || <span className="ml-2">✓</span>)}
                          {display.arrow && option.submenu && (
                            <FaChevronRight className="h-4 w-4 ml-2" />
                          )}
                        </div>
                      </div>
                    </LinkComponent>
                  ) : (
                    <a
                      href={option.href}
                      className={`block w-full px-4 py-2 text-left text-sm ${
                        option.disabled
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      } ${
                        isSelected ? themeClasses.selected : themeClasses.option
                      } ${option.className || ""} ${optionClassName} ${
                        isFocused ? "bg-gray-100 dark:bg-gray-800" : ""
                      }`}
                      onClick={() =>
                        !option.disabled && handleOptionClick(option)
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {display.optionIcons && option.icon && (
                            <span className="mr-2">
                              {React.createElement(option.icon, {
                                className: "h-5 w-5",
                              })}
                            </span>
                          )}
                          <div>
                            <div>{option.label}</div>
                            {display.optionDescriptions &&
                              option.description && (
                                <div
                                  className={`text-xs opacity-75 ${themeClasses.text}`}
                                >
                                  {option.description}
                                </div>
                              )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          {display.badges && Badge && option.data?.badge && (
                            <Badge
                              content={option.data.badge as string | number}
                            />
                          )}
                          {display.checkmark &&
                            isSelected &&
                            (checkmark || <span className="ml-2">✓</span>)}
                          {display.arrow && option.submenu && (
                            <FaChevronRight className="h-4 w-4 ml-2" />
                          )}
                        </div>
                      </div>
                    </a>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={() => handleOptionClick(option)}
                    disabled={option.disabled}
                    className={`w-full px-4 py-2 text-left text-sm ${
                      option.disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    } ${
                      isSelected ? themeClasses.selected : themeClasses.option
                    } ${option.className || ""} ${optionClassName} ${
                      isFocused ? "bg-gray-100 dark:bg-gray-800" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {display.optionIcons && option.icon && (
                          <span className="mr-2">
                            {React.createElement(option.icon, {
                              className: "h-5 w-5",
                            })}
                          </span>
                        )}
                        <div>
                          <div>{option.label}</div>
                          {display.optionDescriptions && option.description && (
                            <div
                              className={`text-xs opacity-75 ${themeClasses.text}`}
                            >
                              {option.description}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center">
                        {display.badges && Badge && option.data?.badge && (
                          <Badge
                            content={option.data.badge as string | number}
                          />
                        )}
                        {display.checkmark &&
                          isSelected &&
                          (checkmark || <span className="ml-2">✓</span>)}
                        {display.arrow && option.submenu && (
                          <FaChevronRight className="h-4 w-4 ml-2" />
                        )}
                      </div>
                    </div>
                  </button>
                )}
                {isSubmenuActive &&
                  option.submenu &&
                  option.submenu.length > 0 && (
                    <div
                      className="absolute z-50 submenu-container"
                      style={{
                        position: "absolute",
                        left: submenuPosition.left,
                        right:
                          submenuPosition.left === "auto"
                            ? "calc(100% - 4px)"
                            : "auto",
                        top: submenuPosition.top,
                        bottom: submenuPosition.top === "auto" ? "0" : "auto",
                        zIndex: 1000,
                      }}
                      onMouseEnter={() => handleSubmenuHover(option)}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <div
                        className={`${themeClasses.background} border ${themeClasses.border} rounded-md shadow-lg ${optionsContainerClassName}`}
                        style={{
                          minWidth: "200px",
                          marginLeft: "4px",
                        }}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      >
                        {option.submenu.map((subOption) => (
                          <div
                            key={subOption.value}
                            className="relative"
                            onMouseEnter={() => handleSubmenuHover(subOption)}
                            onMouseLeave={handleSubmenuLeave}
                          >
                            {subOption.href ? (
                              LinkComponent ? (
                                <LinkComponent
                                  href={subOption.href}
                                  className={`block w-full px-4 py-2 text-left text-sm ${
                                    subOption.disabled
                                      ? "opacity-50 cursor-not-allowed"
                                      : "cursor-pointer"
                                  } ${themeClasses.option} ${
                                    themeClasses.container.background
                                  } ${
                                    subOption.className || ""
                                  } ${optionClassName}`}
                                  onClick={() =>
                                    !subOption.disabled &&
                                    handleOptionClick(subOption)
                                  }
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      {display.submenuIcons &&
                                        subOption.icon && (
                                          <span className="mr-2">
                                            {React.createElement(
                                              subOption.icon,
                                              {
                                                className: "h-5 w-5",
                                              }
                                            )}
                                          </span>
                                        )}
                                      <div>
                                        <div>{subOption.label}</div>
                                        {display.submenuDescriptions &&
                                          subOption.description && (
                                            <div
                                              className={`text-xs opacity-75 ${themeClasses.text}`}
                                            >
                                              {subOption.description}
                                            </div>
                                          )}
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      {display.badges &&
                                        Badge &&
                                        subOption.data?.badge && (
                                          <Badge
                                            content={
                                              subOption.data.badge as
                                                | string
                                                | number
                                            }
                                          />
                                        )}
                                      {display.checkmark &&
                                        selectedValues.includes(
                                          subOption.value
                                        ) &&
                                        (checkmark || (
                                          <span className="ml-2">✓</span>
                                        ))}
                                      {display.arrow &&
                                        subOption.submenu &&
                                        subOption.submenu.length > 0 && (
                                          <FaChevronRight className="h-4 w-4 ml-2" />
                                        )}
                                    </div>
                                  </div>
                                </LinkComponent>
                              ) : (
                                <a
                                  href={subOption.href}
                                  className={`block w-full px-4 py-2 text-left text-sm ${
                                    subOption.disabled
                                      ? "opacity-50 cursor-not-allowed"
                                      : "cursor-pointer"
                                  } ${themeClasses.option} ${
                                    subOption.className || ""
                                  } ${optionClassName}`}
                                  onClick={() =>
                                    !subOption.disabled &&
                                    handleOptionClick(subOption)
                                  }
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      {display.submenuIcons &&
                                        subOption.icon && (
                                          <span className="mr-2">
                                            {React.createElement(
                                              subOption.icon,
                                              {
                                                className: "h-5 w-5",
                                              }
                                            )}
                                          </span>
                                        )}
                                      <div>
                                        <div>{subOption.label}</div>
                                        {display.submenuDescriptions &&
                                          subOption.description && (
                                            <div
                                              className={`text-xs opacity-75 ${themeClasses.text}`}
                                            >
                                              {subOption.description}
                                            </div>
                                          )}
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      {display.badges &&
                                        Badge &&
                                        subOption.data?.badge && (
                                          <Badge
                                            content={
                                              subOption.data.badge as
                                                | string
                                                | number
                                            }
                                          />
                                        )}
                                      {display.checkmark &&
                                        selectedValues.includes(
                                          subOption.value
                                        ) &&
                                        (checkmark || (
                                          <span className="ml-2">✓</span>
                                        ))}
                                      {display.arrow &&
                                        subOption.submenu &&
                                        subOption.submenu.length > 0 && (
                                          <FaChevronRight className="h-4 w-4 ml-2" />
                                        )}
                                    </div>
                                  </div>
                                </a>
                              )
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleOptionClick(subOption)}
                                disabled={subOption.disabled}
                                className={`w-full px-4 py-2 text-left text-sm ${
                                  subOption.disabled
                                    ? "opacity-50 cursor-not-allowed"
                                    : "cursor-pointer"
                                } ${themeClasses.option} ${
                                  subOption.className || ""
                                } ${optionClassName}`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    {display.submenuIcons && subOption.icon && (
                                      <span className="mr-2">
                                        {React.createElement(subOption.icon, {
                                          className: "h-5 w-5",
                                        })}
                                      </span>
                                    )}
                                    <div>
                                      <div>{subOption.label}</div>
                                      {display.submenuDescriptions &&
                                        subOption.description && (
                                          <div
                                            className={`text-xs opacity-75 ${themeClasses.text}`}
                                          >
                                            {subOption.description}
                                          </div>
                                        )}
                                    </div>
                                  </div>
                                  <div className="flex items-center">
                                    {display.badges &&
                                      Badge &&
                                      subOption.data?.badge && (
                                        <Badge
                                          content={
                                            subOption.data.badge as
                                              | string
                                              | number
                                          }
                                        />
                                      )}
                                    {display.checkmark &&
                                      selectedValues.includes(
                                        subOption.value
                                      ) &&
                                      (checkmark || (
                                        <span className="ml-2">✓</span>
                                      ))}
                                    {display.arrow &&
                                      subOption.submenu &&
                                      subOption.submenu.length > 0 && (
                                        <FaChevronRight className="h-4 w-4 ml-2" />
                                      )}
                                  </div>
                                </div>
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
          {groupIndex < Object.keys(groupedOptions).length - 1 &&
            display.groupDivider &&
            renderGroupDivider()}
        </div>
      )
    );
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block ${wrapperClassName}`}
      onMouseEnter={handleTriggerHover}
      onMouseLeave={handleTriggerLeave}
      onKeyDown={handleKeyDown}
    >
      {renderTrigger ? (
        renderTrigger(selectedOption)
      ) : (
        <button
          ref={triggerRef}
          type="button"
          onClick={handleTriggerClick}
          disabled={disabled || isLoading}
          className={`inline-flex items-center px-4 py-2 text-sm font-medium transition-colors dropdown-trigger ${
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          } ${themeClasses.trigger} ${themeClasses.hover} ${
            themeClasses.focus
          } ${triggerClassName} ${className}`}
          onMouseEnter={handleTriggerHover}
          onMouseLeave={handleTriggerLeave}
        >
          {isLoading && display.loadingSpinner ? (
            loadingSpinner || (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            )
          ) : (
            <div className="flex items-center">
              {display.triggerIcon && selectedOption?.icon && (
                <span className="mr-2">
                  {React.createElement(selectedOption.icon, {
                    className: "h-5 w-5",
                  })}
                </span>
              )}
              <div>
                <div>{selectedOption?.label || "Menu"}</div>
                {display.triggerDescription && selectedOption?.description && (
                  <div className="text-xs opacity-75">
                    {selectedOption.description}
                  </div>
                )}
              </div>
              {showArrow && display.dropdownArrow && (
                <FaChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              )}
            </div>
          )}
        </button>
      )}

      {isOpen && (
        <div
          className={`absolute z-10 min-w-[200px] dropdown-content ${themeClasses.container.background} border ${themeClasses.container.border} ${themeClasses.container.shadow} rounded-md ${optionsContainerClassName}`}
          style={{
            maxHeight,
            // Add a small buffer zone at the top
            marginTop: "-4px",
            paddingTop: "4px",
            top: dropdownPosition.top,
            bottom: dropdownPosition.bottom,
          }}
          onMouseEnter={handleDropdownContentHover}
          onMouseLeave={handleDropdownContentLeave}
        >
          {searchable && (
            <div className={`p-2 border-b ${themeClasses.border}`}>
              <div className="relative">
                {display.searchIcon && (
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                )}
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder={searchPlaceholder}
                  className={`w-full pl-10 pr-4 py-2 text-sm rounded-md ${themeClasses.search.background} ${themeClasses.search.text} ${themeClasses.search.border} focus:outline-none focus:ring-2 focus:ring-blue-500 ${themeClasses.search.placeholder}`}
                />
              </div>
            </div>
          )}

          <div
            style={{
              maxHeight: `calc(${maxHeight} - ${searchable ? "60px" : "0px"})`,
            }}
          >
            {renderOptions(filteredOptions)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
