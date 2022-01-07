import React from "react";
import styled from "styled-components";

import styles from "./Button.module.scss";

interface Props {
  label: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

// YOU CAN USE STYLED COMPONENT IF YOU LIKE TO
const StyledButton = styled.button<Props>`
  font-size: ${(props) => (props.size === "small" ? "12px" : "16px")};
`;

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
