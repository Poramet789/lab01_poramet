import React from 'react';
import img1 from './public/img/1.jpg';
import img2 from './public/img/2.jpg';
import img3 from './public/img/3.jpg';
import img4 from './public/img/4.jpg';
import img5 from './public/img/5.jpg';

const books = [
  {
    id: 1,
    Title: "จิตวิทยาสายดาร์ก",
    Cover: img1,
    Description: "Dr. Hiro เคยเป็นนักขายที่ล้มเหลว ขายอะไรก็ไม่มีใครซื้อ...",
    Category: "จิตวิทยา การพัฒนาตัวเอง , การพัฒนาตัวเอง how to",
    Author: "Dr.Hiro",
    Publishing: "วีเลิร์น (WeLearn) , DrHiro",
    Price: "237.50 บาท",
    Bestsellers: true,
    Suggestions: true,
    Link: "https://www.naiin.com/product/detail/577274"
  },
  {
    id: 2,
    Title: "Why Has Nobody Told Me This Before? วิชาสำคัญที่คุณควรรู้...",
    Cover: img2,
    Description: "มองโลกผ่านมุมจิตวิทยาเพื่อตั้งรับและก้าวผ่านปัญหา...",
    Category: "จิตวิทยา การพัฒนาตัวเอง , การพัฒนาตัวเอง how to",
    Author: "Dr.Julie Smith",
    Publishing: "วีเลิร์น (WeLearn)",
    Price: "308.75 บาท",
    Bestsellers: true,
    Suggestions: true,
    Link: "https://www.naiin.com/product/detail/600920"
  },
  {
    id: 3,
    Title: "บ้านวิกล เล่ม 1 (Mg)",
    Cover: img3,
    Description: "“ตอนเห็นผังบ้านครั้งแรก ผมคิดว่าบ้านหลังนี้แปลกมาก”...",
    Category: "การ์ตูน , การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย",
    Author: "อุเก็ตสึ",
    Publishing: "PHOENIX-ฟีนิกซ์",
    Price: "166.25 บาท",
    Bestsellers: false,
    Suggestions: true,
    Link: "https://www.naiin.com/product/detail/617112"
  },
  {
    id: 4,
    Title: "ใช้คลื่นพลังบวกดึงดูดพลังสุข",
    Cover: img4,
    Description: "ใช้คลื่นพลังบวกดึงดูดพลังสุขความลับของการบรรลุในสิ่งยิ่งใหญ่...",
    Category: "จิตวิทยา การพัฒนาตัวเอง , การพัฒนาตัวเอง how to",
    Author: "เว็กซ์ คิงส์",
    Publishing: "อมรินทร์ How to",
    Price: "196.00 บาท",
    Bestsellers: true,
    Suggestions: false,
    Link: "https://www.naiin.com/product/detail/533411"
  },
  {
    id: 5,
    Title: "บ้านวิกลคนประหลาด",
    Cover: img5,
    Description: "ความลับชวนขนลุกของบ้านธรรมดาหลังหนึ่ง...",
    Category: "นิยายแปล,นิยายแปล",
    Author: "อุเก็ตสึ",
    Publishing: "Bibli (บิบลิ)",
    Price: "251.75 บาท",
    Bestsellers: false,
    Suggestions: true,
    Link: "https://www.naiin.com/product/detail/561084"
  }
];

const BookList = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Book List</h1>
      <div className="w-full max-w-6xl">
        <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 text-left">ID</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Title</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Author</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Category</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Publishing</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Price</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Description</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Cover</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Bestseller</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Suggestion</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {books.map(book => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">{book.id}</td>
                <td className="px-6 py-4 border-b border-gray-300">{book.Title}</td>
                <td className="px-6 py-4 border-b border-gray-300">{book.Author}</td>
                <td className="px-6 py-4 border-b border-gray-300">{book.Category}</td>
                <td className="px-6 py-4 border-b border-gray-300">{book.Publishing}</td>
                <td className="px-6 py-4 border-b border-gray-300">{book.Price}</td>
                <td className="px-6 py-4 border-b border-gray-300">{book.Description}</td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <img src={book.Cover} alt={book.Title} className="w-24 h-auto rounded" />
                </td>
                <td className={`px-6 py-4 border-b border-gray-300 text-center ${book.Bestsellers ? 'text-green-500 font-bold' : 'text-red-500'}`}>
                  {book.Bestsellers ? '✔️ ขายดี' : '❌ ขายไม่ดี'}
                </td>
                <td className={`px-6 py-4 border-b border-gray-300 text-center ${book.Suggestions ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
                  {book.Suggestions ? '✔️ แนะนำ' : '❌ ไม่แนะนำ'}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-center">
                  <a href={book.Link} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      View
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;
