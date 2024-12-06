interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-500 py-2 rounded text-white font-semibold hover:bg-green-600"
    >
      {label}
    </button>
  );
};

export default Button;