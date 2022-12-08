import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MainTemplate from '../components/templates/main';

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
  title: "Home",
  onProfileClick: createActionHandler("onProfileClick"),
  onTitleClick: createActionHandler("onTitleClick"),
  onSettingsClick: createActionHandler("onSettingsClick")
};
