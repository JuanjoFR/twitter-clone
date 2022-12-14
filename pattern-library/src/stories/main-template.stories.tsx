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

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  // sidebar: <div className="hidden sm:flex flex-col w-16 xl:w-56 min-h-screen bg-gray-500 sm:border-r border-[#EFF3F4] xl:pr-8" />,
  sidebar: <Sidebar />,
  content: (
    <React.Fragment>
      <div className="mx-5 mt-3 mb-5">
        <Header title="Home" onProfileClick={createActionHandler("onProfileClick")} onTitleClick={createActionHandler("onTitleClick")} onSettingsClick={createActionHandler("onSettingsClick")} />
      </div>
      <div className="mx-5">
        <TweetForm />
      </div>
      <Separator />
      <Timeline />
    </React.Fragment>
  )
};
