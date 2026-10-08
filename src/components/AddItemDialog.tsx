import { useState } from "react";
import { useItemStore } from "@/store/dataStore";
import { type InventoryItem, categoryOptions } from "@/types/datatypes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export function AddItemDialog() {
  const addInventoryItem = useItemStore((state) => state.addInventoryItem);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] =
    useState<InventoryItem["category"]>("Electronics");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !quantity || !price) return;

    addInventoryItem(
      name, parseInt(quantity), 
      parseFloat(price), 
      category
    );

    /*addInventoryItem({
      name: name, 
      quantity: parseInt(quantity), 
      price: parseFloat(price), 
      category: category,
    }); */

    setName("");
    setQuantity("");
    setPrice("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={<Button className="bg-indigo-500 hover:bg-indigo-600" />}
      >
        + Add Product
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Product</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit} 
          className="space-y-5 mt-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Wireless Mouse"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              step="1"
              min="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="0"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="price">Unit Price (฿)</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as InventoryItem["category"])
              }
            >
              {categoryOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Save Product
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
