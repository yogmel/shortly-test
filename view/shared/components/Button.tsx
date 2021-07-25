import { ReactNode } from "react";
import buttonStyles from "./styles/Button.module.scss";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Link = "link",
}

interface ButtonProps {
  type: ButtonType;
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const {
    type,
    className = "",
    active = false,
    disabled = false,
    onClick,
    children,
  } = props;

  const styleActive = active ? buttonStyles[type + "Active"] : "";

  const style = buttonStyles[type];

  return (
    <button
      className={`${buttonStyles.button} ${styleActive} ${
        active ? "active" : ""
      } ${style} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
