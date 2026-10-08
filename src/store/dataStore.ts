import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  inventory as initialInventory,
} from "@/lib/mock-data";
import type { InventoryItem } from "@/types/datatypes";

type ItemState = {
  inventory: InventoryItem[];
  addInventoryItem: (
    name: string,
    quantity: number,
    price: number,
    category: InventoryItem["category"],
  ) => void;
  deleteInventoryItem: (id: string) => void;
}


export const useItemStore = create<ItemState>()(
  persist(
    (set) => ({
      inventory: initialInventory,

      addInventoryItem: (name, quantity, price, category) =>
        set((state) => ({
          inventory: [
            {
              id: Date.now().toString(),
              name,
              quantity,
              price,
              category,
              date: new Date().toISOString().split("T")[0],
            },
            ...state.inventory,
          ],
        })),
      
      deleteInventoryItem: (id) =>
        set((state) => ({
          inventory: state.inventory.filter((i) => i.id !== id),
        })),

    }),
    {
      // Unique key name for the localStorage entry
      name: "inv-680610718",
      partialize: (state) => ({
        inventory: state.inventory,
      }),
    },
  ),
);
