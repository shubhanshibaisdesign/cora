import { useEffect, useRef, useState, useCallback } from "react";

type Props = {
  items: (string | number)[];
  value: string | number;
  onChange: (value: string | number) => void;
  itemHeight?: number;
  visibleCount?: number;
  width?: number | string;
  ariaLabel?: string;
};

export default function WheelPicker({
  items,
  value,
  onChange,
  itemHeight = 44,
  visibleCount = 5,
  width = 96,
  ariaLabel,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const padding = Math.floor(visibleCount / 2) * itemHeight;
  const containerH = visibleCount * itemHeight;

  const [centerIndex, setCenterIndex] = useState(() => {
    const i = items.findIndex((v) => v === value);
    return i < 0 ? 0 : i;
  });
  const programmaticScrollRef = useRef(false);
  const snapTimerRef = useRef<number | null>(null);
  const lastReportedRef = useRef<number>(centerIndex);

  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior = "smooth") => {
      const el = containerRef.current;
      if (!el) return;
      programmaticScrollRef.current = true;
      el.scrollTo({ top: i * itemHeight, behavior });
      window.setTimeout(() => {
        programmaticScrollRef.current = false;
      }, behavior === "smooth" ? 400 : 0);
    },
    [itemHeight],
  );

  useEffect(() => {
    const i = items.findIndex((v) => v === value);
    if (i < 0) return;
    if (i === lastReportedRef.current) return;
    lastReportedRef.current = i;
    setCenterIndex(i);
    scrollToIndex(i, "auto");
  }, [value, items, scrollToIndex]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const initial = items.findIndex((v) => v === value);
    el.scrollTop = (initial < 0 ? 0 : initial) * itemHeight;
  }, []);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const raw = el.scrollTop / itemHeight;
    const rounded = Math.max(0, Math.min(items.length - 1, Math.round(raw)));
    setCenterIndex(rounded);

    if (snapTimerRef.current != null) window.clearTimeout(snapTimerRef.current);
    snapTimerRef.current = window.setTimeout(() => {
      if (programmaticScrollRef.current) return;
      const el2 = containerRef.current;
      if (!el2) return;
      const idx = Math.max(
        0,
        Math.min(items.length - 1, Math.round(el2.scrollTop / itemHeight)),
      );
      const target = idx * itemHeight;
      if (Math.abs(el2.scrollTop - target) > 0.5) {
        programmaticScrollRef.current = true;
        el2.scrollTo({ top: target, behavior: "smooth" });
        window.setTimeout(() => {
          programmaticScrollRef.current = false;
        }, 300);
      }
      if (idx !== lastReportedRef.current) {
        lastReportedRef.current = idx;
        onChange(items[idx]);
      }
    }, 90);
  }, [itemHeight, items, onChange]);

  const draggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    draggingRef.current = true;
    dragStartYRef.current = e.clientY;
    dragStartScrollRef.current = el.scrollTop;
    (e.target as Element).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const el = containerRef.current;
    if (!el) return;
    const dy = e.clientY - dragStartYRef.current;
    el.scrollTop = dragStartScrollRef.current - dy;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const onItemClick = (i: number) => {
    scrollToIndex(i);
    lastReportedRef.current = i;
    onChange(items[i]);
  };

  return (
    <div
      className="relative select-none"
      style={{ width, height: containerH }}
      aria-label={ariaLabel}
    >
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="wheel-picker-scroll absolute inset-0 overflow-y-scroll touch-none"
        style={{
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      >
        <div style={{ height: padding }} />
        {items.map((item, i) => {
          const distance = Math.abs(i - centerIndex);
          const scale = Math.max(0.78, 1 - distance * 0.08);
          const opacity = Math.max(0.25, 1 - distance * 0.28);
          const isCenter = i === centerIndex;
          return (
            <div
              key={`${item}-${i}`}
              onClick={() => onItemClick(i)}
              className="flex items-center justify-center cursor-pointer"
              style={{
                height: itemHeight,
                scrollSnapAlign: "center",
                scrollSnapStop: "always",
              }}
            >
              <span
                className="font-['Urbanist',sans-serif] font-medium text-[#434343] transition-[transform,opacity] duration-150 ease-out"
                style={{
                  fontSize: 16,
                  transform: `scale(${scale})`,
                  opacity,
                  fontWeight: 500,
                }}
              >
                {item}
              </span>
            </div>
          );
        })}
        <div style={{ height: padding }} />
      </div>
    </div>
  );
}
