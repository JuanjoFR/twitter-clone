import { ComponentStory, ComponentMeta } from "@storybook/react"
import Footer from "../components/organisms/footer"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Footer",
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

function createActionHandler(
  key:
    | "onTosClick"
    | "onPrivacyClick"
    | "onCookieClick"
    | "onAccesibilityClick"
    | "onAdsClick"
    | "onMoreClick"
) {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    action(key)(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  onTosClick: createActionHandler("onTosClick"),
  onPrivacyClick: createActionHandler("onPrivacyClick"),
  onCookieClick: createActionHandler("onCookieClick"),
  onAccesibilityClick: createActionHandler("onAccesibilityClick"),
  onAdsClick: createActionHandler("onAdsClick"),
  onMoreClick: createActionHandler("onMoreClick")
}
