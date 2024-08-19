import type { MetaFunction } from "@remix-run/node";
import ListBook from "./Books"; // ตรวจสอบให้แน่ใจว่าไฟล์นี้ถูก import ให้ถูกต้อง

export const meta: MetaFunction = () => {
  return [
    { title: "Book List" }, // เปลี่ยน title ตามต้องการ
    { name: "description", content: "List of books displayed in a table." },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <ListBook />
    </div>
  );
}