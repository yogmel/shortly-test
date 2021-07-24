import { ReactNode } from "react";
import buttonStyles from "./styles/Button.module.scss";

export enum ButtonType {
  Primary = "primary",
  Link = "link",
}

interface ButtonProps {
  type: ButtonType;
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  const { type, children } = props;

  const style = buttonStyles[type];

  return (
    <button className={`${buttonStyles.button} ${style}`}>{children}</button>
  );
}
