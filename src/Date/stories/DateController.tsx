import { useState } from "react";

import { Date, IDate } from "..";

const DateController = (props: IDate) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  function isValidDate(value: string) {
    return /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(value);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, status: "pending" });
  };

  const onFocus = () => {
    if (form.status === "invalid") {
      setForm({ ...form, status: "invalid" });
    } else {
      setForm({ ...form, status: "pending" });
    }
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = isValidDate(e.target.value);
    console.log("isValid: ", isValid, e.target.value, typeof e.target.value);
    setForm({ ...form, status: isValid ? "pending" : "invalid" });
  };

  const message = "the date is not valid.";

  return (
    <Date
      {...props}
      value={form.value}
      onChange={onChange}
      status={form.status}
      onFocus={onFocus}
      onBlur={onBlur}
      message={message}
    />
  );
};

export { DateController };
