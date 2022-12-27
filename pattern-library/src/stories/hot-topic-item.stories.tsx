import { ComponentStory, ComponentMeta } from "@storybook/react"
import HotTopicItem from "../components/molecules/hot-topic-item"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Hot Topic Item",
  component: HotTopicItem
} as ComponentMeta<typeof HotTopicItem>

const Template: ComponentStory<typeof HotTopicItem> = (args) => (
  <HotTopicItem {...args} />
)

function createTopicActionHandler() {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    action("onTopicClick")(event)
  }
}

function createMoreActionHandler() {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()
    action("onMoreClick")(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  data: {
    id: "33c2a660-1755-4a07-b6e9-202b0b5e545a",
    country: "Spain",
    body: "Pink customized despite",
    tweets: "530K"
  },
  onTopicClick: createTopicActionHandler(),
  onMoreClick: createMoreActionHandler()
}
