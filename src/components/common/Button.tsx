type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition font-medium"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
