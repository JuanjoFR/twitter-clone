import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Sidebar from "../components/organisms/sidebar"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen"
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Sidebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

function createActionHandler(
  key:
    | "onLogoClick"
    | "onHomeClick"
    | "onExploreClick"
    | "onNotificationsClick"
    | "onMessagesClick"
    | "onBookmarksClick"
    | "onListsClick"
    | "onProfileClick"
    | "onMoreClick"
    | "onTweetClick"
) {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    action(key)(event)
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  onLogoClick: createActionHandler("onLogoClick"),
  onHomeClick: createActionHandler("onHomeClick"),
  onExploreClick: createActionHandler("onExploreClick"),
  onNotificationsClick: createActionHandler("onNotificationsClick"),
  onMessagesClick: createActionHandler("onMessagesClick"),
  onBookmarksClick: createActionHandler("onBookmarksClick"),
  onListsClick: createActionHandler("onListsClick"),
  onProfileClick: createActionHandler("onProfileClick"),
  onMoreClick: createActionHandler("onMoreClick"),
  onTweetClick: createActionHandler("onTweetClick")
}

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
