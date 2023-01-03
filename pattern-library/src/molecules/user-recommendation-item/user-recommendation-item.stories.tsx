import UserRecommendationItem from "./user-recommendation-item"
import { action } from "@storybook/addon-actions"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Components/User Recomendation Item",
  component: UserRecommendationItem
} as ComponentMeta<typeof UserRecommendationItem>

const Template: ComponentStory<typeof UserRecommendationItem> = (args) => (
  <UserRecommendationItem {...args} />
)

function createUserActionHandler() {
  return (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    action("onUserClick")(event)
  }
}

function createFollowActionHandler() {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()
    action("onFollowClick")(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  fullName: "Colin Leannon",
  nickName: "@Van_Kris",
  image:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/167.jpg",
  onUserClick: createUserActionHandler(),
  onFollowClick: createFollowActionHandler()
}
