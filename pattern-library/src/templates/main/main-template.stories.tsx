import { ComponentStory, ComponentMeta } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import MainTemplate from "./main"
import Sidebar from "../../organisms/sidebar/sidebar"
import React from "react"
import Header from "../../organisms/header/header"
import TweetForm from "../../organisms/tweet-form/tweet-form"
import Separator from "../../atoms/separator/separator"
import Timeline from "../../organisms/timeline/timeline"
import SearchForm from "../../organisms/search-form/search-form"
import HotTopics from "../../organisms/hot-topics/hot-topics"
import Footer from "../../organisms/footer/footer"
import UsersRecommendations from "../../organisms/users-recommendations/users-recommendations"

export default {
  title: "Pages/Main Template",
  component: MainTemplate,
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof MainTemplate>

const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate {...args} />
)

function createSidebarActionHandler(
  key:
    | "onLogoClick"
    | "onHomeClick"
    | "onExploreClick"
    | "onNotificationsClick"
    | "onMessagesClick"
    | "onBookmarksClick"
    | "onListsClick"
    | "onProfileClick"
    | "onMoreClick"
    | "onTweetClick"
) {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    action(key)(event)
  }
}

function createHeaderActionHandler<T>(
  key: "onProfileClick" | "onTitleClick" | "onSettingsClick"
) {
  return (event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault()
    action(key)(event)
  }
}

function createTweetFormActionHandler<T>(
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

function createTimelineActionHandler<T>(
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
  return (id: string, event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault()
    action(`${key}/${id}`)(event)
  }
}

function createSearchFormActionHandler() {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    action("onSubmit")(event)
  }
}

function createHotTopicTopicActionHandler() {
  return (id: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    action(`onTopicClick/${id}`)(event)
  }
}

function createHotTopicTopicMoreActionHandler() {
  return (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    event.stopPropagation()
    action(`onTopicTopicMoreClick/${id}`)(event)
  }
}

function createHotTopicMoreActionHandler() {
  return (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    action("onTopicMoreClick")(event)
  }
}

function createUsersRecommendationsUserActionHandler() {
  return (id: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    action(`onUsersRecommendationsUserClick/${id}`)(event)
  }
}

function createUsersRecommendationsFollowActionHandler() {
  return (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    event.stopPropagation()
    action(`onUsersRecommendationsFollowClick/${id}`)(event)
  }
}

function createUsersRecommendationsMoreActionHandler() {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    action("onUsersRecommendationsMoreClick")(event)
  }
}

function createFooterActionHandler<T>(
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
  sidebar: (
    <Sidebar
      logoUrl="#"
      homeUrl="#"
      exploreUrl="#"
      notificationsUrl="#"
      messagesUrl="#"
      bookmarksUrl="#"
      listsUrl="#"
      profileUrl="#"
      tweetUrl="#"
      onLogoClick={createSidebarActionHandler("onLogoClick")}
      onHomeClick={createSidebarActionHandler("onHomeClick")}
      onExploreClick={createSidebarActionHandler("onExploreClick")}
      onNotificationsClick={createSidebarActionHandler("onNotificationsClick")}
      onMessagesClick={createSidebarActionHandler("onMessagesClick")}
      onBookmarksClick={createSidebarActionHandler("onBookmarksClick")}
      onListsClick={createSidebarActionHandler("onListsClick")}
      onProfileClick={createSidebarActionHandler("onProfileClick")}
      onMoreClick={createSidebarActionHandler("onMoreClick")}
      onTweetClick={createSidebarActionHandler("onTweetClick")}
    />
  ),
  content: (
    <React.Fragment>
      <div className="mx-5 mt-3 mb-5">
        <Header
          title="Home"
          onProfileClick={createHeaderActionHandler<HTMLDivElement>(
            "onProfileClick"
          )}
          onTitleClick={createHeaderActionHandler<HTMLDivElement>(
            "onTitleClick"
          )}
          onSettingsClick={createHeaderActionHandler<HTMLButtonElement>(
            "onSettingsClick"
          )}
        />
      </div>
      <div className="mx-5">
        <TweetForm
          userUrl="#"
          onProfileClick={createTweetFormActionHandler<HTMLAnchorElement>(
            "onProfileClick"
          )}
          onAttachImageClick={createTweetFormActionHandler<HTMLButtonElement>(
            "onAttachImageClick"
          )}
          onAttachGifClick={createTweetFormActionHandler<HTMLButtonElement>(
            "onAttachGifClick"
          )}
          onCreatePollClick={createTweetFormActionHandler<HTMLButtonElement>(
            "onCreatePollClick"
          )}
          onAttachEmojiClick={createTweetFormActionHandler<HTMLButtonElement>(
            "onAttachEmojiClick"
          )}
          onScheduleClick={createTweetFormActionHandler<HTMLButtonElement>(
            "onScheduleClick"
          )}
          onAttachLocationClick={createTweetFormActionHandler<HTMLButtonElement>(
            "onAttachLocationClick"
          )}
          onTweetClick={createTweetFormActionHandler<HTMLButtonElement>(
            "onTweetClick"
          )}
        />
      </div>
      <Separator className="hidden sm:flex mt-3" />
      <Timeline
        data={[
          {
            id: "7acfdc1c-9386-436e-8003-4eb6ca624088",
            user: {
              id: "7acfdc1c-9386-436e-8003-4eb6ca624088",
              fullName: "Salvador Dooley",
              nickName: "@Peggie_Fisher80",
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/398.jpg",
              url: "#"
            },
            body: (
              <React.Fragment>
                <p>Ullam in at labore labore nobis possimus.</p>
                <p>
                  Dignissimos culpa veniam eius voluptatibus voluptatum cum.
                </p>
              </React.Fragment>
            ),
            meta: {
              time: "12m",
              answers: "75",
              retweets: "102",
              likes: "474"
            },
            url: "#"
          },
          {
            id: "612d9bf3-02d6-4d41-b4a8-e46354032918",
            user: {
              id: "612d9bf3-02d6-4d41-b4a8-e46354032918",
              fullName: "Cedric Walsh",
              nickName: "@Megane-Bosco",
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/376.jpg",
              url: "#"
            },
            body: (
              <React.Fragment>
                <p>
                  Assumenda assumenda pariatur quasi soluta quibusdam qui
                  ducimus totam dolore.
                </p>
                <p>Cum quod eos tempora.</p>
                <br />
                <p>
                  Laborum tempora eum repellat iste quas in illo voluptates
                  nobis.
                </p>
              </React.Fragment>
            ),
            meta: {
              time: "18m",
              answers: "40",
              retweets: "363",
              likes: "842"
            },
            url: "#"
          },
          {
            id: "0ce8bdb9-7d31-4179-8dac-acbb27e61ec3",
            user: {
              id: "0ce8bdb9-7d31-4179-8dac-acbb27e61ec3",
              fullName: "Mr. Rachel Green",
              nickName: "@Dawson51",
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/256.jpg",
              url: "#"
            },
            body: (
              <React.Fragment>
                <p>
                  Illo ratione quisquam delectus in labore aliquam blanditiis.
                </p>
                <p>
                  Laborum totam aliquid et reprehenderit fuga veritatis odio.
                </p>
                <p>
                  Fuga autem molestias et autem quis tempore molestias nesciunt
                  facilis explicabo.
                </p>
              </React.Fragment>
            ),
            meta: {
              time: "4h",
              answers: "14",
              retweets: "1",
              likes: "218"
            },
            url: "#"
          },
          {
            id: "4bc6df7d-406e-4c3b-8041-9b4f7082d551",
            user: {
              id: "4bc6df7d-406e-4c3b-8041-9b4f7082d551",
              fullName: "Miss Nelson Mertz",
              nickName: "@June_Schumm8",
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/48.jpg",
              url: "#"
            },
            body: (
              <React.Fragment>
                <p>
                  Tempore labore asperiores excepturi odio iure hic quas commodi
                  occaecati earum illo quas provident suscipit perferendis
                  necessitatibus molestiae explicabo nisi dolores dignissimos
                  sint.
                </p>
              </React.Fragment>
            ),
            meta: {
              time: "4h",
              answers: "60",
              retweets: "381",
              likes: "190"
            },
            url: "#"
          },
          {
            id: "1990d649-5efe-4c5c-8e52-ca861e1b942d",
            user: {
              id: "1990d649-5efe-4c5c-8e52-ca861e1b942d",
              fullName: "Tony Bashirian",
              nickName: "@Asa_Sauer45",
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1193.jpg",
              url: "#"
            },
            body: (
              <React.Fragment>
                <p>Ex sequi culpa.</p>
                <br />
                <p>
                  Quae labore minus suscipit aliquam enim autem nisi tempore
                  earum.
                </p>
                <p>
                  Exercitationem atque accusantium quae amet ut sint id tempora
                  explicabo aperiam deserunt animi natus veritatis consequatur.
                </p>
              </React.Fragment>
            ),
            meta: {
              time: "5h",
              answers: "11",
              retweets: "284",
              likes: "768"
            },
            url: "#"
          },
          {
            id: "34eeb1b0-a30e-4670-8250-f1abe0bd6fa4",
            user: {
              id: "34eeb1b0-a30e-4670-8250-f1abe0bd6fa4",
              fullName: "Dr. Maurice Maggio",
              nickName: "@Jennings_Braun99",
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1176.jpg",
              url: "#"
            },
            body: (
              <React.Fragment>
                <p>Magnam reiciendis ipsum consequuntur.</p>
                <p>
                  Nisi dolor quasi alias maxime fugit aliquam perspiciatis
                  quibusdam.
                </p>
                <p>Ab ipsam cupiditate.</p>
                <p>
                  Voluptatum incidunt ab molestiae soluta exercitationem
                  inventore nemo mollitia velit blanditiis recusandae in aut
                  totam deleniti.
                </p>
              </React.Fragment>
            ),
            meta: {
              time: "6h",
              answers: "78",
              retweets: "218",
              likes: "1.377"
            },
            url: "#"
          },
          {
            id: "90402a92-9fa9-4746-904c-6cf0c5507d36",
            user: {
              id: "90402a92-9fa9-4746-904c-6cf0c5507d36",
              fullName: "Lillian Jerde PhD",
              nickName: "@Olen18",
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/218.jpg",
              url: "#"
            },
            body: (
              <React.Fragment>
                <p>
                  Possimus optio hic beatae maxime expedita a aliquid itaque et
                  a eius dolorum quasi.
                </p>
                <br />
                <br />
                <p>
                  Eaque velit ex dolore magni eum maxime expedita non voluptatem
                  aut odio blanditiis eaque ipsum labore dolores numquam.
                </p>
              </React.Fragment>
            ),
            meta: {
              time: "10h",
              answers: "19",
              retweets: "174",
              likes: "560"
            },
            url: "#"
          },
          {
            id: "0442b58c-6159-405e-8f88-67d168e58f61",
            user: {
              id: "0442b58c-6159-405e-8f88-67d168e58f61",
              fullName: "Candace Ritchie",
              nickName: "@Dorothea_Balistreri",
              image:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg",
              url: "#"
            },
            body: (
              <React.Fragment>
                <p>Saepe repudiandae harum nisi eveniet.</p>
                <p>Debitis itaque sequi quas odit libero illo quaerat.</p>
              </React.Fragment>
            ),
            meta: {
              time: "12h",
              answers: "26",
              retweets: "34",
              likes: "75"
            },
            url: "#"
          }
        ]}
        onUserClick={createTimelineActionHandler<HTMLAnchorElement>(
          "onUserClick"
        )}
        onDateClick={createTimelineActionHandler<HTMLAnchorElement>(
          "onDateClick"
        )}
        onTweetClick={createTimelineActionHandler<HTMLDivElement>(
          "onTweetClick"
        )}
        onMoreClick={createTimelineActionHandler<HTMLButtonElement>(
          "onMoreClick"
        )}
        onAnswersClick={createTimelineActionHandler<HTMLButtonElement>(
          "onAnswersClick"
        )}
        onRetweetsClick={createTimelineActionHandler<HTMLButtonElement>(
          "onRetweetsClick"
        )}
        onLikesClick={createTimelineActionHandler<HTMLButtonElement>(
          "onLikesClick"
        )}
        onShareClick={createTimelineActionHandler<HTMLButtonElement>(
          "onShareClick"
        )}
      />
    </React.Fragment>
  ),
  widgets: (
    <div className="flex flex-col flex-1">
      <SearchForm
        className="mt-2 mb-4"
        onSubmit={createSearchFormActionHandler()}
      />
      <HotTopics
        data={[
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
        ]}
        onTopicClick={createHotTopicTopicActionHandler()}
        onTopicMoreClick={createHotTopicTopicMoreActionHandler()}
        onShowMoreClick={createHotTopicMoreActionHandler()}
      />
      <UsersRecommendations
        data={[
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
        ]}
        onUserClick={createUsersRecommendationsUserActionHandler()}
        onFollowClick={createUsersRecommendationsFollowActionHandler()}
        onShowMoreClick={createUsersRecommendationsMoreActionHandler()}
      />
      <Footer
        className="mx-4"
        tosUrl="#"
        privacyUrl="#"
        cookieUrl="#"
        accesibilityUrl="#"
        adsUrl="#"
        onTosClick={createFooterActionHandler<HTMLAnchorElement>("onTosClick")}
        onPrivacyClick={createFooterActionHandler<HTMLAnchorElement>(
          "onPrivacyClick"
        )}
        onCookieClick={createFooterActionHandler<HTMLAnchorElement>(
          "onCookieClick"
        )}
        onAccesibilityClick={createFooterActionHandler<HTMLAnchorElement>(
          "onAccesibilityClick"
        )}
        onAdsClick={createFooterActionHandler<HTMLAnchorElement>("onAdsClick")}
        onMoreClick={createFooterActionHandler<HTMLDivElement>("onMoreClick")}
      />
    </div>
  )
}
