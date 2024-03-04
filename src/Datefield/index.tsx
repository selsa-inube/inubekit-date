import { useState } from "react";
import { MdOutlineWarning } from "react-icons/md";

import { Text } from "@inubekit/text";
import { Label } from "@inubekit/label";
import { Icon } from "@inubekit/icon";

import { Size, Status } from "./props";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
} from "./styles";

interface IDatefield {
  label?: string;
  name?: string;
  id: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  status?: Status;
  message?: string;
  size?: Size;
  fullwidth?: boolean;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  focused?: boolean;
}

const Datefield = (props: IDatefield) => {
  const {
    label,
    name,
    id,
    disabled = false,
    value,
    onChange,
    required = false,
    status = "pending",
    message,
    size = "wide",
    fullwidth = false,
    onFocus,
    onBlur,
  } = props;

  const [focused, setFocused] = useState(false);

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  return (
    <StyledContainer $fullwidth={fullwidth} $disabled={disabled} $size={size}>
      <StyledContainerLabel
        $alignItems="center"
        $wrap="wrap"
        $size={size}
        $disabled={disabled}
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            focused={focused}
            invalid={status === "invalid" ? true : false}
            size={size === "compact" ? "medium" : "large"}
            margin="0px 0px 0px 16px"
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text
            type="body"
            size="small"
            appearance="dark"
            margin="0px 0px 0px 4px"
            textAlign={"center"}
          >
            (Requerido)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        $disabled={disabled}
        $focused={focused}
        $status={status}
      >
        <StyledInput
          label={label}
          name={name}
          id={id}
          disabled={disabled}
          type={"date"}
          value={value}
          $required={required}
          $size={size}
          $status={status}
          $fullwidth={fullwidth}
          $focused={focused}
          onChange={onChange}
          onFocus={interceptFocus}
          onBlur={interceptBlur}
        />
      </StyledInputContainer>

      {status === "invalid" && !disabled && (
        <StyledMessageContainer $disabled={disabled} $status={status}>
          <Icon
            appearance="danger"
            disabled={disabled}
            icon={<MdOutlineWarning />}
          />
          <Text
            type="body"
            size="small"
            textAlign="start"
            margin="8px 0px 0px 4px"
            appearance="danger"
            disabled={disabled}
          >
            {message && `${message}`}
          </Text>
        </StyledMessageContainer>
      )}
    </StyledContainer>
  );
};

export { Datefield };
export type { IDatefield };
