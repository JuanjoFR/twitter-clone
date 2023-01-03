import Header from "./header"
import { action } from "@storybook/addon-actions"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Header>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

function createActionHandler<T>(
  key: "onProfileClick" | "onTitleClick" | "onSettingsClick"
) {
  return (event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault()
    action(key)(event)
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "My Header",
  onProfileClick: createActionHandler<HTMLDivElement>("onProfileClick"),
  onTitleClick: createActionHandler<HTMLDivElement>("onTitleClick"),
  onSettingsClick: createActionHandler<HTMLButtonElement>("onSettingsClick")
}
