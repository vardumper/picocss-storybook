import "./button.scss";
export default {
  title: "Content/Button",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  render: ({ nodeValue, className, type, disabled }) => {
    const isBool = val => 'boolean' === typeof val;
    const attrMap = {'className': 'class'};
    let getAttr = (val) => attrMap.val || val;
    const el = document.createElement('button');
    el.innerHTML = nodeValue;
    if (!isBool(className)) { el.setAttribute(getAttr('className'), className); } else { if (className === true) { el.setAttribute(getAttr('className'),'className'); } }
    if (!isBool(type)) { el.setAttribute(getAttr('type'), type); } else { if (type === true) { el.setAttribute(getAttr('type'),'type'); } }
    if (!isBool(disabled)) { el.setAttribute(getAttr('disabled'), disabled); } else { if (disabled === true) { el.setAttribute(getAttr('disabled'),'disabled'); } }

    return el;
  },
  argTypes: {
    className: {
        control: 'select',
        options: {"primary":"","secondary":"secondary","contrast":"contrast"},
        description: '**Optional** className',
    },
    type: {
        control: 'select',
        options: {"button":"button","submit":"submit","reset":"reset"},
        description: '**Optional** type',
    },
    disabled: {
        control: 'boolean',
        description: '**Mandatory** disabled',
    },

  },
};
export const PrimaryButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: '',
    type: 'button',
    disabled: false,
  },
};
export const PrimaryButtonPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    type: 'button',
    disabled: false,
  },
};
export const PrimaryButtonDefault = {
  args: {
    nodeValue: 'Button',
    className: '',
    type: 'button',
    disabled: true,
  },
};
export const PrimaryButtonLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    type: 'button',
    disabled: true,
  },
};
export const PrimarySubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: '',
    type: 'submit',
    disabled: false,
  },
};
export const PrimarySubmitPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    type: 'submit',
    disabled: false,
  },
};
export const PrimarySubmitDefault = {
  args: {
    nodeValue: 'Button',
    className: '',
    type: 'submit',
    disabled: true,
  },
};
export const PrimarySubmitLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    type: 'submit',
    disabled: true,
  },
};
export const PrimaryResetPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: '',
    type: 'reset',
    disabled: false,
  },
};
export const PrimaryResetPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    type: 'reset',
    disabled: false,
  },
};
export const PrimaryResetDefault = {
  args: {
    nodeValue: 'Button',
    className: '',
    type: 'reset',
    disabled: true,
  },
};
export const PrimaryResetLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    type: 'reset',
    disabled: true,
  },
};
export const SecondaryButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: 'secondary',
    type: 'button',
    disabled: false,
  },
};
export const SecondaryButtonPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    type: 'button',
    disabled: false,
  },
};
export const SecondaryButtonDefault = {
  args: {
    nodeValue: 'Button',
    className: 'secondary',
    type: 'button',
    disabled: true,
  },
};
export const SecondaryButtonLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    type: 'button',
    disabled: true,
  },
};
export const SecondarySubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: 'secondary',
    type: 'submit',
    disabled: false,
  },
};
export const SecondarySubmitPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    type: 'submit',
    disabled: false,
  },
};
export const SecondarySubmitDefault = {
  args: {
    nodeValue: 'Button',
    className: 'secondary',
    type: 'submit',
    disabled: true,
  },
};
export const SecondarySubmitLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    type: 'submit',
    disabled: true,
  },
};
export const SecondaryResetPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: 'secondary',
    type: 'reset',
    disabled: false,
  },
};
export const SecondaryResetPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    type: 'reset',
    disabled: false,
  },
};
export const SecondaryResetDefault = {
  args: {
    nodeValue: 'Button',
    className: 'secondary',
    type: 'reset',
    disabled: true,
  },
};
export const SecondaryResetLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    type: 'reset',
    disabled: true,
  },
};
export const ContrastButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: 'contrast',
    type: 'button',
    disabled: false,
  },
};
export const ContrastButtonPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    type: 'button',
    disabled: false,
  },
};
export const ContrastButtonDefault = {
  args: {
    nodeValue: 'Button',
    className: 'contrast',
    type: 'button',
    disabled: true,
  },
};
export const ContrastButtonLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    type: 'button',
    disabled: true,
  },
};
export const ContrastSubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: 'contrast',
    type: 'submit',
    disabled: false,
  },
};
export const ContrastSubmitPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    type: 'submit',
    disabled: false,
  },
};
export const ContrastSubmitDefault = {
  args: {
    nodeValue: 'Button',
    className: 'contrast',
    type: 'submit',
    disabled: true,
  },
};
export const ContrastSubmitLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    type: 'submit',
    disabled: true,
  },
};
export const ContrastResetPrimaryDefault = {
  args: {
    nodeValue: 'Button',
    className: 'contrast',
    type: 'reset',
    disabled: false,
  },
};
export const ContrastResetPrimaryLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    type: 'reset',
    disabled: false,
  },
};
export const ContrastResetDefault = {
  args: {
    nodeValue: 'Button',
    className: 'contrast',
    type: 'reset',
    disabled: true,
  },
};
export const ContrastResetLong = {
  args: {
    nodeValue: 'Button with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    type: 'reset',
    disabled: true,
  },
};
