import {   Wine, Croissant  } from "lucide-react"
import type { IconKey } from "@/types/menu"
import type { LucideIcon } from "lucide-react"


export const iconMap: Record<IconKey, LucideIcon> = {
  bebidasConAlcohol: Wine,
  panaderia: Croissant,
}

export function getIcon(key: IconKey): LucideIcon {
  return iconMap[key]
}
