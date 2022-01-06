import React from "react";
import styles from "./Button.module.scss";

interface Props {
  label: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const className = ["storybook-button", `storybook-button--${size}`, mode]
    .map((el) => styles[el])
    .join(" ");

  return (
    <button
      type="button"
      className={className}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export { Button };
