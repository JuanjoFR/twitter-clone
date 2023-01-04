interface Props {
  sidebar: React.ReactElement
  content: React.ReactElement
  widgets: React.ReactElement
}

function Main({ sidebar, content, widgets }: Props) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-7xl">
        {sidebar}
        <div className="min-h-screen flex-1 border-[#EFF3F4] sm:ml-16 sm:border-x xl:ml-64">
          {content}
        </div>
        <div className="hidden min-h-screen w-72 px-5 lg:flex xl:w-96">
          {widgets}
        </div>
      </div>
    </main>
  )
}

export default Main
