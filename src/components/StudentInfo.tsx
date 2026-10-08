import * as React from "react"
// import { toast } from "sonner"
// import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
// import {
//   Field,
//   FieldContent,
//   FieldDescription,
//   FieldLabel,
//   FieldTitle,
// } from "@/components/ui/field"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export function DrawerDemo() {
  // const [deliveryTime, setDeliveryTime] = React.useState("asap")
  // const isMobile = useIsMobile()
  // function handleClosed() {
    //   const selected = deliveryTimes.find((time) => time.value === deliveryTime)
    //   if (!selected) {
      //     return
      //   }
      //   setOpen(false)
      //   toast("Delivery time confirmed", {
        //     description: selected.label,
        //   })
        // }
      }
export function StudentInfo() {
  const [open, setOpen] = React.useState(false)
  return (
    // Use Drawer component to display student information
    <Drawer
      open={open}
      onOpenChange={setOpen}
      swipeDirection={"right"}
    >
      <DrawerTrigger render={<Button variant="default">Saranporn Putsadee</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>
            Student information
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 scroll-fade overflow-y-auto p-4">
          <div className="grid gap-y-4">
            <div className="grid gap-y-1">
              <img src="/meme.jpg" className="border"></img>
              <div className="font-medium text-foreground">
                Saranporn Putsadee
              </div>
              <p className="text-xs text-muted-foreground">นักศึกษามหาวิทยาลัยเชียงใหม่ คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</p>
            </div>
            <div className="grid gap-y-2">
              <div className="flex flex-row gap-2">
                <Badge>Hobbies</Badge>
                <p className="text-xs">เต้น, วาดรูป</p>
              </div>
              <div className="flex flex-row gap-2">
                <Badge>Email</Badge>
                <p className="text-xs">saranporn_putsadee@cmu.ac.th</p>
              </div>
              <div className="flex flex-row gap-2">
                <Badge>Social</Badge>
                <p className="text-xs">https://www.instagram.com/z.s._aran/</p>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <div>รหัสนักศึกษา: 680610718</div>
          <DrawerClose render={<Button variant="outline">Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

    /*<div className="flex-1 p-4">
      <button 
        className="border border-blue-300 bg-blue-500 rounded-md px-2 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={}
      >
        Saranporn Putsadee
      </button>
    </div>*/
  );
}
