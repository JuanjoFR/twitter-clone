import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MainTemplate from '../components/templates/main';
import Sidebar from '../components/organisms/sidebar';
import React from 'react';
import Header from '../components/organisms/header';
import TweetForm from '../components/organisms/tweet-form';
import Separator from '../components/atoms/separator';
import Timeline from '../components/organisms/timeline';
import SearchForm from '../components/organisms/search-form';
import HotTopics from '../components/organisms/hot-topics';

export default {
  title: 'Components/Main Template',
  component: MainTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MainTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainTemplate> = (args) => <MainTemplate {...args} />;

function createActionHandler(key: "onProfileClick" | "onTitleClick" | "onSettingsClick") {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    action(key)(event)
  }
}

function createTimelineActionHandler(key: "onUserClick" | "onTweetClick" | "onMoreClick" | "onAnswersClick" | "onRetweetsClick" | "onLikesClick" | "onShareClick") {
  return (id: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    action(`${key}/${id}`)(event)
  }
}

function createSearchFormActionHandler() {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    action("onSubmit")(event)
  }
}

function createHotTopicTopicActionHandler() {
  return (id: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    action(`onTopicClick/${id}`)(event)
  }
}

function createHotTopicTopicMoreActionHandler() {
  return (id: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    action(`onTopicTopicMoreClick/${id}`)(event)
  }
}

function createHotTopicMoreActionHandler() {
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    action("onTopicMoreClick")(event)
  }
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  sidebar: <Sidebar />,
  content: (
    <React.Fragment>
      <div className="mx-5 mt-3 mb-5">
        <Header title="Home" onProfileClick={createActionHandler("onProfileClick")} onTitleClick={createActionHandler("onTitleClick")} onSettingsClick={createActionHandler("onSettingsClick")} />
      </div>
      <div className="mx-5">
        <TweetForm />
      </div>
      <Separator className='hidden sm:flex mt-3' />
      <Timeline
        data={
          [
            {
              id: "7acfdc1c-9386-436e-8003-4eb6ca624088",
              user: {
                fullName: "Salvador Dooley",
                nickName: "@Peggie_Fisher80",
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/398.jpg"
              },
              body: (
                <React.Fragment>
                  <p>Ullam in at labore labore nobis possimus.</p>
                  <p>Dignissimos culpa veniam eius voluptatibus voluptatum cum.</p>
                </React.Fragment>
              ),
              meta: {
                time: "12m",
                answers: "75",
                retweets: "102",
                likes: "474"
              }
            }, {
              id: "612d9bf3-02d6-4d41-b4a8-e46354032918",
              user: {
                fullName: "Cedric Walsh",
                nickName: "@Megane-Bosco",
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/376.jpg"
              },
              body: (
                <React.Fragment>
                  <p>Assumenda assumenda pariatur quasi soluta quibusdam qui ducimus totam dolore.</p>
                  <p>Cum quod eos tempora.</p>
                  <br />
                  <p>Laborum tempora eum repellat iste quas in illo voluptates nobis.</p>
                </React.Fragment>
              ),
              meta: {
                time: "18m",
                answers: "40",
                retweets: "363",
                likes: "842"
              }
            }, {
              id: "0ce8bdb9-7d31-4179-8dac-acbb27e61ec3",
              user: {
                fullName: "Mr. Rachel Green",
                nickName: "@Dawson51",
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/256.jpg"
              },
              body: (
                <React.Fragment>
                  <p>Illo ratione quisquam delectus in labore aliquam blanditiis.</p>
                  <p>Laborum totam aliquid et reprehenderit fuga veritatis odio.</p>
                  <p>Fuga autem molestias et autem quis tempore molestias nesciunt facilis explicabo.</p>
                </React.Fragment>
              ),
              meta: {
                time: "4h",
                answers: "14",
                retweets: "1",
                likes: "218"
              }
            }, {
              id: "4bc6df7d-406e-4c3b-8041-9b4f7082d551",
              user: {
                fullName: "Miss Nelson Mertz",
                nickName: "@June_Schumm8",
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/48.jpg"
              },
              body: (
                <React.Fragment>
                  <p>Tempore labore asperiores excepturi odio iure hic quas commodi occaecati earum illo quas provident suscipit perferendis necessitatibus molestiae explicabo nisi dolores dignissimos sint.</p>
                </React.Fragment>
              ),
              meta: {
                time: "4h",
                answers: "60",
                retweets: "381",
                likes: "190"
              }
            }, {
              id: "1990d649-5efe-4c5c-8e52-ca861e1b942d",
              user: {
                fullName: "Tony Bashirian",
                nickName: "@Asa_Sauer45",
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1193.jpg"
              },
              body: (
                <React.Fragment>
                  <p>Ex sequi culpa.</p>
                  <br />
                  <p>Quae labore minus suscipit aliquam enim autem nisi tempore earum.</p>
                  <p>Exercitationem atque accusantium quae amet ut sint id tempora explicabo aperiam deserunt animi natus veritatis consequatur.</p>
                </React.Fragment>
              ),
              meta: {
                time: "5h",
                answers: "11",
                retweets: "284",
                likes: "768"
              }
            }, {
              id: "34eeb1b0-a30e-4670-8250-f1abe0bd6fa4",
              user: {
                fullName: "Dr. Maurice Maggio",
                nickName: "@Jennings_Braun99",
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1176.jpg"
              },
              body: (
                <React.Fragment>
                  <p>Magnam reiciendis ipsum consequuntur.</p>
                  <p>Nisi dolor quasi alias maxime fugit aliquam perspiciatis quibusdam.</p>
                  <p>Ab ipsam cupiditate.</p>
                  <p>Voluptatum incidunt ab molestiae soluta exercitationem inventore nemo mollitia velit blanditiis recusandae in aut totam deleniti.</p>
                </React.Fragment>
              ),
              meta: {
                time: "6h",
                answers: "78",
                retweets: "218",
                likes: "1.377"
              }
            }, {
              id: "90402a92-9fa9-4746-904c-6cf0c5507d36",
              user: {
                fullName: "Lillian Jerde PhD",
                nickName: "@Olen18",
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/218.jpg"
              },
              body: (
                <React.Fragment>
                  <p>Possimus optio hic beatae maxime expedita a aliquid itaque et a eius dolorum quasi.</p>
                  <br /><br />
                  <p>Eaque velit ex dolore magni eum maxime expedita non voluptatem aut odio blanditiis eaque ipsum labore dolores numquam.</p>
                </React.Fragment>
              ),
              meta: {
                time: "10h",
                answers: "19",
                retweets: "174",
                likes: "560"
              }
            }, {
              id: "0442b58c-6159-405e-8f88-67d168e58f61",
              user: {
                fullName: "Candace Ritchie",
                nickName: "@Dorothea_Balistreri",
                image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg"
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
              }
            }
          ]
        }
        onUserClick={createTimelineActionHandler("onUserClick")}
        onTweetClick={createTimelineActionHandler("onTweetClick")}
        onMoreClick={createTimelineActionHandler("onMoreClick")}
        onAnswersClick={createTimelineActionHandler("onAnswersClick")}
        onRetweetsClick={createTimelineActionHandler("onRetweetsClick")}
        onLikesClick={createTimelineActionHandler("onLikesClick")}
        onShareClick={createTimelineActionHandler("onShareClick")}
      />
    </React.Fragment>
  ),
  widgets: (
    <div className="flex flex-col flex-1">
      <SearchForm className="mt-2 mb-4" onSubmit={createSearchFormActionHandler()} />
      <HotTopics
        data={[
          {
            id: "33c2a660-1755-4a07-b6e9-202b0b5e545a",
            country: "Spain",
            body: "Pink customized despite",
            tweets: "530K"
          }, {
            id: "640c9d34-091c-41f9-b030-05491bf351e8",
            country: "Spain",
            body: "Southwest Jeep",
            tweets: "814K"
          }, {
            id: "53fd0096-42d2-4040-8db3-3222bcba3613",
            country: "Spain",
            body: "British Indian Ocean Territory"
          }, {
            id: "8ad5f620-fffb-4b0c-9241-1eb58fdf7bdd",
            country: "Spain",
            body: "Wherever greedy",
            tweets: "2.342"
          }, {
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
    </div>
  )
};
