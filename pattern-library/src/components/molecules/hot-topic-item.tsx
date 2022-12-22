import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { Topic } from '../types';

interface Props {
  data: Topic
  onTopicClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMoreClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function HotTopicItem({ data, onTopicClick, onMoreClick }: Props) {
  return (
    <a href="#topic" className="flex justify-between px-4 py-3 bg-[#F7F9F9] hover:bg-black hover:bg-opacity-[0.07]" onClick={onTopicClick}>
      <div className="flex flex-col flex-1">
        <span className="font-normal text-sm text-[#536471]">{`Trending in ${data.country}`}</span>
        <span className="font-bold text-base text-[#0F1419]">{data.body}</span>
        {data.tweets ? <span className="font-normal text-sm text-[#536471]">{`${data.tweets} Tweets`}</span> : undefined}
      </div>
      <a
        href="#more"
        className="flex w-8 h-8 rounded-full items-center justify-center hover:bg-[#1d9bf0] hover:bg-opacity-10"
        onClick={onMoreClick}
      >
        <EllipsisHorizontalIcon className="w-5 h-5" color='#536471' />
      </a>
    </a>
  );
}

export default HotTopicItem