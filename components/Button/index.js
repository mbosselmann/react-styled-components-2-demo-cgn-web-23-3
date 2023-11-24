import styled, { css } from "styled-components";

export default styled.button`
  border: none;
  padding: 1rem;
  color: white;
  border-radius: 15px;
  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--color-primary)"};

  /*
  ${(props) =>
    (props.$variant === "text" || props.$variant === "outlined") &&
    css`
      background-color: transparent;
      color: var(--color-primary);
    `}
    */

  ${({ $variant }) =>
    $variant === "text" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
    `}

  ${(props) =>
    props.$variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
    `}

    ${(props) =>
    props.$variant === "contained" &&
    css`
      background-color: black;
      color: white;
    `}

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }
`;
