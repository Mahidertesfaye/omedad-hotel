"use client";

import { AnimatePresence, motion } from "framer-motion";
import { OutlineButton } from "@/components/ui";
import { RoomCard } from "@/components/rooms/RoomCard";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { Room } from "@/types/rooms";
import styles from "./RoomGrid.module.css";

interface RoomGridProps {
  rooms: Room[];
  emptyMessage: string;
  onResetFilters?: () => void;
}

export function RoomGrid({
  rooms,
  emptyMessage,
  onResetFilters,
}: RoomGridProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (rooms.length === 0) {
    return (
      <div className={styles.empty} role="status">
        <h3 className={styles.emptyTitle}>No rooms match your selection</h3>
        <p className={styles.emptyText}>{emptyMessage}</p>
        {onResetFilters ? (
          <OutlineButton type="button" onClick={onResetFilters}>
            Clear filters
          </OutlineButton>
        ) : null}
      </div>
    );
  }

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={rooms.map((room) => room.id).join("-")}
        className={styles.grid}
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={prefersReducedMotion ? undefined : { opacity: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-label="Available rooms"
      >
        {rooms.map((room, index) => (
          <RoomCard key={room.id} room={room} index={index} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
