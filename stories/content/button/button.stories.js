export default {
  title: "Content/Button",
  tags: ["autodocs"],
  parameters: {
    server: {
      id: "content/button",
    },
  },
  argTypes: {
    label: { control: "text" },
  },
};

const defaultArgs = {
  element: 'a',
  label: "Button",
  href: "#",
};

export const Default = {
  args: {
    label: "Button",
    href: "#",
    disabled: false,
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

export const PrimaryDisabled = {
  args: {
    label: "Button",
    href: "#",
    disabled: true,
  },
};

export const SecondaryDisabled = {
  args: {
    ...defaultArgs,
    class: "secondary",
    disabled: true,
  },
};

export const ContrastDisabled = {
  args: {
    ...defaultArgs,
    class: "contrast",
    disabled: true,
  },
};

export const PrimaryOutline = {
  args: {
    label: "Button",
    href: "#",
    class: 'outline',
    disabled: true,
  },
};

export const SecondaryOutline = {
  args: {
    ...defaultArgs,
    class: "outline secondary",
    disabled: true,
  },
};

export const ContrastOutline = {
  args: {
    ...defaultArgs,
    class: "outline contrast",
    disabled: true,
  },
};

