import { SparklesIcon } from '@heroicons/react/24/solid'

interface Props {
  title: String
  onProfileClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onTitleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onSettingsClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function Header({ title, onProfileClick, onTitleClick, onSettingsClick }: Props) {
  return (
    <div className="flex items-center gap-5 text-[#0F1419]">
      <a
        className="sm:hidden"
        href="#profile"
        onClick={onProfileClick}
      >
        <img
          className="w-8 h-8 rounded-full"
          alt="Profile"
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/417.jpg"
        />
      </a>
      <a
        className="flex-1 text-lg sm:text-xl font-bold"
        href="#title"
        onClick={onTitleClick}
      >
        <h2 className="">{title}</h2>
      </a>
      <a
        className=""
        href="#settings"
        onClick={onSettingsClick}
      >
        <SparklesIcon className="w-5 h-5" />
      </a>
    </div>
  );
}

export default Header;