import { ComponentStory, ComponentMeta } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Tweet from "../components/molecules/tweet/tweet"
import React from "react"

export default {
  title: "Components/Tweet",
  component: Tweet
} as ComponentMeta<typeof Tweet>

const Template: ComponentStory<typeof Tweet> = (args) => <Tweet {...args} />

function createActionHandler<T>(
  key:
    | "onUserClick"
    | "onDateClick"
    | "onTweetClick"
    | "onMoreClick"
    | "onAnswersClick"
    | "onRetweetsClick"
    | "onLikesClick"
    | "onShareClick"
) {
  return (event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault()
    action(key)(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  user: {
    id: "f75f0f03-4066-4a04-a42f-a25fbc48616f",
    fullName: "Miranda O'Conner",
    nickName: "@Marshall87",
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg",
    url: "#"
  },
  body: (
    <React.Fragment>
      <p>Ullam modi nobis repellendus laborum aliquam corporis.</p>
      <p>Eveniet nisi excepturi voluptatem.</p>
      <p>
        Accusantium inventore facilis nobis totam rerum unde consequuntur vero
        magnam.
      </p>
      <p>Ducimus cupiditate cum delectus odio commodi aliquam.</p>
    </React.Fragment>
  ),
  meta: {
    time: "3h",
    answers: "12",
    retweets: "241",
    likes: "675"
  },
  url: "#",
  onUserClick: createActionHandler<HTMLAnchorElement>("onUserClick"),
  onDateClick: createActionHandler<HTMLAnchorElement>("onDateClick"),
  onTweetClick: createActionHandler<HTMLDivElement>("onTweetClick"),
  onMoreClick: createActionHandler<HTMLButtonElement>("onMoreClick"),
  onAnswersClick: createActionHandler<HTMLButtonElement>("onAnswersClick"),
  onRetweetsClick: createActionHandler<HTMLButtonElement>("onRetweetsClick"),
  onLikesClick: createActionHandler<HTMLButtonElement>("onLikesClick"),
  onShareClick: createActionHandler<HTMLButtonElement>("onShareClick")
}
