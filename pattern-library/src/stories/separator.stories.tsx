import { ComponentStory, ComponentMeta } from "@storybook/react"

import Separator from "../components/atoms/separator"

export default {
  title: "Components/Separator",
  component: Separator
} as ComponentMeta<typeof Separator>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Separator> = (args) => (
  <Separator {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
