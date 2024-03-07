import "./link.scss";
export default {
  title: "Content/Link",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  render: ({ nodeValue, className,role,href,title,disabled }) => {
    const isBool = val => 'boolean' === typeof val;
    const attrMap = {'className': 'class'};
    let getAttr = (val) => attrMap[val] || val;
    const el = document.createElement('a');
    el.innerHTML = nodeValue;
    if (!isBool(className)) { el.setAttribute(getAttr('className'), className); } else { if (className === true) { el.setAttribute(getAttr('className'),'className'); } }
    if (!isBool(role)) { el.setAttribute(getAttr('role'), role); } else { if (role === true) { el.setAttribute(getAttr('role'),'role'); } }
    if (!isBool(href)) { el.setAttribute(getAttr('href'), href); } else { if (href === true) { el.setAttribute(getAttr('href'),'href'); } }
    if (!isBool(title)) { el.setAttribute(getAttr('title'), title); } else { if (title === true) { el.setAttribute(getAttr('title'),'title'); } }
    if (!isBool(disabled)) { el.setAttribute(getAttr('disabled'), disabled); } else { if (disabled === true) { el.setAttribute(getAttr('disabled'),'disabled'); } }
    
    return el;
  },
  argTypes: {
    className: {
        control: 'select',
        options: {"primary":"","secondary":"secondary","contrast":"contrast"},
        description: '**Optional** className',
    },
    role: {
        control: 'select',
        options: {"default":"","button":"button"},
        description: '**Optional** role',
    },
    href: {
        control: 'text',
        description: '**Mandatory** href',
    },
    title: {
        control: 'text',
        description: '**Optional** title',
    },
    disabled: {
        control: 'boolean',
        description: '**Mandatory** disabled',
    },

  },
};
export const Default = {
  args: {
    nodeValue: 'Link Text',
    href: '#',
    disabled: '',
}
};
export const PrimaryPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: '',
    role: '',
    disabled: false,
  },
};
export const PrimaryPrimaryPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    role: '',
    disabled: false,
  },
};
export const PrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: '',
    role: '',
    disabled: true,
  },
};
export const PrimaryPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    role: '',
    disabled: true,
  },
};
export const PrimaryButtonPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: '',
    role: '',
    disabled: false,
  },
};
export const PrimaryButtonPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    role: '',
    disabled: false,
  },
};
export const PrimaryButtonDefault = {
  args: {
    nodeValue: 'Link Text',
    className: '',
    role: '',
    disabled: true,
  },
};
export const PrimaryButtonLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: '',
    role: '',
    disabled: true,
  },
};
export const SecondaryPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: 'secondary',
    role: '',
    disabled: false,
  },
};
export const SecondaryPrimaryPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    role: '',
    disabled: false,
  },
};
export const SecondaryPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: 'secondary',
    role: '',
    disabled: true,
  },
};
export const SecondaryPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    role: '',
    disabled: true,
  },
};
export const SecondaryButtonPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: 'secondary',
    role: '',
    disabled: false,
  },
};
export const SecondaryButtonPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    role: '',
    disabled: false,
  },
};
export const SecondaryButtonDefault = {
  args: {
    nodeValue: 'Link Text',
    className: 'secondary',
    role: '',
    disabled: true,
  },
};
export const SecondaryButtonLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'secondary',
    role: '',
    disabled: true,
  },
};
export const ContrastPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: 'contrast',
    role: '',
    disabled: false,
  },
};
export const ContrastPrimaryPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    role: '',
    disabled: false,
  },
};
export const ContrastPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: 'contrast',
    role: '',
    disabled: true,
  },
};
export const ContrastPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    role: '',
    disabled: true,
  },
};
export const ContrastButtonPrimaryDefault = {
  args: {
    nodeValue: 'Link Text',
    className: 'contrast',
    role: '',
    disabled: false,
  },
};
export const ContrastButtonPrimaryLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    role: '',
    disabled: false,
  },
};
export const ContrastButtonDefault = {
  args: {
    nodeValue: 'Link Text',
    className: 'contrast',
    role: '',
    disabled: true,
  },
};
export const ContrastButtonLong = {
  args: {
    nodeValue: 'Link with utf8 🐶, <abbr title="Hypertext Markup Language">html</abbr> and very <strong>long text</strong> and words <i>Antidisestablishmentarianism</i>',
    className: 'contrast',
    role: '',
    disabled: true,
  },
};
