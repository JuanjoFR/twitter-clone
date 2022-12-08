import Separator from "../atoms/separator"
import Header from "../organisms/header"
import Sidebar from "../organisms/sidebar"
import Timeline from "../organisms/timeline"

interface Props {
  title: String
  onProfileClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onTitleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onSettingsClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function Main({ title, onProfileClick, onTitleClick, onSettingsClick }: Props) {
  return (
    <div className="min-h-screen bg-sky-200">
      <div className="bg-violet-300 flex sm:bg-violet-400 mx-auto max-w-7xl">
        <div className="fixed xl:pl-4">
          <Sidebar />
        </div>
        <div className="bg-emerald-200 flex-1 sm:ml-16 xl:ml-64 min-h-screen sm:border-x-2 border-lime-900 mt-3">
          <div className="text-xl mx-4">
            <Header title={title} onProfileClick={onProfileClick} onTitleClick={onTitleClick} onSettingsClick={onSettingsClick} />
          </div>
          <Separator />
          <Timeline />
        </div>
        <div className="bg-blue-300 hidden lg:flex w-72 xl:w-96 min-h-screen">
          <p>Widgets</p>
        </div>
      </div>
    </div>
  )
}

export default Main