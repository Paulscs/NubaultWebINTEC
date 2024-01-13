import React from "react";

import { SelectBox } from "components";

export default {
  title: "paul_s_application2/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "round",
  variant: "fill",
  color: "white_A700",
  size: "xs",
  className: "w-[300px]",
};
