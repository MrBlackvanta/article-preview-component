"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ShareIcon } from "@/components/icons";
import { cn } from "@/lib";
import ShareLinks from "./share-links";

export default function SharePanel() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      close();
      buttonRef.current?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (buttonRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Share"
        className={cn(
          "relative z-10 ml-auto grid size-8 shrink-0 place-items-center rounded-full bg-page text-icon transition-colors hover:bg-icon hover:text-white motion-reduce:transition-none",
          { "bg-icon text-white": open },
        )}
      >
        <ShareIcon className="h-3.25 w-3.75" />
      </button>

      <div className="pointer-events-none absolute -top-4.5 -right-6 -bottom-4.5 -left-6 min-[375px]:-right-7.5 min-[375px]:-left-7.5 md:top-auto md:right-4 md:bottom-full md:left-auto md:mb-6.5 md:w-62 md:translate-x-1/2">
        <div
          ref={panelRef}
          id={panelId}
          data-closed={!open || undefined}
          inert={!open}
          className="pointer-events-auto relative v-share-panel flex h-full items-center gap-6 rounded-b-card bg-ink px-6 min-[375px]:px-7.5 md:h-auto md:rounded-card md:px-9.5 md:py-4.5"
        >
          <ShareLinks />

          <span
            aria-hidden="true"
            className="absolute top-full left-1/2 hidden size-0 -translate-x-1/2 border-x-[0.75rem] border-t-[0.75rem] border-x-transparent border-t-ink md:block"
          />
        </div>
      </div>
    </>
  );
}
