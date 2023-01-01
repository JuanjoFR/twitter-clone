import { ComponentStory, ComponentMeta } from "@storybook/react"
import Footer from "./footer"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Footer",
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

function createActionHandler<T>(
  key:
    | "onTosClick"
    | "onPrivacyClick"
    | "onCookieClick"
    | "onAccesibilityClick"
    | "onAdsClick"
    | "onMoreClick"
) {
  return (event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault()
    action(key)(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  tosUrl: "#",
  privacyUrl: "#",
  cookieUrl: "#",
  accesibilityUrl: "#",
  adsUrl: "#",
  onTosClick: createActionHandler<HTMLAnchorElement>("onTosClick"),
  onPrivacyClick: createActionHandler<HTMLAnchorElement>("onPrivacyClick"),
  onCookieClick: createActionHandler<HTMLAnchorElement>("onCookieClick"),
  onAccesibilityClick: createActionHandler<HTMLAnchorElement>(
    "onAccesibilityClick"
  ),
  onAdsClick: createActionHandler<HTMLAnchorElement>("onAdsClick"),
  onMoreClick: createActionHandler<HTMLDivElement>("onMoreClick")
}
