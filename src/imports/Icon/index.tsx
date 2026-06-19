import svgPaths from "./svg-kmh4u81n7d";

function ReloadIcon() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Reload Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Reload Icon">
          <path d={svgPaths.pe875600} fill="var(--fill-0, #434343)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

export default function Icon() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-start p-[11px] relative rounded-[19.5px] size-full" data-name="icon">
      <ReloadIcon />
    </div>
  );
}