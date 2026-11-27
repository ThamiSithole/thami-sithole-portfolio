import Image from "next/image";
import { getStackIcon } from "@/lib/stack-icons";

type Props = {
  label: string;
  size?: 14 | 18;
};

export default function StackIcon({ label, size = 14 }: Props) {
  const icon = getStackIcon(label);

  if (!icon) {
    return null;
  }

  const className = size === 18 ? "size-[18px] shrink-0" : "size-3.5 shrink-0";

  if (icon.kind === "brand") {
    return (
      <Image
        src={icon.src}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        unoptimized
        className={className}
      />
    );
  }

  const { Icon } = icon;

  return <Icon aria-hidden="true" focusable="false" className={className} />;
}
