import UsersRecommendations from "./users-recommendations"
import { action } from "@storybook/addon-actions"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Components/Users Recommendations",
  component: UsersRecommendations
} as ComponentMeta<typeof UsersRecommendations>

const Template: ComponentStory<typeof UsersRecommendations> = (args) => (
  <UsersRecommendations {...args} />
)

function createUserActionHandler() {
  return (id: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    action(`onUserClick/${id}`)(event)
  }
}

function createFollowActionHandler() {
  return (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    event.stopPropagation()
    action(`onFollowClick/${id}`)(event)
  }
}

function createMoreActionHandler() {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    action("onMoreClick")(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  data: [
    {
      id: "57f341b7-a7b8-4dcf-bae2-73eb30daecc1",
      fullName: "Colin Leannon",
      nickName: "@Van_Kris",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/167.jpg",
      url: "#"
    },
    {
      id: "17b124fd-c07a-4af6-8412-8194fe011264",
      fullName: "Beth Klocko",
      nickName: "@Sadye.Gorczany",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg",
      url: "#"
    },
    {
      id: "bcb770a9-08b2-4260-915b-001e4c5d43ae",
      fullName: "Marvin Koepp V",
      nickName: "@Hans85",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1060.jpg",
      url: "#"
    }
  ],
  onUserClick: createUserActionHandler(),
  onFollowClick: createFollowActionHandler(),
  onShowMoreClick: createMoreActionHandler()
}
