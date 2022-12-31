import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ArrowUpTrayIcon
} from "@heroicons/react/24/outline"
import { Tweet as ITweet } from "../types"

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
            className="w-12 h-12 rounded-full mr-4"
            alt="Profile"
            src={user.image}
          />
        </a>
      </div>
      <div className="flex flex-col flex-1 mr-5">
        <div className="flex items-center justify-between text-base">
          <div>
            <a
              href={user.url}
              className="font-bold mr-2 text-[#0F1419]"
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
            <EllipsisHorizontalIcon className="w-5 h-5" color="#0F1419" />
          </button>
        </div>
        <div
          className="mb-3 text-[#0F1419] cursor-pointer"
          onClick={onTweetClick}
        >
          {body}
        </div>
        <div className="flex justify-between text-[#536471] text-sm">
          <button className="flex items-center" onClick={onAnswersClick}>
            <ChatBubbleOvalLeftIcon className="w-5 h-5 mr-3" color="#536471" />
            <span>{meta.answers}</span>
          </button>
          <button className="flex items-center" onClick={onRetweetsClick}>
            <ArrowPathRoundedSquareIcon
              className="w-5 h-5 mr-3"
              color="#536471"
            />
            <span>{meta.retweets}</span>
          </button>
          <button className="flex items-center" onClick={onLikesClick}>
            <HeartIcon className="w-5 h-5 mr-3" color="#536471" />
            <span>{meta.likes}</span>
          </button>
          <button className="flex items-center" onClick={onShareClick}>
            <ArrowUpTrayIcon className="w-5 h-5" color="#536471" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tweet
