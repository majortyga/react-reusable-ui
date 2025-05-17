declare module "react-icons" {
  import { ComponentType, SVGAttributes } from "react";
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = ComponentType<IconBaseProps>;
}

declare module "react-icons/fi" {
  import { IconType } from "react-icons";
  export const FiSearch: IconType;
  export const FiUser: IconType;
  export const FiMail: IconType;
  export const FiLock: IconType;
}

declare module "react-icons/io" {
  import { IconType } from "react-icons";
  export const IoIosArrowDown: IconType;
}

declare module "react-icons/io5" {
  import { IconType } from "react-icons";
  export const IoClose: IconType;
}
