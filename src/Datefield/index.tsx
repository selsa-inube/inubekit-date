import { useContext, useState } from "react";
import { MdOutlineWarning } from "react-icons/md";

import { ITextAppearance, Text } from "@inubekit/text";
import { Label } from "@inubekit/label";
import { Icon } from "@inubekit/icon";

import { IDatefieldSize, IDatefieldStatus } from "./props";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
} from "./styles";
import { ThemeContext } from "styled-components";
import { inube } from "@inubekit/foundations";

interface IDatefield {
  label?: string;
  name?: string;
  id: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  status?: IDatefieldStatus;
  message?: string;
  size?: IDatefieldSize;
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
    try {
      onFocus && onFocus(e);
    } catch (error) {
      console.error(`Error executing focus callback. ${error}`);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    try {
      onBlur && onBlur(e);
    } catch (error) {
      console.error(`Error executing blur callback. ${error}`);
    }
  };

  const interceptOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange && onChange(e);
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
    }
  };

  const theme: typeof inube = useContext(ThemeContext);
  const requiredAppearance =
    (theme?.input?.required?.appearance as ITextAppearance) ||
    inube.input.required.appearance;
  const messageAppearance =
    (theme?.input?.message?.appearance as ITextAppearance) ||
    inube.input.message.appearance;

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
            appearance={requiredAppearance}
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
          type="date"
          value={value}
          $required={required}
          $size={size}
          $status={status}
          $fullwidth={fullwidth}
          $focused={focused}
          onChange={interceptOnChange}
          onFocus={interceptFocus}
          onBlur={interceptBlur}
        />
      </StyledInputContainer>

      {status === "invalid" && !disabled && message && (
        <StyledMessageContainer>
          <Icon appearance={messageAppearance} icon={<MdOutlineWarning />} />
          <Text
            type="body"
            size="small"
            textAlign="start"
            margin="8px 0px 0px 4px"
            appearance={messageAppearance}
          >
            {message}
          </Text>
        </StyledMessageContainer>
      )}
    </StyledContainer>
  );
};

export { Datefield };
export type { IDatefield };
