interface Props {
  className?: React.HTMLAttributes<HTMLHRElement>["className"]
}

function Separator({ className }: Props) {
  return (
    <hr className={`my-8 h-px bg-[#EFF3F4] border-0 ${className}`} />
  );
}

export default Separator;