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
    <div className="flex flex-col text-[#0F1419] mb-4">
      <h4 className="bg-[#F7F9F9] pt-3 rounded-t-2xl text-xl font-bold px-4 pb-1">
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
        className="text-[#1d9bf0] pb-3 pt-1 px-4 rounded-b-2xl bg-[#F7F9F9] hover:bg-black hover:bg-opacity-[0.07] cursor-pointer"
        onClick={onShowMoreClick}
      >
        Show more
      </div>
    </div>
  )
}

export default HotTopics
