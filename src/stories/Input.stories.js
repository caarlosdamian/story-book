import { Input } from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    handleClick: { action: "handleChange" },
  },
};
const Template = (args) => <Input {...args} />;
export const Text = Template.bind({});
Text.args = {
  backgroundColor: "#F12B2C",
  label: "Search...",
  padding:"10px",
  borderRadius:"8px",
  border:"1px solid gray",
  outline:"none"
};
export const Datetime = Template.bind({});
Datetime.args = {
  backgroundColor: "#F12B2C",
  label: "Search...",
  type:"date",
};
export const Password = Template.bind({});
Password.args = {
  backgroundColor: "#F12B2C",
  label: "**********",
  type:"password",
  padding:"10px",
  borderRadius:"8px",
  border:"1px solid gray",
  outline:"none"
};