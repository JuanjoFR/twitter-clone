import { ComponentStory, ComponentMeta } from '@storybook/react';

import Separator from '../components/atoms/separator';

export default {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Separator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Separator> = (args) => <Separator {...args} />;

// function createActionHandler(key: "onLogoClick" | "onHomeClick" | "onExploreClick" | "onNotificationsClick" | "onMessagesClick" | "onBookmarksClick" | "onListsClick" | "onProfileClick" | "onMoreClick" | "onTweetClick") {
//   return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     event.preventDefault();
//     action(key)(event)
//   }
// }

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  // onLogoClick: createActionHandler("onLogoClick"),
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
