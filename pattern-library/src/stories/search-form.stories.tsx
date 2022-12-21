import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchForm from '../components/organisms/search-form';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Search Form',
  component: SearchForm,
  parameters: {
    // layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchForm> = (args) => <SearchForm {...args} />;

function createActionHandler() {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    action("onSubmit")(event)
  }
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  onSubmit: createActionHandler(),
  // onHomeClick: createActionHandler("onHomeClick"),
  // onExploreClick: createActionHandler("onExploreClick"),
  // onNotificationsClick: createActionHandler("onNotificationsClick"),
  // onMessagesClick: createActionHandler("onMessagesClick"),
  // onBookmarksClick: createActionHandler("onBookmarksClick"),
  // onListsClick: createActionHandler("onListsClick"),
  // onProfileClick: createActionHandler("onProfileClick"),
  // onMoreClick: createActionHandler("onMoreClick"),
  // onTweetClick: createActionHandler("onTweetClick")
};
