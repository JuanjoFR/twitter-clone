import { ComponentStory, ComponentMeta } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import TweetForm from "../components/organisms/tweet-form"

export default {
  title: "Components/Tweet Form",
  component: TweetForm
} as ComponentMeta<typeof TweetForm>

const Template: ComponentStory<typeof TweetForm> = (args) => (
  <TweetForm {...args} />
)

function createActionHandler<T>(
  key:
    | "onProfileClick"
    | "onAttachImageClick"
    | "onAttachGifClick"
    | "onCreatePollClick"
    | "onAttachEmojiClick"
    | "onScheduleClick"
    | "onAttachLocationClick"
    | "onTweetClick"
) {
  return (event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault()
    action(key)(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  userUrl: "#",
  onProfileClick: createActionHandler<HTMLAnchorElement>("onProfileClick"),
  onAttachImageClick:
    createActionHandler<HTMLButtonElement>("onAttachImageClick"),
  onAttachGifClick: createActionHandler<HTMLButtonElement>("onAttachGifClick"),
  onCreatePollClick:
    createActionHandler<HTMLButtonElement>("onCreatePollClick"),
  onAttachEmojiClick:
    createActionHandler<HTMLButtonElement>("onAttachEmojiClick"),
  onScheduleClick: createActionHandler<HTMLButtonElement>("onScheduleClick"),
  onAttachLocationClick: createActionHandler<HTMLButtonElement>(
    "onAttachLocationClick"
  ),
  onTweetClick: createActionHandler<HTMLButtonElement>("onTweetClick")
}
