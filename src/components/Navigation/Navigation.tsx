import React, { useState, useRef, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  badge?: number | string;
  isActive?: boolean;
  isNew?: boolean;
  isHighlighted?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface NavigationProps {
  /** Logo component or image */
  logo?: React.ReactNode;
  /** Navigation items */
  items: NavItem[];
  /** Additional class for the container */
  className?: string;
  /** Additional class for the logo container */
  logoClassName?: string;
  /** Additional class for the nav items container */
  itemsClassName?: string;
  /** Additional class for the mobile menu */
  mobileMenuClassName?: string;
  /** Show mobile menu button */
  showMobileMenu?: boolean;
  /** Mobile menu open state */
  mobileMenuOpen?: boolean;
  /** Mobile menu toggle callback */
  onMobileMenuToggle?: (open: boolean) => void;
  /** Render custom nav item */
  renderItem?: (item: NavItem, index: number) => React.ReactNode;
  /** Render custom mobile menu */
  renderMobileMenu?: (items: NavItem[]) => React.ReactNode;
  /** Fixed position */
  fixed?: boolean;
  /** Transparent background */
  transparent?: boolean;
  /** Blur effect */
  blur?: boolean;
  /** Glass effect */
  glass?: boolean;
  /** Gradient background */
  gradient?: boolean;
  /** Gradient colors */
  gradientColors?: string[];
  /** Animation duration */
  animationDuration?: number;
  /** On item click */
  onItemClick?: (item: NavItem) => void;
  /** Active item */
  activeItem?: string;
  /** Show badges */
  showBadges?: boolean;
  /** Show new indicators */
  showNewIndicators?: boolean;
  /** Show highlighted items */
  showHighlighted?: boolean;
  /** Custom dropdown renderer */
  renderDropdown?: (item: NavItem) => React.ReactNode;
  /** Custom mobile menu renderer */
  renderMobileMenuContent?: (items: NavItem[]) => React.ReactNode;
  /** Custom logo renderer */
  renderLogo?: (logo: React.ReactNode) => React.ReactNode;
  /** Custom mobile menu button renderer */
  renderMobileMenuButton?: (
    isOpen: boolean,
    onClick: () => void
  ) => React.ReactNode;
  /** Custom dropdown button renderer */
  renderDropdownButton?: (
    item: NavItem,
    isOpen: boolean,
    onClick: () => void
  ) => React.ReactNode;
  /** Custom mobile menu item renderer */
  renderMobileMenuItem?: (item: NavItem, index: number) => React.ReactNode;
  /** Custom dropdown item renderer */
  renderDropdownItem?: (item: NavItem, index: number) => React.ReactNode;
  /** Custom mobile menu container renderer */
  renderMobileMenuContainer?: (children: React.ReactNode) => React.ReactNode;
  /** Custom dropdown container renderer */
  renderDropdownContainer?: (children: React.ReactNode) => React.ReactNode;
  /** Custom nav item container renderer */
  renderNavItemContainer?: (children: React.ReactNode) => React.ReactNode;
  /** Custom nav items container renderer */
  renderNavItemsContainer?: (children: React.ReactNode) => React.ReactNode;
  /** Custom logo container renderer */
  renderLogoContainer?: (children: React.ReactNode) => React.ReactNode;
  /** Custom nav container renderer */
  renderNavContainer?: (children: React.ReactNode) => React.ReactNode;
  /** Custom mobile menu button container renderer */
  renderMobileMenuButtonContainer?: (
    children: React.ReactNode
  ) => React.ReactNode;
  /** Custom dropdown button container renderer */
  renderDropdownButtonContainer?: (
    children: React.ReactNode
  ) => React.ReactNode;
  /** Custom mobile menu item container renderer */
  renderMobileMenuItemContainer?: (
    children: React.ReactNode
  ) => React.ReactNode;
  /** Custom dropdown item container renderer */
  renderDropdownItemContainer?: (children: React.ReactNode) => React.ReactNode;
  /** Search options */
  search?: {
    value: string;
    onChange: (val: string) => void;
    onSearch: (val: string) => void;
    placeholder?: string;
    buttonLabel?: string;
  };
  /** Colors */
  colors?: {
    bg?: string;
    text?: string;
    border?: string;
    activeBg?: string;
    activeText?: string;
    dropdownBg?: string;
    dropdownText?: string;
    searchBg?: string;
    searchText?: string;
    searchButtonBg?: string;
    searchButtonText?: string;
  };
  /** Mobile menu width */
  mobileMenuWidth?: string;
  /** Mobile menu position */
  mobileMenuPosition?: "absolute" | "fixed" | "static";
  /** Close mobile menu on link click */
  closeMobileOnClick?: boolean;
}

const defaultColors = {
  bg: "bg-white",
  text: "text-gray-900",
  border: "border-gray-200",
  activeBg: "bg-blue-100",
  activeText: "text-blue-700",
  dropdownBg: "bg-white",
  dropdownText: "text-gray-900",
  searchBg: "bg-gray-100",
  searchText: "text-gray-900",
  searchButtonBg: "bg-blue-600",
  searchButtonText: "text-white",
};

const Navigation: React.FC<NavigationProps> = ({
  logo,
  items,
  search,
  colors = {},
  className = "",
  logoClassName = "",
  itemsClassName = "",
  mobileMenuClassName = "",
  showMobileMenu = true,
  mobileMenuOpen = false,
  onMobileMenuToggle,
  renderItem,
  renderMobileMenu,
  fixed = false,
  transparent = false,
  blur = false,
  glass = false,
  gradient = false,
  gradientColors = ["from-blue-600", "to-blue-800"],
  animationDuration = 200,
  onItemClick,
  activeItem,
  showBadges = true,
  showNewIndicators = true,
  showHighlighted = true,
  renderDropdown,
  renderMobileMenuContent,
  renderLogo,
  renderMobileMenuButton,
  renderDropdownButton,
  renderMobileMenuItem,
  renderDropdownItem,
  renderMobileMenuContainer,
  renderDropdownContainer,
  renderNavItemContainer,
  renderNavItemsContainer,
  renderLogoContainer,
  renderNavContainer,
  renderMobileMenuButtonContainer,
  renderDropdownButtonContainer,
  renderMobileMenuItemContainer,
  renderDropdownItemContainer,
  mobileMenuWidth = "w-full",
  mobileMenuPosition = "absolute",
  closeMobileOnClick = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(mobileMenuOpen);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const mergedColors = { ...defaultColors, ...colors };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        onMobileMenuToggle?.(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onMobileMenuToggle]);

  const handleMobileMenuToggle = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  };

  const handleDropdownToggle = (itemLabel: string) => {
    setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
  };

  const getBaseClasses = () => {
    const backgroundClasses = transparent
      ? "bg-transparent"
      : gradient
      ? `bg-gradient-to-r ${gradientColors.join(" ")}`
      : "bg-white dark:bg-gray-900";

    return `
      ${fixed ? "fixed top-0 left-0 right-0 z-50" : ""}
      ${backgroundClasses}
      ${blur ? "backdrop-blur-md" : ""}
      ${glass ? "bg-opacity-80 backdrop-blur-md" : ""}
      transition-all duration-${animationDuration}
    `;
  };

  const renderNavItem = (item: NavItem, index: number) => {
    if (renderItem) {
      return renderItem(item, index);
    }

    const isActive = activeItem === item.href || item.isActive;
    const hasDropdown = item.children && item.children.length > 0;

    const navItemContent = (
      <a
        href={item.href}
        className={`
          px-4 py-2 rounded-md transition-colors
          ${
            item.isHighlighted && showHighlighted
              ? "bg-blue-50 dark:bg-blue-900/50"
              : ""
          }
          ${
            isActive
              ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
              : ""
          }
          hover:bg-gray-50 dark:hover:bg-gray-800
          ${item.className || ""}
        `}
        onClick={(e) => {
          if (hasDropdown) {
            e.preventDefault();
            handleDropdownToggle(item.label);
          }
          item.onClick?.();
          onItemClick?.(item);
        }}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label}
        {item.badge && showBadges && (
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
            {item.badge}
          </span>
        )}
        {item.isNew && showNewIndicators && (
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
            New
          </span>
        )}
        {hasDropdown && <HiChevronDown className="ml-1 inline-block w-4 h-4" />}
      </a>
    );

    const dropdownContent = hasDropdown && activeDropdown === item.label && (
      <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        {renderDropdown ? (
          renderDropdown(item)
        ) : (
          <div className="py-1">
            {item.children?.map((child, childIndex) =>
              renderDropdownItem ? (
                renderDropdownItem(child, childIndex)
              ) : (
                <a
                  key={childIndex}
                  href={child.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => {
                    child.onClick?.();
                    onItemClick?.(child);
                  }}
                >
                  {child.icon && <span className="mr-2">{child.icon}</span>}
                  {child.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    );

    const navItemContainer = (
      <div key={index} className="relative">
        {navItemContent}
        {dropdownContent}
      </div>
    );

    return renderNavItemContainer
      ? renderNavItemContainer(navItemContainer)
      : navItemContainer;
  };

  const renderMobileMenuItems = () => {
    if (renderMobileMenu) {
      return renderMobileMenu(items);
    }

    if (renderMobileMenuContent) {
      return renderMobileMenuContent(items);
    }

    const mobileMenuItems = items.map((item, index) =>
      renderMobileMenuItem ? (
        renderMobileMenuItem(item, index)
      ) : (
        <a
          key={index}
          href={item.href}
          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
          onClick={() => {
            item.onClick?.();
            onItemClick?.(item);
          }}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </a>
      )
    );

    const mobileMenuContainer = (
      <div className="px-2 pt-2 pb-3 space-y-1">{mobileMenuItems}</div>
    );

    return renderMobileMenuContainer
      ? renderMobileMenuContainer(mobileMenuContainer)
      : mobileMenuContainer;
  };

  const navItems = items.map((item, index) => renderNavItem(item, index));
  const navItemsContainer = (
    <div
      className={`hidden md:flex items-center z-[1000] space-x-4 ${itemsClassName}`}
    >
      {navItems}
    </div>
  );

  const mobileMenuButton =
    showMobileMenu &&
    (renderMobileMenuButton ? (
      renderMobileMenuButton(isMobileMenuOpen, handleMobileMenuToggle)
    ) : (
      <button
        onClick={handleMobileMenuToggle}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {isMobileMenuOpen ? (
          <HiX className="w-6 h-6" />
        ) : (
          <HiMenu className="w-6 h-6" />
        )}
      </button>
    ));

  const mobileMenuButtonContainer = renderMobileMenuButtonContainer ? (
    renderMobileMenuButtonContainer(mobileMenuButton)
  ) : (
    <div className="md:hidden">{mobileMenuButton}</div>
  );

  const logoContainer = renderLogoContainer ? (
    renderLogoContainer(logo)
  ) : (
    <div className={logoClassName}>{renderLogo ? renderLogo(logo) : logo}</div>
  );

  // Mobile menu position classes
  const mobileMenuPositionClass =
    mobileMenuPosition === "fixed"
      ? "fixed left-0 top-16 z-50"
      : mobileMenuPosition === "absolute"
      ? "absolute left-0 top-16 z-50"
      : "static";

  const navContainer = (
    <nav className={`h-16 ${getBaseClasses()} border-b z-40 ${className}`}>
      <div className="flex items-center justify-between h-full px-4">
        {logoContainer}
        {renderNavItemsContainer
          ? renderNavItemsContainer(navItemsContainer)
          : navItemsContainer}
        {mobileMenuButtonContainer}
      </div>
      {showMobileMenu && isMobileMenuOpen && (
        <div
          className={`md:hidden ${mobileMenuPositionClass} ${mobileMenuWidth} ${mobileMenuClassName}`}
          ref={mobileMenuRef}
        >
          {renderMobileMenuItems()}
        </div>
      )}
    </nav>
  );

  return renderNavContainer ? renderNavContainer(navContainer) : navContainer;
};

export default Navigation;
