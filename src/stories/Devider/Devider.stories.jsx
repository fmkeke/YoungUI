import Devider from "./Devider";

export default {
  title: "Example/Devider",
  component: Devider,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Devider {...args} />;

export const dashed = Template.bind({});

dashed.args = {
    dashed:true
};
