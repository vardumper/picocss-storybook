import "./%s.scss";
export default {
  title: "%s",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  render: ({ nodeValue, %s }) => {
    const isBool = val => 'boolean' === typeof val;
    const attrMap = {'className': 'class'};
    getAttr = (val) => attrMap.val || val;
    const el = document.createElement('%s');
    el.innerHTML = nodeValue;
    %s
    return el;
  },
  argTypes: {
%s
  },
};
%s