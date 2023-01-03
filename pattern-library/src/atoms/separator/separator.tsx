interface Props {
  className?: React.HTMLAttributes<HTMLHRElement>["className"]
}

function Separator({ className }: Props) {
  return <hr className={`my-8 h-px border-0 bg-[#EFF3F4] ${className}`} />
}

export default Separator
