import { EllipsisHorizontalIcon, ChatBubbleOvalLeftIcon, ArrowPathRoundedSquareIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { Tweet as ITweet } from "../types"

interface Props {
  data: ITweet
  onUserClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onTweetClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMoreClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onAnswersClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onRetweetsClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onLikesClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onShareClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function Tweet({ data, onUserClick, onTweetClick, onMoreClick, onAnswersClick, onRetweetsClick, onLikesClick, onShareClick }: Props) {
  return (
    <div className="flex">
      <div className="ml-5">
        <a
          href="#user"
          onClick={onUserClick}
        >
          <img
            className="w-12 h-12 rounded-full mr-4"
            alt="Profile"
            src={data.user.image}
          />
        </a>
      </div>
      <div className="flex flex-col flex-1 mr-5">
        <div className="flex items-center justify-between text-base">
          <div>
            <a href="#user" className="font-bold mr-2 text-[#0F1419]" onClick={onUserClick}>{data.user.fullName}</a>
            <a href="#user" className="mr-2 text-[#536471]" onClick={onUserClick}>{data.user.nickName}</a>
            <span className="mr-2 text-[#536471]">·</span>
            <a href="#tweet" className="text-[#536471]" onClick={onTweetClick}>{data.meta.time}</a>
          </div>
          <a
            href="#more"
            onClick={onMoreClick}
          >
            <EllipsisHorizontalIcon className="w-5 h-5"  color='#0F1419' /> 
          </a>
        </div>
        <div className="mb-3 text-[#0F1419]">
          <a href="#tweet" onClick={onTweetClick}>
            {data.body}
          </a>
        </div>
        <div className="flex justify-between text-[#536471] text-sm">
          <a href="#answers" className="flex items-center" onClick={onAnswersClick}>
            <ChatBubbleOvalLeftIcon className="w-5 h-5 mr-3"  color='#536471' /> 
            <span>{data.meta.answers}</span>
          </a>
          <a href="#retweets" className="flex items-center" onClick={onRetweetsClick}>
            <ArrowPathRoundedSquareIcon className="w-5 h-5 mr-3"  color='#536471' /> 
            <span>{data.meta.retweets}</span>
          </a>
          <a href="#likes" className="flex items-center" onClick={onLikesClick}>
            <HeartIcon className="w-5 h-5 mr-3"  color='#536471' /> 
            <span>{data.meta.likes}</span>
          </a>
          <a href="#share" className="flex items-center" onClick={onShareClick}>
            <ArrowUpTrayIcon className="w-5 h-5"  color='#536471' /> 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tweet;