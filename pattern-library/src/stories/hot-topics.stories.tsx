import { ComponentStory, ComponentMeta } from "@storybook/react"
import HotTopics from "../components/organisms/hot-topics/hot-topics"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Hot Topics",
  component: HotTopics
} as ComponentMeta<typeof HotTopics>

const Template: ComponentStory<typeof HotTopics> = (args) => (
  <HotTopics {...args} />
)

function createTopicActionHandler() {
  return (id: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    action(`onTopicClick/${id}`)(event)
  }
}

function createTopicMoreActionHandler() {
  return (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    event.stopPropagation()
    action(`onTopicMoreClick/${id}`)(event)
  }
}

function createMoreActionHandler() {
  return (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    action("onMoreClick")(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  data: [
    {
      id: "33c2a660-1755-4a07-b6e9-202b0b5e545a",
      country: "Spain",
      body: "Pink customized despite",
      tweets: "530K"
    },
    {
      id: "640c9d34-091c-41f9-b030-05491bf351e8",
      country: "Spain",
      body: "Southwest Jeep",
      tweets: "814K"
    },
    {
      id: "53fd0096-42d2-4040-8db3-3222bcba3613",
      country: "Spain",
      body: "British Indian Ocean Territory"
    },
    {
      id: "8ad5f620-fffb-4b0c-9241-1eb58fdf7bdd",
      country: "Spain",
      body: "Wherever greedy",
      tweets: "2.342"
    },
    {
      id: "f9afccd0-3e26-465b-b703-ceaf36f3366b",
      country: "Spain",
      body: "Ethiopian orchid",
      tweets: "6.300"
    }
  ],
  onTopicClick: createTopicActionHandler(),
  onTopicMoreClick: createTopicMoreActionHandler(),
  onShowMoreClick: createMoreActionHandler()
}
