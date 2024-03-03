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

export const PrimarySubmit = {
  args: {
    ...defaultArgs,
    type: "submit",
  },
};

export const SecondarySubmit = {
  args: {
    ...defaultArgs,
    type: "submit",
    class: "secondary",
  },
};
export const ContrastSubmit = {
  args: {
    ...defaultArgs,
    type: "submit",
    class: "contrast",
  },
};

export const DefaultReset = {
  args: {
    ...defaultArgs,
    type: "reset",
  },
};

export const PrimaryReset = {
  args: {
    ...defaultArgs,
    type: "reset",
    class: "primary",
  },
};


export const SecondaryReset = {
  args: {
    ...defaultArgs,
    type: "reset",
    class: "secondary",
  },
};

export const ContrastReset = {
  args: {
    ...defaultArgs,
    type: "reset",
    class: "contrast",
  },
};

