interface Props {
  sidebar: React.ReactElement;
  content: React.ReactElement;
  widgets: React.ReactElement;
  title: String
  onProfileClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onTitleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onSettingsClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function Main({ sidebar, content, widgets, title, onProfileClick, onTitleClick, onSettingsClick }: Props) {
  return (
    <div className="min-h-screen">
      <div className="flex mx-auto max-w-7xl">
        {sidebar}
        <div className="flex-1 sm:ml-16 xl:ml-64 min-h-screen sm:border-x border-[#EFF3F4]">
          {content}
        </div>
        <div className="hidden lg:flex w-72 xl:w-96 min-h-screen px-5">
          {widgets}
        </div>
      </div>
    </div>
  )
}

export default Main