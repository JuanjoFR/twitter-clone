import UserRecommendationItem from "../molecules/user-recommendation-item"
import { User } from "../types"

interface Props {
  data: User[]
  onUserClick?: (
    id: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  onFollowClick?: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  onShowMoreClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

function UsersRecommendations({
  data,
  onUserClick,
  onFollowClick,
  onShowMoreClick
}: Props) {
  return (
    <div className="flex flex-col text-[#0F1419] mb-4">
      <h4 className="bg-[#F7F9F9] pt-3 rounded-t-2xl text-xl font-bold px-4 pb-1">
        Who to follow
      </h4>
      {data.map((item) => (
        <UserRecommendationItem
          {...item}
          key={item.id}
          onUserClick={(event) =>
            onUserClick ? onUserClick(item.id, event) : null
          }
          onFollowClick={(event) =>
            onFollowClick ? onFollowClick(item.id, event) : null
          }
        />
      ))}
      <button
        className="flex text-[#1d9bf0] pb-3 pt-1 px-4 rounded-b-2xl bg-[#f8f7f9] hover:bg-black hover:bg-opacity-[0.07]"
        onClick={onShowMoreClick}
      >
        Show more
      </button>
    </div>
  )
}

export default UsersRecommendations
