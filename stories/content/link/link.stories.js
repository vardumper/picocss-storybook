export default {
  title: "Content/Link",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    title: "text",
    current: { control: "text" },
    role: { control: "text" },
  },
};

const defaultArgs = {
  text: "Link Text",
  href: "#",
  title: "Link Title",
};

export const Default = {
  args: {
    text: "Link Text",
    href: "#",
    title: "Link Title",
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
        ...defaultArgs,
        current: "page",
    },
};

export const SecondaryCurrent = {
  args: {
    ...defaultArgs,
    class: "secondary",
    current: "page",
  },
};

export const ContrastCurrent = {
  args: {
    ...defaultArgs,
    class: "contrast",
    current: "page",
  },
};

export const ButtonPrimary = {
  args: {
    ...defaultArgs,
    role: "button",
  },
};


export const ButtonSecondary = {
  args: {
    ...defaultArgs,
    class: "secondary",
    role: "button",
  },
};


export const ButtonContrast = {
  args: {
    ...defaultArgs,
    class: "contrast",
    role: "button",
  },
};