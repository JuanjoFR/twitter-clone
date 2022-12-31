import React from "react"
import Separator from "../atoms/separator"
import { Tweet as ITweet } from "../types"
import Tweet from "../molecules/tweet"

interface Props {
  data: ITweet[]
  onUserClick?: (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void
  onDateClick?: (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void
  onTweetClick?: (
    id: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  onMoreClick?: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onAnswersClick?: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onRetweetsClick?: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onLikesClick?: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onShareClick?: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

function Timeline({
  data,
  onUserClick,
  onDateClick,
  onTweetClick,
  onMoreClick,
  onAnswersClick,
  onRetweetsClick,
  onLikesClick,
  onShareClick
}: Props) {
  return (
    <React.Fragment>
      {data.map((item) => (
        <React.Fragment>
          <Tweet
            key={item.id}
            {...item}
            onUserClick={(event) =>
              onUserClick ? onUserClick(item.id, event) : null
            }
            onDateClick={(event) =>
              onDateClick ? onDateClick(item.id, event) : null
            }
            onTweetClick={(event) =>
              onTweetClick ? onTweetClick(item.id, event) : null
            }
            onMoreClick={(event) =>
              onMoreClick ? onMoreClick(item.id, event) : null
            }
            onAnswersClick={(event) =>
              onAnswersClick ? onAnswersClick(item.id, event) : null
            }
            onRetweetsClick={(event) =>
              onRetweetsClick ? onRetweetsClick(item.id, event) : null
            }
            onLikesClick={(event) =>
              onLikesClick ? onLikesClick(item.id, event) : null
            }
            onShareClick={(event) =>
              onShareClick ? onShareClick(item.id, event) : null
            }
          />
          <Separator />
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default Timeline
