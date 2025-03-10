import { Button } from "../atoms/Button";

type CardProps = {
  title: string;
  description: string;
  onAction: () => void;
};

export const Card = ({ title, description, onAction }: CardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button label="Action" onClick={onAction} />
    </div>
  );
};
