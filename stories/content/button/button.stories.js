export default {
  title: "Content/Button",
  parameters: {
    server: {
      id: "content/button",
    },
  },
  argTypes: {
    label: { control: "text" },
  },
};
export const Default = {
  args: {
    label: "Button",
    href: "#",
  },
};
