# Quiz #3 - React

ชื่อ-สกุล : ศรัณย์พร ผุสดี

รหัสนักศึกษา : 680610718

หมายเหตุ: นศ. ไม่ต้อง deploy app บน vercel

---

ใน Quiz #3 นี้จะเป็นการทดสอบความเข้าใจในเนื้อหาต่อไปนี้
- `React component` : การจัดสร้างและการจัดวาง component
- `Component library` : การใช้ shadcn/ui component ร่วมกับ React app
- `Global state management` : การใช้ Zustand ในการสร้างและจัดการ Global state ของ React app

สิ่งที่ไม่ต้องทำ ได้แก่
- `API` : App นี้ไม่มีการเรียกใช้งาน API ใดๆ
- `Database` : การเก็บข้อมูลหลักของ App นี้จะอาศัย Global state และ LocalStorage ของบราวเซอร์

---

ติดตั้งและรัน web app

```bash
pnpm install
pnpm run dev
```
---

คำอธิบายเกี่ยวกับไฟล์ในโปรเจค

- `src/main.tsx` - ไฟล์เริ่มต้นการทำงานของ web app ซึ่งจะไปเรียกใช้งาน App component ต่ออีกที
- `src/types/datatypes.ts` - เก็บข้อมูล interface และ select options สำหรับการเพิ่มข้อมูล (แก้ไขและเพิ่มเติมข้อมูลเองได้)
- `src/store/dataStore.ts` - เก็บข้อมูล global state สำหรับ app (แก้ไขและเพิ่มเติมข้อมูลเองได้)
- `src/components` - เก็บ shadcn/ui component ที่ถูกติดตั้ง และ custom component อื่นๆที่ต้องพัฒนาเพิ่มเติม

---

`shadcn/ui` component ที่น่าจะได้มีการใช้งานได้แก่

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `Drawer`
- `Input`
- `Label`
- `Select`
- `Table`
- `Tabs`
- Icon component จาก `lucide-react`

นศ. สามารถเลือกใช้ 
ดูตัวอย่างการใช้งานได้ที่ [shadcn/ui component](https://ui.shadcn.com/docs/components)