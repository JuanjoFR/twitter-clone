// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TweetForm from '../components/organisms/tweet-form';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tweet Form',
  component: TweetForm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TweetForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TweetForm> = (args) => <TweetForm {...args} />;

function createActionHandler<T>(key: "onProfileClick" | "onAttachImageClick" | "onAttachGifClick" | "onCreatePollClick" | "onAttachEmojiClick" | "onScheduleClick" | "onAttachLocationClick" | "onTweetClick") {
  return (event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault();
    action(key)(event)
  }
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  onProfileClick: createActionHandler<HTMLAnchorElement>("onProfileClick"),
  onAttachImageClick: createActionHandler<HTMLAnchorElement>("onAttachImageClick"),
  onAttachGifClick: createActionHandler<HTMLAnchorElement>("onAttachGifClick"),
  onCreatePollClick: createActionHandler<HTMLAnchorElement>("onCreatePollClick"),
  onAttachEmojiClick: createActionHandler<HTMLAnchorElement>("onAttachEmojiClick"),
  onScheduleClick: createActionHandler<HTMLAnchorElement>("onScheduleClick"),
  onAttachLocationClick: createActionHandler<HTMLAnchorElement>("onAttachLocationClick"),
  onTweetClick: createActionHandler<HTMLButtonElement>("onTweetClick")
};

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
