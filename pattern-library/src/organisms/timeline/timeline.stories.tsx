import Timeline from "./timeline"
import { action } from "@storybook/addon-actions"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

export default {
  title: "Components/Timeline",
  component: Timeline
} as ComponentMeta<typeof Timeline>

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args} />
)

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
  return (id: string, event: React.MouseEvent<T, MouseEvent>) => {
    event.preventDefault()
    action(`${key}/${id}`)(event)
  }
}

export const Default = Template.bind({})

Default.args = {
  data: [
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
          <p>Dignissimos culpa veniam eius voluptatibus voluptatum cum.</p>
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
            Assumenda assumenda pariatur quasi soluta quibusdam qui ducimus
            totam dolore.
          </p>
          <p>Cum quod eos tempora.</p>
          <br />
          <p>
            Laborum tempora eum repellat iste quas in illo voluptates nobis.
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
          <p>Illo ratione quisquam delectus in labore aliquam blanditiis.</p>
          <p>Laborum totam aliquid et reprehenderit fuga veritatis odio.</p>
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
            necessitatibus molestiae explicabo nisi dolores dignissimos sint.
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
            Quae labore minus suscipit aliquam enim autem nisi tempore earum.
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
            Nisi dolor quasi alias maxime fugit aliquam perspiciatis quibusdam.
          </p>
          <p>Ab ipsam cupiditate.</p>
          <p>
            Voluptatum incidunt ab molestiae soluta exercitationem inventore
            nemo mollitia velit blanditiis recusandae in aut totam deleniti.
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
            Possimus optio hic beatae maxime expedita a aliquid itaque et a eius
            dolorum quasi.
          </p>
          <br />
          <br />
          <p>
            Eaque velit ex dolore magni eum maxime expedita non voluptatem aut
            odio blanditiis eaque ipsum labore dolores numquam.
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
  ],
  onUserClick: createActionHandler<HTMLAnchorElement>("onUserClick"),
  onDateClick: createActionHandler<HTMLAnchorElement>("onDateClick"),
  onTweetClick: createActionHandler<HTMLDivElement>("onTweetClick"),
  onMoreClick: createActionHandler<HTMLButtonElement>("onMoreClick"),
  onAnswersClick: createActionHandler<HTMLButtonElement>("onAnswersClick"),
  onRetweetsClick: createActionHandler<HTMLButtonElement>("onRetweetsClick"),
  onLikesClick: createActionHandler<HTMLButtonElement>("onLikesClick"),
  onShareClick: createActionHandler<HTMLButtonElement>("onShareClick")
}
