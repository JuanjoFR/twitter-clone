import { SparklesIcon } from "@heroicons/react/24/solid"

interface Props {
  title: string
  onProfileClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onTitleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onSettingsClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

function Header({
  title,
  onProfileClick,
  onTitleClick,
  onSettingsClick
}: Props) {
  return (
    <div className="flex items-center gap-5 text-[#0F1419]">
      <div className="cursor-pointer sm:hidden" onClick={onProfileClick}>
        <img
          className="h-8 w-8 rounded-full"
          alt="Profile"
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/417.jpg"
        />
      </div>
      <div
        className="flex-1 cursor-pointer text-lg font-bold sm:text-xl"
        onClick={onTitleClick}
      >
        <h2 className="">{title}</h2>
      </div>
      <button className="" onClick={onSettingsClick}>
        <SparklesIcon className="h-5 w-5" />
      </button>
    </div>
  )
}

export default Header
