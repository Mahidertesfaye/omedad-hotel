"use client";

import { useCallback, useState } from "react";
import { useBodyScrollLock } from "./useBodyScrollLock";
import { useEscapeKey } from "./useEscapeKey";

interface UseMobileMenuReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useMobileMenu(): UseMobileMenuReturn {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useBodyScrollLock(isOpen);
  useEscapeKey(close, isOpen);

  return { isOpen, open, close, toggle };
}
