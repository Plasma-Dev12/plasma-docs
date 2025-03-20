import Spacer from "./Spacer";

interface ListProps {
  children: React.ReactNode;
  type: "disc" | "decimal" | "topics";
  spacer?: boolean;
  compact?: boolean;
}

export default function List({
  children,
  type,
  spacer = true,
  compact,
}: ListProps) {
  return spacer ? (
    <Spacer>
      <ul
        className={`list-inside flex flex-col [&_ul]:list-[revert] ${
          type === "topics"
            ? "list-none"
            : type === "disc"
            ? "list-disc"
            : "list-decimal"
        } ${compact ? "gap-2" : "gap-4"}`}
      >
        {children}
      </ul>
    </Spacer>
  ) : (
    <ul
      className={`list-inside flex flex-col [&_ul]:list-[revert] ${
        type === "topics"
          ? "list-none"
          : type === "disc"
          ? "list-disc"
          : "list-decimal"
      } ${compact ? "gap-2" : "gap-4"}`}
    >
      {children}
    </ul>
  );
}
