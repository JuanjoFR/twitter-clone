type IntrinsicButtonPropps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "className"
>

interface Props extends IntrinsicButtonPropps {
  color?: "primary" | "secondary"
  size?: "sm" | "md"
  label: string
}

const colorStyle = {
  primary: "bg-[#1D9BF0] hover:bg-[#1A8CD8]",
  secondary: "bg-[#0F1419] hover:bg-[#272C30]"
}
const sizeStyle = {
  sm: "text-sm",
  md: "text-base"
}

function Button({
  color = "primary",
  size = "md",
  label,
  disabled,
  ...rest
}: Props) {
  return (
    <button
      className={`
        rounded-full px-4 py-2 font-bold text-white
        ${colorStyle[color]}
        ${sizeStyle[size]}
        ${disabled ? "opacity-50" : ""}
      `}
      {...rest}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
