type Props = {
  title?: string;
};

const Greetings = ({ title }: Props) => {
  return (
    <div className="d-flex flex-column gap-4">
      <div>Hello {title ?? "guest"}!</div>
      <div>Welcome to website</div>
    </div>
  );
};

export default Greetings;
