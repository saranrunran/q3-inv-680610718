import { useState } from "react";
import { useItemStore } from '@/store/dataStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export function DashboardTabs() {

  const inventory = useItemStore((state) => state.inventory);
  const totalProducts = inventory.length;
  
  const totalQuantity = inventory.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = inventory.reduce((sum,item) => sum + (item.price*item.quantity), 0)

  // type CategoryTotals = Record<string, number>;

  // const totalElec = inventory.reduce((acc, cerrItem) => {
  //   const { category, quantity } = currItem;
  //   if (!accumulator[category]) {
  //     accumulator[category] = 0;
  //   }
    
  //   accumulator[category] += quantity;
  // }, {})

  // const totalsByCategory = inventory.reduce<CategoryTotals>((accumulator, currentItem) => {
  //   const { category, quantity } = currentItem;
  //   if (!accumulator[category]) {
  //     accumulator[category] = 0;
  //   }
    
  //   accumulator[category] += quantity;
    
  //   return accumulator;
  // }, {});

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
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Electronics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">฿...</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Stationery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold"></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Grocery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">...</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Clothing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">...</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="ttext-xl font-bold">...</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Other</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">...</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
  );
}
