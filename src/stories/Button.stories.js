import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes:{
    handleClick: {action:"handleClick"}
  }
};

const Template = (args) => <Button {...args} />;

export const Error = Template.bind({});
Error.args = {
  backgroundColor: "#F12B2C",
  label: "Press me",
  size: "sm",
  color: "white",
  borderRadius:"8px"
};
export const Succes = Template.bind({});
Succes.args = {
  backgroundColor: "#29CC97",
  label: "Press me",
  size: "sm",
  color: "white",
  borderRadius:"8px"
};
export const ErrorLarge = Template.bind({});
ErrorLarge.args = {
  backgroundColor: "#F12B2C",
  label: "Press me",
  size: "lg",
  color: "white",
  borderRadius:"8px"
};
export const SuccesLarge = Template.bind({});
SuccesLarge.args = {
  backgroundColor: "#29CC97",
  label: "Press me",
  size: "lg",
  color: "white",
  borderRadius:"8px"
};
