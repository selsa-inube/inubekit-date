const sizes = ["wide", "compact"] as const;
type IDateSize = (typeof sizes)[number];

const status = ["invalid", "pending"] as const;
type IDateStatus = (typeof status)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A text field is an input that allows a user to write or edit text",
    },
  },
};

const props = {
  label: {
    description: "prompts the user what value to enter",
  },
  name: {
    description: "name of the input element",
  },
  id: {
    description:
      "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  disabled: {
    description:
      "sets the field as to appear disabled, users will not be able to interact with the text field",
    table: {
      defaultValue: { summary: false },
    },
  },
  value: {
    control: { type: "date" },
    description: "component initial value",
  },
  onChange: {
    description:
      "allows you to control what to do when the user changes the value of the component",
  },
  required: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: false },
    },
  },
  status: {
    options: status,
    control: { type: "select" },
    description: "status of the component",
    table: {
      defaultValue: { summary: "pending" },
    },
  },
  message: {
    description:
      "display a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "defines the size of the component",
  },
  fullwidth: {
    description: "option to fit field width to its parent width",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { parameters, props, sizes, status };
export type { IDateSize, IDateStatus };
