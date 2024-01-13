import React from "react";

import { Input } from "components";

export default {
  title: "paul_s_application2/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder15",
  size: "xs",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
