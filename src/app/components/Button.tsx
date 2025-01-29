type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ label, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-none bg-black text-white border-4 border-white font-bold uppercase tracking-widest hover:border-yellow-500 transition-all duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
