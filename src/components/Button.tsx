interface ButtonProps {
  // text: string;
  variant: "primary" | "secondary" | "gradient";
  outline?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  // text,
  variant,
  outline,
  disabled,
  children,
}: ButtonProps) {
  const style = !outline
    ? variant === "primary"
      ? "border-t-[#28225F] border-b-[#8C93FB] font-bold text-2xl bg-[#28225F] "
      : variant === "secondary"
      ? "border-t-secondary_color border-b-highlight_color bg-secondary_color text-brand_white "
      : variant === "gradient"
      ? "border-b-highlight_color bg-brand_gradient text-brand_white "
      : " "
    : variant === "primary"
    ? "border-primary_color bg-none text-primary_color font-bold "
    : variant === "secondary"
    ? "border-secondary_color bg-none text-secondary-color font-bold "
    : variant === "gradient"
    ? "bg-brand_gradient font-bold "
    : "";

  const border = outline
    ? (variant === "gradient" ? "" : "border-[3px] ") +
      " mt-[3px] hover:mt-0 hover:mb-[3px] hover:brightness-95 hover:backdrop-brightness-95 active:mb-0 active:mt-[3px] "
    : (variant === "gradient"
        ? "border-t-0"
        : "border-t-4 hover:border-t-[3px]") +
      " border-b-2 hover:border-b-[3px] active:mt-[3px] active:border-b-0 ";

  const offline = disabled ? "opacity-50 cursor-not-allowed " : " ";

  const innerBackground =
    variant === "gradient" && outline === true
      ? "bg-background_color m-[1.5px] rounded-lg"
      : "";
  const innerGradient =
    variant === "gradient" && outline === true
      ? "bg-brand_gradient bg-clip-text text-transparent"
      : "";

  return (
    <button
      className={
        "teste w-fit h-auto rounded-lg hover:brightness-95 cursor-pointer " +
        style +
        offline +
        border
      }
    >
      <div className={"md-text-regular px-8 py-2 pb-3 " + innerBackground}>
        <div className={innerGradient}>{children}</div>
      </div>
    </button>
  );
}
