"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FontSizeControlProps {
  currentSize: number | null;
  onSetSize: (size: string) => void;
}

const MIN_SIZE = 8;
const MAX_SIZE = 72;
const STEP = 1;

export function FontSizeControl({
  currentSize,
  onSetSize,
}: FontSizeControlProps) {
  const [inputValue, setInputValue] = useState<string>(
    currentSize ? String(currentSize) : ""
  );

  // Keep input in sync when selection changes
  const displayValue = currentSize ? String(currentSize) : "";

  function applySize(size: number) {
    const clamped = Math.max(MIN_SIZE, Math.min(MAX_SIZE, size));
    onSetSize(`${clamped}px`);
    setInputValue(String(clamped));
  }

  function handleDecrement() {
    const base = currentSize ?? 14;
    applySize(base - STEP);
  }

  function handleIncrement() {
    const base = currentSize ?? 14;
    applySize(base + STEP);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleInputCommit() {
    const parsed = parseInt(inputValue, 10);
    if (Number.isNaN(parsed)) {
      setInputValue(displayValue);
      return;
    }
    applySize(parsed);
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleInputCommit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleDecrement();
    }
  }

  return (
    <div className="flex items-center gap-0.5">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={handleDecrement}
        aria-label="Decrease font size"
        title="Decrease font size"
        className="inline-flex h-8 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <input
        type="number"
        min={MIN_SIZE}
        max={MAX_SIZE}
        value={inputValue || displayValue}
        placeholder="14"
        data-allow-toolbar-focus="true"
        onChange={handleInputChange}
        onBlur={handleInputCommit}
        onKeyDown={handleInputKeyDown}
        className={cn(
          "h-8 w-12 rounded-md border border-input bg-background px-1.5 text-center text-xs text-foreground",
          "focus:outline-none focus:ring-1 focus:ring-ring"
        )}
      />
      <span className="text-xs text-muted-foreground">px</span>
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={handleIncrement}
        aria-label="Increase font size"
        title="Increase font size"
        className="inline-flex h-8 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
