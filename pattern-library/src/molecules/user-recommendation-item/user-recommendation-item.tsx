import Button from "../../atoms/button/button"
import { User } from "../../types"

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
      className="flex cursor-pointer justify-between bg-[#F7F9F9] px-4 py-3 hover:bg-black hover:bg-opacity-[0.07]"
      onClick={onUserClick}
    >
      <div className="mr-4 flex flex-shrink-0 items-center justify-center">
        <img className="h-12 w-12 rounded-md" src={image} alt="User" />
      </div>
      <div className="mr-4 flex flex-1 flex-col justify-center overflow-hidden">
        <span className="text-base font-bold text-[#0F1419]">{fullName}</span>
        <span className="text-sm font-normal text-[#536471]">{nickName}</span>
      </div>
      <div className="flex items-center justify-center">
        <Button
          color="secondary"
          size="sm"
          label="Follow"
          onClick={onFollowClick}
        />
      </div>
    </div>
  )
}

export default UserRecommendationItem
