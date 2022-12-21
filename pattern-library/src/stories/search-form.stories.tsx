import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchForm from '../components/organisms/search-form';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Search Form',
  component: SearchForm
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args) => <SearchForm {...args} />;

function createActionHandler() {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    action("onSubmit")(event)
  }
}

export const Default = Template.bind({});
Default.args = {
  onSubmit: createActionHandler()
};
