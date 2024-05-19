type Props = {
  children: React.ReactNode;
};

export default function Heading({ children }: Props) {
  return (
    <h2 className="text-center text-primary text-3xl font-semibold mb-5">
      {children}
    </h2>
  );
}
