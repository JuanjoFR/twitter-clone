import { User } from "../types"

interface Props extends Omit<User, "id"> {
  onUserClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onFollowClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

function UserRecommendationItem({
  fullName,
  nickName,
  image,
  onUserClick,
  onFollowClick
}: Props) {
  return (
    <div
      className="flex justify-between px-4 py-3 bg-[#F7F9F9] hover:bg-black hover:bg-opacity-[0.07] cursor-pointer"
      onClick={onUserClick}
    >
      <div className="flex flex-shrink-0 items-center justify-center mr-4">
        <img className="w-12 h-12 rounded-md" src={image} alt="User" />
      </div>
      <div className="flex flex-col flex-1 justify-center mr-4 overflow-hidden">
        <span className="font-bold text-base text-[#0F1419]">{fullName}</span>
        <span className="font-normal text-sm text-[#536471]">{nickName}</span>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-[#0F1419] text-white rounded-full px-4 py-2 font-bold text-sm"
          onClick={onFollowClick}
        >
          Follow
        </button>
      </div>
    </div>
  )
}

export default UserRecommendationItem
