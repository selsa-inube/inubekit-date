import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContainer = styled.div`
  cursor: ${({ $disabled }) => $disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "280px")};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
`;

const StyledInputContainer = styled.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  padding: 0;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
  opacity: ${({ $disabled }) => $disabled && "0.5"};
  grid-template-columns: 1fr;
  border: 1px solid
    ${({ $disabled, $status, $focused, theme }) => {
      if ($disabled) {
        return (
          theme?.input?.border?.color?.disabled ||
          inube.input.border.color.disabled
        );
      }

      if ($status === "invalid") {
        return (
          theme?.input?.border?.color?.invalid ||
          inube.input.border.color.invalid
        );
      }

      if ($focused) {
        return (
          theme?.input?.border?.color?.focus || inube.input.border.color.focus
        );
      }
      return (
        theme?.input?.border?.color?.regular || inube.input.border.color.regular
      );
    }};
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: ${inube.typography.body.large.weight};
  line-height: ${inube.typography.body.large.lineHeight};
  letter-spacing: ${inube.typography.body.large.tracking};
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) =>
    theme?.input?.background?.color?.regular ||
    inube.input.background.color.regular};
  color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.input?.content?.color?.disabled ||
        inube.input.content.color.disabled
      : theme?.input?.content?.color?.regular ||
        inube.input.content.color.regular};

  width: ${({ $fullwidth }) => $fullwidth && "auto"};
  height: ${({ $size }) => ($size === "compact" ? "40px" : "48px")};

  border: none;

  ::placeholder {
    color: ${({ theme }) =>
      theme?.input?.content?.color?.regular ||
      inube.input.content.color.regular};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-calendar-picker-indicator {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  }

  &::-moz-calendar-picker-indicator {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  pointer-events: none;
  color: ${({ theme }) =>
    theme?.input?.message?.color?.regular || inube.input.message.color.regular};

  & svg {
    width: 14px;
    height: 14px;
    margin-top: 8px;
  }
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
};
