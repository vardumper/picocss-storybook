export default {
  title: "Forms/Reset",
  tags: ["autodocs"],
  parameters: {
    server: {
      id: "forms/reset",
    },
  },
  argTypes: {
    label: { control: "text" },
  },
};

export const Default = {
  args: {
    type: "reset",
    value: "Reset",
  },
};
