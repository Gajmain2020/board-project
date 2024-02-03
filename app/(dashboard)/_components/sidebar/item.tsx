"use client";
import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Hint } from "@/components/hint";
import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export function Item({ id, name, imageUrl }: ItemProps) {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!isActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} align="start" sideOffset={18} side="right">
        <Image
          src={imageUrl}
          alt={name}
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
          width={120}
          height={120}
        />
      </Hint>
    </div>
  );
}
