import ListWrapper from "../components/ListWrapper";

export default {
  title: "Components/List",
  component: ListWrapper,

};

const Template = (args) => {
    return <ListWrapper {...args} />;
  };

  export const List = Template.bind({});