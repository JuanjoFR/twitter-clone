import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { Topic } from "../types"

interface Props extends Omit<Topic, "id"> {
  onTopicClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMoreClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function HotTopicItem({
  country,
  body,
  tweets,
  onTopicClick,
  onMoreClick
}: Props) {
  return (
    <div
      className="flex justify-between px-4 py-3 bg-[#F7F9F9] hover:bg-black hover:bg-opacity-[0.07] cursor-pointer"
      onClick={onTopicClick}
    >
      <div className="flex flex-col flex-1">
        <span className="font-normal text-sm text-[#536471]">{`Trending in ${country}`}</span>
        <span className="font-bold text-base text-[#0F1419]">{body}</span>
        {tweets ? (
          <span className="font-normal text-sm text-[#536471]">{`${tweets} Tweets`}</span>
        ) : undefined}
      </div>
      <button
        className="flex w-8 h-8 rounded-full items-center justify-center hover:bg-[#1d9bf0] hover:bg-opacity-10"
        onClick={onMoreClick}
      >
        <EllipsisHorizontalIcon className="w-5 h-5" color="#536471" />
      </button>
    </div>
  )
}

export default HotTopicItem
