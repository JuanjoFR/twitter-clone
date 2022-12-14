interface Props {
  disabled?: boolean
  label: String
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Button({ disabled, label, onClick }: Props) {
  return (
    <button
      disabled={disabled}
      className="bg-[#1d9bf0] text-white opacity-50 font-bold py-2 px-6 rounded-full"
      onClick={onClick}
    >{label}</button>
  );
}

export default Button;