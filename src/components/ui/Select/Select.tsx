"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Check, ChevronDown } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { cn } from "@/utils";
import styles from "./Select.module.css";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  id?: string;
  label?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  variant?: "ghost" | "boxed";
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export function Select({
  id,
  label,
  value,
  options,
  onChange,
  variant = "boxed",
  placeholder = "Select",
  disabled = false,
  className,
  "aria-label": ariaLabel,
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const listboxId = `${selectId}-listbox`;
  const labelId = label ? `${selectId}-label` : undefined;

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const selected = options.find((option) => option.value === value);
  const enabledIndexes = options
    .map((option, index) => (option.disabled ? -1 : index))
    .filter((index) => index >= 0);

  const close = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  const openMenu = useCallback(() => {
    if (disabled) return;
    const selectedIndex = options.findIndex((option) => option.value === value);
    const fallback = enabledIndexes[0] ?? 0;
    setActiveIndex(selectedIndex >= 0 && !options[selectedIndex]?.disabled ? selectedIndex : fallback);
    setOpen(true);
  }, [disabled, enabledIndexes, options, value]);

  useClickOutside(rootRef, close, open);
  useEscapeKey(close, open);

  useEffect(() => {
    if (!open || activeIndex < 0) return;
    optionRefs.current[activeIndex]?.focus();
  }, [open, activeIndex]);

  const selectValue = (next: string) => {
    onChange(next);
    close();
    triggerRef.current?.focus();
  };

  const moveActive = (direction: 1 | -1) => {
    if (enabledIndexes.length === 0) return;
    const currentPos = enabledIndexes.indexOf(activeIndex);
    const nextPos =
      currentPos === -1
        ? direction === 1
          ? 0
          : enabledIndexes.length - 1
        : (currentPos + direction + enabledIndexes.length) % enabledIndexes.length;
    setActiveIndex(enabledIndexes[nextPos]!);
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
      case "Enter":
      case " ":
        event.preventDefault();
        if (!open) openMenu();
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        moveActive(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        moveActive(-1);
        break;
      case "Home":
        event.preventDefault();
        if (enabledIndexes[0] !== undefined) setActiveIndex(enabledIndexes[0]);
        break;
      case "End":
        event.preventDefault();
        if (enabledIndexes[enabledIndexes.length - 1] !== undefined) {
          setActiveIndex(enabledIndexes[enabledIndexes.length - 1]!);
        }
        break;
      case "Enter":
      case " ": {
        event.preventDefault();
        const option = options[activeIndex];
        if (option && !option.disabled) selectValue(option.value);
        break;
      }
      case "Tab":
        close();
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={rootRef}
      className={cn(styles.root, styles[variant], className)}
      data-open={open || undefined}
      data-disabled={disabled || undefined}
    >
      {label ? (
        <span id={labelId} className={styles.label}>
          {label}
        </span>
      ) : null}

      <button
        ref={triggerRef}
        id={selectId}
        type="button"
        className={styles.trigger}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        aria-labelledby={labelId}
        aria-label={ariaLabel ?? (!label ? placeholder : undefined)}
        onClick={() => (open ? close() : openMenu())}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className={styles.value}>{selected?.label ?? placeholder}</span>
        <ChevronDown
          className={styles.chevron}
          size={16}
          aria-hidden="true"
          strokeWidth={1.75}
        />
      </button>

      {open ? (
        <div
          id={listboxId}
          className={styles.menu}
          role="listbox"
          aria-labelledby={labelId}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === activeIndex;

            return (
              <button
                key={option.value}
                ref={(node) => {
                  optionRefs.current[index] = node;
                }}
                type="button"
                role="option"
                className={styles.option}
                disabled={option.disabled}
                aria-selected={isSelected}
                data-active={isActive || undefined}
                tabIndex={isActive ? 0 : -1}
                onMouseEnter={() => {
                  if (!option.disabled) setActiveIndex(index);
                }}
                onClick={() => {
                  if (!option.disabled) selectValue(option.value);
                }}
              >
                <span className={styles.optionLabel}>{option.label}</span>
                {isSelected ? (
                  <Check
                    className={styles.check}
                    size={16}
                    aria-hidden="true"
                    strokeWidth={2}
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
