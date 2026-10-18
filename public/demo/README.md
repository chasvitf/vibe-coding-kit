# กลิ่นมายด์ · เว็บร้านเทียนหอม (ร้านสมมติ)

เว็บหน้าเดียวที่ทำในคลาส Vibe Coding ด้วย HTML, CSS และ JavaScript ธรรมดา

- `index.html` โครงหน้าเว็บ: หัวเว็บ สินค้า เกี่ยวกับเรา ติดต่อ
- `style.css` สีและการจัดหน้า เริ่มจากจอมือถือก่อน
- `script.js` ตะกร้าสินค้า และปุ่มส่งรายการเข้า LINE

## เปิดดูบนเครื่อง

ดับเบิลคลิก `index.html` ได้เลย หรือเปิดผ่านเซิร์ฟเวอร์จำลอง:

```bash
npx serve .
```

## อัปขึ้น GitHub

```bash
git init
git add .
git commit -m "เว็บร้านกลิ่นมายด์"
git branch -M main
git remote add origin https://github.com/<ชื่อผู้ใช้>/klinmind.git   # สร้าง repo เปล่าบน github.com ก่อน
git push -u origin main
```

## ขึ้นเว็บด้วย Vercel

```bash
npx vercel          # ครั้งแรกจะให้ล็อกอิน แล้วถามชื่อโปรเจกต์ กด Enter ตามค่าเริ่มต้นได้
npx vercel --prod   # ขึ้นเป็นเว็บจริง ได้ลิงก์ .vercel.app
```

หรือไปที่ vercel.com › Add New › Project › เลือก repo จาก GitHub ทุกครั้งที่ push เว็บจะอัปเดตเอง
