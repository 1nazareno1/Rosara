import type { MenuCategory } from "@/types/menu"

export const nuevos: MenuCategory = {
  id: "nuevos",
  label: "Nuevos",
  icon: "nuevos",
  groups: [
    {
      id: "Nuevos",
      label: "Nuevos",
      items: [
        {
          id: 1,
          name: "iphone 16 pro ",
          description: "Sellado con garantia",
          price: "$450",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/v1771524732/apple-iphone-16-pro-smartphone_hvuoak.webp",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
      ],
    },
  ],
}
