import { Card, OutlineButton } from "@/components/ui";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { FeaturedRoom } from "@/types/rooms";
import styles from "./FeaturedRoomCard.module.css";

interface FeaturedRoomCardProps {
  room: FeaturedRoom;
}

function formatPrice(price: FeaturedRoom["price"]) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);

  return `${formatted} / ${price.period}`;
}

export function FeaturedRoomCard({ room }: FeaturedRoomCardProps) {
  return (
    <Card variant="elevated" padding="none" className={styles.card}>
      <figure className={styles.media}>
        <OptimizedImage
          src={room.image.src}
          alt={room.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
      </figure>

      <div className={styles.body}>
        <h3 className={styles.title}>{room.title}</h3>

        <p className={styles.description}>{room.description}</p>

        <ul className={styles.amenities} aria-label={`${room.title} amenities`}>
          {room.amenities.map((amenity) => (
            <li key={amenity} className={styles.amenity}>
              {amenity}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <p className={styles.price}>
            <span className={styles.priceLabel}>From</span>
            <span className={styles.priceValue}>{formatPrice(room.price)}</span>
          </p>

          <OutlineButton href={room.href} size="sm">
            Explore More
          </OutlineButton>
        </div>
      </div>
    </Card>
  );
}
