// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tweet from '../components/organisms/tweet';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tweet',
  component: Tweet,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Tweet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tweet> = (args) => <Tweet {...args} />;

function createActionHandler<T>(key: "onUserClick" | "onTweetClick" | "onMoreClick" | "onAnswersClick" | "onRetweetsClick" | "onLikesClick" | "onShareClick") {
  return (event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault();
    action(key)(event)
  }
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  data: {
    id: "1",
    user: {
      fullName: "Full Name",
      nickName: "@nickName",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel"
    },
    body: (
      <React.Fragment>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Suspendisse placerat, turpis eget interdum venenatis, odio libero rhoncus augue, eu auctor metus risus nec eros.</p>
      </React.Fragment>
    ),
    meta: {
      time: "10h",
      answers: "10",
      retweets: "240",
      likes: "1.324",
    }
  },
  onUserClick: createActionHandler<HTMLAnchorElement>("onUserClick"),
  onTweetClick: createActionHandler<HTMLAnchorElement>("onTweetClick"),
  onMoreClick: createActionHandler<HTMLAnchorElement>("onMoreClick"),
  onAnswersClick: createActionHandler<HTMLAnchorElement>("onAnswersClick"),
  onRetweetsClick: createActionHandler<HTMLAnchorElement>("onRetweetsClick"),
  onLikesClick: createActionHandler<HTMLAnchorElement>("onLikesClick"),
  onShareClick: createActionHandler<HTMLAnchorElement>("onShareClick")
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
