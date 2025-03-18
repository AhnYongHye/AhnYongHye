interface ButtonProps {
  name: string;
}

const Button = ({ name }: ButtonProps) => {
  return <div>{name}</div>;
};

export default Button;
