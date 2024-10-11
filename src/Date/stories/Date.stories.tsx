import { props, parameters } from "../props";
import { Date, IDate } from "..";
import { DateController } from "./DateController";

const story = {
  title: "inputs/Date",
  components: [Date],
  parameters,
  argTypes: props,
};

const Default = (args: IDate) => <DateController {...args} />;
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
