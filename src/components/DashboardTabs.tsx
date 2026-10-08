import { useState } from "react";
import { useItemStore } from '@/store/dataStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { InventoryItem } from "@/types/datatypes";
import { Apple, Laptop, Pencil } from "lucide-react";


export function DashboardTabs() {

  const inventory = useItemStore((state) => state.inventory);
  const totalProducts = inventory.length;
  
  const totalQuantity = inventory.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = inventory.reduce((sum,item) => sum + (item.price*item.quantity), 0)

  type CategoryTotals = Record<string, number>;

  const totalsByCategory = inventory.reduce<CategoryTotals>((accumulator, currentItem) => {
    const { category, quantity } = currentItem;
    if (!accumulator[category]) {
      accumulator[category] = 0;
    }
    
    accumulator[category] += quantity;
    
    return accumulator;
  }, {});

  const calculateTotalByCategory = (items: InventoryItem[]): Record<string, number> => {
    return items.reduce((acc, item) => {
      const itemTotalValue = item.price * item.quantity;

      if (!acc[item.category]) {
        acc[item.category] = 0;
      }

      acc[item.category] += itemTotalValue;

      return acc;
    }, {} as Record<string, number>);
  };

  const totals = calculateTotalByCategory(inventory);

  const [mode, setMode] = useState<"overview" | "category">("overview");

  return (
    <Tabs
        value={mode}
        onValueChange={(v) => setMode(v as "overview" | "category")}
      >
        <TabsList>
          <TabsTrigger value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger value="category">
            By Category
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="pt-2">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Stock Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-red-500 font-bold">฿{totalValue}.00</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-blue-500 font-bold">{totalProducts}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Units in Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-green-700 font-bold">{totalQuantity}</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="category" className="pt-2">
          <div className="grid gap-2 md:grid-cols-6">
            <Card>
              <CardHeader>
                <Laptop size={20}></Laptop>
                <CardTitle className="text-sm font-medium">Electronics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">฿{totals.Electronics}.00</div>
                <div className="text-xs text-muted-foreground">{totalsByCategory.Electronics} units</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Pencil size={20}></Pencil>
                <CardTitle className="text-sm font-medium">Stationery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">฿{totals.Stationery}.00</div>
                <div className="text-xs text-muted-foreground">{totalsByCategory.Stationery} units</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="">
                <Apple size={20}></Apple>
                <CardTitle className="text-sm font-medium">Grocery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">฿{totals.Grocery}.00</div>
                <div className="text-xs text-muted-foreground">{totalsByCategory.Grocery} units</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Clothing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">฿{totals.Clothing}.00</div>
                <div className="text-xs text-muted-foreground">{totalsByCategory.Clothing} units</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">฿{totals.Tools}.00</div>
                <div className="text-xs text-muted-foreground">{totalsByCategory.Tools} units</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Other</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">฿{totals.Other}.00</div>
                <div className="text-xs text-muted-foreground">{totalsByCategory.Other} units</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
  );
}
