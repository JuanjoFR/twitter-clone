import {
  HomeIcon as HomeIconSolid,
  HashtagIcon as HashtagIconSolid,
  BellIcon as BellIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  ListBulletIcon as ListBulletIconSolid,
  UserIcon as UserIconSolid,
  EllipsisHorizontalCircleIcon as EllipsisHorizontalCircleIconSolid
} from '@heroicons/react/24/solid'
import {
  HomeIcon as HomeIconOutline,
  HashtagIcon as HashtagIconOutline,
  BellIcon as BellIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
  BookmarkIcon as BookmarkIconOutline,
  ListBulletIcon as ListBulletIconOutline,
  UserIcon as UserIconOutline,
  EllipsisHorizontalCircleIcon as EllipsisHorizontalCircleIconOutline,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline'

type Icon = (props: React.SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined; }) => JSX.Element

interface SidebarLinkProps {
  id: String
  Icon: Icon
  ActiveIcon: Icon
  text: String
  active?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
interface SidebarProps {
  onLogoClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onHomeClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onExploreClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onNotificationsClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMessagesClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onBookmarksClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onListsClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onProfileClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMoreClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onTweetClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function SidebarLink({ id, active, text, Icon, ActiveIcon, onClick }: SidebarLinkProps) {
  return (
    <a
      className="flex items-center justify-center w-[52px] h-[52px] xl:w-fit xl:px-4 rounded-full text-[#0F1419] hover:bg-sidebar-hover"
      href="#home"
      onClick={onClick}
    >
      {active ? <ActiveIcon className="w-[24px] h-[24px] xl:mr-2"  color='#0F1419' /> : <Icon className="w-[24px] h-[24px] xl:mr-2"  color='#0F1419' />}
      <span className="hidden xl:inline">{text}</span>
    </a>
  )
}

function Sidebar({onLogoClick,onHomeClick,onExploreClick,onNotificationsClick,onMessagesClick,onBookmarksClick,onListsClick,onProfileClick,onMoreClick,onTweetClick}: SidebarProps) {
  return (
    <div className="hidden sm:flex flex-col w-16 xl:w-56 justify-between items-center xl:items-start min-h-screen overflow-x-hidden overflow-y-scroll">
      <div className="w-full">
        <div className="flex justify-center xl:justify-start mb-1">
          <a
            className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-main-hover"
            href="#home"
            onClick={onLogoClick}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[24px] h-[24px] fill-[#1d9bf0]"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
          </a>
        </div>
        <nav>
          <ol>
            <li className="flex justify-center xl:justify-start mb-1">
              <SidebarLink id="home" Icon={HomeIconOutline} ActiveIcon={HomeIconSolid} text="Home" active onClick={onHomeClick} />
            </li>
            <li className="flex justify-center xl:justify-start mb-1">
              <SidebarLink id="explore" Icon={HashtagIconOutline} ActiveIcon={HashtagIconSolid} text="Explore" onClick={onExploreClick} />
            </li>
            <li className="flex justify-center xl:justify-start mb-1">
              <SidebarLink id="notifications" Icon={BellIconOutline} ActiveIcon={BellIconSolid} text="Notifications" onClick={onNotificationsClick} />
            </li>
            <li className="flex justify-center xl:justify-start mb-1">
              <SidebarLink id="messages" Icon={EnvelopeIconOutline} ActiveIcon={EnvelopeIconSolid} text="Messages" onClick={onMessagesClick} />
            </li>
            <li className="flex justify-center xl:justify-start mb-1">
              <SidebarLink id="bookmarks" Icon={BookmarkIconOutline} ActiveIcon={BookmarkIconSolid} text="Bookmarks" onClick={onBookmarksClick} />
            </li>
            <li className="flex justify-center xl:justify-start mb-1">
              <SidebarLink id="lists" Icon={ListBulletIconOutline} ActiveIcon={ListBulletIconSolid} text="Lists" onClick={onListsClick} />
            </li>
            <li className="flex justify-center xl:justify-start mb-1">
              <SidebarLink id="profile" Icon={UserIconOutline} ActiveIcon={UserIconSolid} text="Profile" onClick={onProfileClick} />
            </li>
            <li className="flex justify-center xl:justify-start mb-1">
              <SidebarLink id="more" Icon={EllipsisHorizontalCircleIconOutline} ActiveIcon={EllipsisHorizontalCircleIconSolid} text="More" onClick={onMoreClick} />
            </li>
          </ol>
        </nav>
        <div className="flex justify-center xl:justify-start mb-1">
          <a
            className="w-[52px] h-[52px] xl:w-full xl:px-4 rounded-full flex items-center justify-center bg-[#1d9bf0] hover:bg-[#1A8CD8]"
            href="#tweet"
            onClick={onTweetClick}
          >
            <svg className="w-[24px] h-[24px] fill-white xl:hidden" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
            <span className="hidden xl:inline text-white">Tweet</span>
          </a>
        </div>
      </div>
      <div className="xl:w-full">
        <a
          className="w-16 h-16 xl:w-auto rounded-full hover:bg-sidebar-hover flex items-center justify-center"
          href="#profile"
          onClick={onProfileClick}
        >
          <div className="flex xl:px-4 items-center justify-center w-full">
            <img
              className="w-[40px] h-[40px] rounded-full xl:mr-2"
              alt="Profile"
              src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            />
            <div className="hidden xl:flex flex-col flex-1 mr-2">
              <p className="text-[#0F1419]">John Doe</p>
              <p className="text-[#536471]">@johndoe</p>
            </div>
            <EllipsisHorizontalIcon className="hidden xl:flex w-[24px] h-[24px] xl:mr-2" color='#0F1419' />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar