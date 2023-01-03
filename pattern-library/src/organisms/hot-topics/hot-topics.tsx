import HotTopicItem from "../../molecules/hot-topic-item/hot-topic-item"
import { Topic } from "../../types"

interface Props {
  data: Topic[]
  onTopicClick?: (
    id: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  onTopicMoreClick?: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onShowMoreClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
}

function HotTopics({
  data,
  onTopicClick,
  onTopicMoreClick,
  onShowMoreClick
}: Props) {
  return (
    <div className="mb-4 flex flex-col text-[#0F1419]">
      <h4 className="rounded-t-2xl bg-[#F7F9F9] px-4 pt-3 pb-1 text-xl font-bold">
        What's happening
      </h4>
      {data.map((item) => (
        <HotTopicItem
          key={item.id}
          {...item}
          onTopicClick={(event) =>
            onTopicClick ? onTopicClick(item.id, event) : null
          }
          onMoreClick={(event) =>
            onTopicMoreClick ? onTopicMoreClick(item.id, event) : null
          }
        />
      ))}
      <div
        className="cursor-pointer rounded-b-2xl bg-[#F7F9F9] px-4 pb-3 pt-1 text-[#1d9bf0] hover:bg-black hover:bg-opacity-[0.07]"
        onClick={onShowMoreClick}
      >
        Show more
      </div>
    </div>
  )
}

export default HotTopics
