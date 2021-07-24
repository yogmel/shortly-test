import { ReactNode } from "react";
import buttonStyles from "./styles/Button.module.scss";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Link = "link",
}

interface ButtonProps {
  type: ButtonType;
  className?: string;
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  const { type, className = "", children } = props;

  const style = buttonStyles[type];

  return (
    <button className={`${buttonStyles.button} ${style} ${className}`}>
      {children}
    </button>
  );
}
