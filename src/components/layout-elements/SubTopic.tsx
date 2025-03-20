import Paragraph from "./Paragraph";

interface TopicProps {
  children: React.ReactNode;
}

export default function SubTopic({ children }: TopicProps) {
  return (
    <Paragraph indent={false}>
      <h3 className="font-bold text-2xl">{children}</h3>
    </Paragraph>
  );
}
