import React, { LegacyRef, PropsWithChildren, forwardRef } from "react";

export interface IProps {
  color?: "primary" | "warning" | "danger" | "success" | "info" | "rose" | "gray" | "transparent" | "white" | "outlined" | "simple";
  size?: "sm" | "lg";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  children?: React.ReactNode;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps: Partial<IProps> = {
  color: "primary",
  className: "",
};

const RegularButton = forwardRef((props:PropsWithChildren<IProps>, ref: LegacyRef<HTMLButtonElement>) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  return (
    <button type="button" {...rest} ref={ref} className={`button ${className} button-${color} button-${size} ${justIcon ? "button-just-icon" : ""}`}>
      {children}
    </button>
  );
});

RegularButton.defaultProps = defaultProps;

export default RegularButton;
