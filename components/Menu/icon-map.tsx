import {   LucideIcon , Smartphone } from "lucide-react"
import type { IconKey } from "@/types/menu"


export const iconMap: Record<IconKey, LucideIcon> = {
  nuevos: Smartphone,
  usados: Smartphone,
}

export function getIcon(key: IconKey): LucideIcon {
  return iconMap[key]
}
