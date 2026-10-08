import { useItemStore } from '@/store/dataStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardTabs } from './DashboardTabs';

export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);
  const totalProducts = inventory.length;
  return (
    <div>
      <DashboardTabs/>
    </div>
  );
}
