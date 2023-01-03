import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { Topic } from "../../types"

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
      className="flex cursor-pointer justify-between bg-[#F7F9F9] px-4 py-3 hover:bg-black hover:bg-opacity-[0.07]"
      onClick={onTopicClick}
    >
      <div className="flex flex-1 flex-col">
        <span className="text-sm font-normal text-[#536471]">{`Trending in ${country}`}</span>
        <span className="text-base font-bold text-[#0F1419]">{body}</span>
        {tweets ? (
          <span className="text-sm font-normal text-[#536471]">{`${tweets} Tweets`}</span>
        ) : undefined}
      </div>
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#1d9bf0] hover:bg-opacity-10"
        onClick={onMoreClick}
      >
        <EllipsisHorizontalIcon className="h-5 w-5" color="#536471" />
      </button>
    </div>
  )
}

export default HotTopicItem
