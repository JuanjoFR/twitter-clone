import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./button"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Button",
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

function createActionHandler() {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    action("onClick")(event)
  }
}

export const Primary = Template.bind({})
Primary.args = {
  disabled: false,
  color: "primary",
  size: "md",
  label: "My Button",
  onClick: createActionHandler()
}

export const Secondary = Template.bind({})
Secondary.args = {
  disabled: false,
  color: "secondary",
  size: "md",
  label: "My Button",
  onClick: createActionHandler()
}
