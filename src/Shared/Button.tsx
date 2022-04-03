import "../styles/Shared.scss";

const Button: React.FC<{
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = (props) => {
  const { text, onClick } = props;

  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};

export default Button;
