import { variantProps, VariantPropsOf } from "classname-variants/react"

const buttonProps = variantProps({
  base: "text-white font-bold px-4 py-2 rounded-full",
  variants: {
    color: {
      primary: "bg-[#1D9BF0] hover:bg-[#1A8CD8]",
      secondary: "bg-[#0F1419] hover:bg-[#272C30]"
    },
    size: {
      sm: "text-sm",
      md: "text-base"
    },
    disabled: {
      true: "opacity-50"
    }
  },
  defaultVariants: {
    color: "primary",
    size: "md"
  }
})

type IntrinsicButtonPropps = JSX.IntrinsicElements["button"] &
  VariantPropsOf<typeof buttonProps>

interface Props extends IntrinsicButtonPropps {
  label: string
}

function Button({ label, ...rest }: Props) {
  return <button {...buttonProps(rest)}>{label}</button>
}

export default Button
