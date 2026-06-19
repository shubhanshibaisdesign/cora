type FrameProps = {
  className?: string;
  property1?: "Default" | "Variant2";
  label?: string;
  onClick?: () => void;
};

export default function Frame({ className, property1 = "Default", label = "Male", onClick }: FrameProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <button
      onClick={onClick}
      className={className || `relative rounded-[41px] w-[353px] ${isVariant2 ? "bg-[rgba(221,105,44,0.2)]" : ""}`}
    >
      <div className="content-stretch flex items-center overflow-clip px-[25px] py-[20px] relative rounded-[inherit] size-full">
        <div className={`[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-["Urbanist:Regular",sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-left whitespace-nowrap ${isVariant2 ? "text-[#434343]" : "text-[#434343]"}`}>
          <p className="leading-[21.8px]">{label}</p>
        </div>
      </div>
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[41px] ${isVariant2 ? "border-[#dd692c]" : "border-[rgba(217,217,217,0.4)]"}`} />
    </button>
  );
}
