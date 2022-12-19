import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MainTemplate from '../components/templates/main';
import Sidebar from '../components/organisms/sidebar';
import React from 'react';
import Header from '../components/organisms/header';
import TweetForm from '../components/organisms/tweet-form';
import Separator from '../components/atoms/separator';
import Timeline from '../components/organisms/timeline';

export default {
  title: 'Components/Main Template',
  component: MainTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MainTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainTemplate> = (args) => <MainTemplate {...args} />;

function createActionHandler(key: "onProfileClick" | "onTitleClick" | "onSettingsClick") {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    action(key)(event)
  }
}

function createTimelineActionHandler(key: "onUserClick" | "onTweetClick" | "onMoreClick" | "onAnswersClick" | "onRetweetsClick" | "onLikesClick" | "onShareClick") {
  return (id: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    action(`${key}/${id}`)(event)
  }
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  sidebar: <Sidebar />,
  content: (
    <React.Fragment>
      <div className="mx-5 mt-3 mb-5">
        <Header title="Home" onProfileClick={createActionHandler("onProfileClick")} onTitleClick={createActionHandler("onTitleClick")} onSettingsClick={createActionHandler("onSettingsClick")} />
      </div>
      <div className="mx-5">
        <TweetForm />
      </div>
      <Separator className='hidden sm:flex mt-3' />
      <Timeline
        data={
          [
            {
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
            {
              id: "2",
              user: {
                fullName: "Full Name 2",
                nickName: "@nickName-2",
                image: "https://xsgames.co/randomusers/avatar.php?g=pixel"
              },
              body: (
                <React.Fragment>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Suspendisse placerat, turpis eget interdum venenatis, odio libero rhoncus augue, eu auctor metus risus nec eros.</p>
                </React.Fragment>
              ),
              meta: {
                time: "12h",
                answers: "3",
                retweets: "34",
                likes: "245",
              }
            }
          ]
        }
        onUserClick={createTimelineActionHandler("onUserClick")}
        onTweetClick={createTimelineActionHandler("onTweetClick")}
        onMoreClick={createTimelineActionHandler("onMoreClick")}
        onAnswersClick={createTimelineActionHandler("onAnswersClick")}
        onRetweetsClick={createTimelineActionHandler("onRetweetsClick")}
        onLikesClick={createTimelineActionHandler("onLikesClick")}
        onShareClick={createTimelineActionHandler("onShareClick")}
      />
    </React.Fragment>
  )
};
