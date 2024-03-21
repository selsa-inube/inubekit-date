import { props, parameters } from "../props";
import { Datefield, IDatefield } from "..";
import { DatefieldController } from "./DatefieldController";

const story = {
  title: "inputs/Datefield",
  components: [Datefield],
  parameters,
  argTypes: props,
};

const Default = (args: IDatefield) => <DatefieldController {...args} />;
Default.args = {
  label: "Date",
  name: "Date",
  id: "Date",
  value: "",
  size: "wide",
  disabled: false,
  required: false,
  message: "",
  fullwidth: false,
};

export { Default };
export default story;
