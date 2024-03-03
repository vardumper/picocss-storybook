export default {
  title: "Content/Link",
  tags: ["autodocs"],
  parameters: {
    server: {
      id: "content/link",
    },
  },
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    title: "text",
    current: { control: "text" },
  },
};

const defaultArgs = {
  text: "Link Text",
  href: "#",
};

export const Default = {
  args: {
    text: "Link Text",
    href: "#",
  },
};

export const Secondary = {
    args: {
        ...defaultArgs,
        class: "secondary",
    },
};

export const Contrast = {
    args: {
        ...defaultArgs,
        class: "contrast",
    },
};

export const PrimaryCurrent = {
    args: {
        text: "Link Text",
        href: "#",
        current: true,
    },
};