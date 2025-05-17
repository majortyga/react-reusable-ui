/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "rounded";
  initials?: string;
  icon?: React.ReactNode;
  className?: string;
}

const sizeMap = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 72,
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = "md",
  shape = "circle",
  initials,
  icon,
  className = "",
}) => {
  const px = sizeMap[size];
  const base = `inline-flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold select-none ${className}`;
  const rounded = shape === "circle" ? "rounded-full" : "rounded-lg";

  return (
    <span
      className={`${base} ${rounded}`}
      style={{ width: px, height: px, fontSize: px / 2.2 }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`object-cover w-full h-full ${rounded}`}
        />
      ) : initials ? (
        <span>{initials}</span>
      ) : icon ? (
        icon
      ) : (
        <span>?</span>
      )}
    </span>
  );
};

export default Avatar;
