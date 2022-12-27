// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tweet from '../components/molecules/tweet';
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
    id: "f75f0f03-4066-4a04-a42f-a25fbc48616f",
    user: {
      id: "f75f0f03-4066-4a04-a42f-a25fbc48616f",
      fullName: "Miranda O'Conner",
      nickName: "@Marshall87",
      image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg"
    },
    body: (
      <React.Fragment>
        <p>Ullam modi nobis repellendus laborum aliquam corporis.</p>
        <p>Eveniet nisi excepturi voluptatem.</p>
        <p>Accusantium inventore facilis nobis totam rerum unde consequuntur vero magnam.</p>
        <p>Ducimus cupiditate cum delectus odio commodi aliquam.</p>
      </React.Fragment>
    ),
    meta: {
      time: "3h",
      answers: "12",
      retweets: "241",
      likes: "675"
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
