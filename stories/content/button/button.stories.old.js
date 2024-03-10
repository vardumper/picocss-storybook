import "./button.scss";
export default {
  title: "Content/Button",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  render: ({ nodeValue, class,type,disabled,autofocus }) => {
    const isBool = val => typeof val === 'boolean';
    const attrMap = {'className': 'class'};
    let getAttr = (val) => attrMap[val] || val;
    const el = document.createElement('button');
    if (nodeValue) { el.innerHTML = nodeValue; }
    if (!isBool(class) && class) { el.setAttribute(getAttr('class'), class); } else { if (class) { el.class = 'class'; } }
    if (!isBool(type) && type) { el.setAttribute(getAttr('type'), type); } else { if (type) { el.type = 'type'; } }
    if (!isBool(disabled) && disabled) { el.setAttribute(getAttr('disabled'), disabled); } else { if (disabled) { el.disabled = 'disabled'; } }
    if (!isBool(autofocus) && autofocus) { el.setAttribute(getAttr('autofocus'), autofocus); } else { if (autofocus) { el.autofocus = 'autofocus'; } }
    
    return el;
  },
  argTypes: {
    class: {
        control: 'select',
        options: {"primary":"","secondary":"secondary","contrast":"contrast"},
        description: '**Optional** class',
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
    autofocus: {
        control: 'boolean',
        description: '**Mandatory** autofocus',
    },

  },
};
export const Default = {
  args: {
    nodeValue: 'Button Text',
    disabled: '',
    autofocus: '',
}
};
export const PrimaryButtonPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'button',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const PrimaryButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'button',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const PrimaryButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'button',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const PrimaryButtonDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'button',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
export const PrimarySubmitPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'submit',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const PrimarySubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'submit',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const PrimarySubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'submit',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const PrimarySubmitDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'submit',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
export const PrimaryResetPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'reset',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const PrimaryResetPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'reset',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const PrimaryResetPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'reset',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const PrimaryResetDefault = {
  args: {
    nodeValue: 'Button Text',
    class: '',
    type: 'reset',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
export const SecondaryButtonPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'button',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const SecondaryButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'button',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const SecondaryButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'button',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const SecondaryButtonDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'button',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
export const SecondarySubmitPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'submit',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const SecondarySubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'submit',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const SecondarySubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'submit',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const SecondarySubmitDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'submit',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
export const SecondaryResetPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'reset',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const SecondaryResetPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'reset',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const SecondaryResetPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'reset',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const SecondaryResetDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'secondary',
    type: 'reset',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
export const ContrastButtonPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'button',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const ContrastButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'button',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const ContrastButtonPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'button',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const ContrastButtonDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'button',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
export const ContrastSubmitPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'submit',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const ContrastSubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'submit',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const ContrastSubmitPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'submit',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const ContrastSubmitDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'submit',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
export const ContrastResetPrimaryPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'reset',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: false,
  },
};
export const ContrastResetPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'reset',
    disabled: '',
    disabled: false,
    autofocus: '',
    autofocus: true,
  },
};
export const ContrastResetPrimaryDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'reset',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: false,
  },
};
export const ContrastResetDefault = {
  args: {
    nodeValue: 'Button Text',
    class: 'contrast',
    type: 'reset',
    disabled: '',
    disabled: true,
    autofocus: '',
    autofocus: true,
  },
};
