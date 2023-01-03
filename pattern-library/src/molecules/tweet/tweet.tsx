import { Tweet as ITweet } from "../../types"
import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ArrowUpTrayIcon
} from "@heroicons/react/24/outline"

interface Props extends Omit<ITweet, "id"> {
  onUserClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  onDateClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  onTweetClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMoreClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onAnswersClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onRetweetsClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onLikesClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onShareClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

function Tweet({
  user,
  body,
  url,
  meta,
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
    <div className="flex">
      <div className="ml-5">
        <a href={user.url} onClick={onUserClick}>
          <img
            className="mr-4 h-12 w-12 rounded-full"
            alt="Profile"
            src={user.image}
          />
        </a>
      </div>
      <div className="mr-5 flex flex-1 flex-col">
        <div className="flex items-center justify-between text-base">
          <div>
            <a
              href={user.url}
              className="mr-2 font-bold text-[#0F1419]"
              onClick={onUserClick}
            >
              {user.fullName}
            </a>
            <a
              href={user.url}
              className="mr-2 text-[#536471]"
              onClick={onUserClick}
            >
              {user.nickName}
            </a>
            <span className="mr-2 text-[#536471]">·</span>
            <a href={url} className="text-[#536471]" onClick={onDateClick}>
              {meta.time}
            </a>
          </div>
          <button onClick={onMoreClick}>
            <EllipsisHorizontalIcon className="h-5 w-5" color="#0F1419" />
          </button>
        </div>
        <div
          className="mb-3 cursor-pointer text-[#0F1419]"
          onClick={onTweetClick}
        >
          {body}
        </div>
        <div className="flex justify-between text-sm text-[#536471]">
          <button className="flex items-center" onClick={onAnswersClick}>
            <ChatBubbleOvalLeftIcon className="mr-3 h-5 w-5" color="#536471" />
            <span>{meta.answers}</span>
          </button>
          <button className="flex items-center" onClick={onRetweetsClick}>
            <ArrowPathRoundedSquareIcon
              className="mr-3 h-5 w-5"
              color="#536471"
            />
            <span>{meta.retweets}</span>
          </button>
          <button className="flex items-center" onClick={onLikesClick}>
            <HeartIcon className="mr-3 h-5 w-5" color="#536471" />
            <span>{meta.likes}</span>
          </button>
          <button className="flex items-center" onClick={onShareClick}>
            <ArrowUpTrayIcon className="h-5 w-5" color="#536471" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tweet
