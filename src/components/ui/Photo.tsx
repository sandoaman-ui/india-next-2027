import Image from "next/image";

import { images, type ImageKey } from "@/content/images";
import { cn } from "@/lib/cn";

type Props = {
  name: ImageKey;
  /** Overrides the registry alt when the photo is purely decorative in context. */
  alt?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  preload?: boolean;
  /** Fills the parent (which must be positioned). */
  fill?: boolean;
};

/**
 * Every photograph on the site goes through here, so intrinsic dimensions and
 * blur placeholders always travel with the file.
 */
export function Photo({
  name,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  preload = false,
  fill = true,
}: Props) {
  const img = images[name];

  if (fill) {
    return (
      <Image
        src={img.src}
        alt={alt ?? img.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        blurDataURL={img.blurDataURL}
        preload={preload}
        className={cn("object-cover", className, imgClassName)}
      />
    );
  }

  return (
    <Image
      src={img.src}
      alt={alt ?? img.alt}
      width={img.width}
      height={img.height}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={img.blurDataURL}
      preload={preload}
      className={cn(className, imgClassName)}
    />
  );
}
