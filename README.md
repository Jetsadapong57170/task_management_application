# 📦 Task Management Application

ระบบจัดการงาน (Task Management) สำหรับสร้าง แก้ไข
และติดตามงานได้อย่างง่ายดาย

------------------------------------------------------------------------

## 🚀 Getting Started

### 🛠️ Prerequisites

ก่อนเริ่มต้น ตรวจสอบให้แน่ใจว่าคุณติดตั้ง:

-   Node.js เวอร์ชัน `24.15.0`\
-   npm (มาพร้อม Node.js)

------------------------------------------------------------------------

### 📥 Installation

1.  Clone โปรเจกต์จาก GitHub

``` bash
git clone https://github.com/Jetsadapong57170/task_management_application.git
```

2.  เข้าไปที่โฟลเดอร์โปรเจกต์

``` bash
cd task_management_application
```

3.  ติดตั้ง dependencies

``` bash
npm install
```

------------------------------------------------------------------------

### ▶️ Run Project

เริ่มต้นโปรเจกต์ด้วยคำสั่ง:

``` bash
npm run dev
```

จากนั้นเปิด browser ไปที่: http://localhost:5173

------------------------------------------------------------------------

## ✨ Features

-   ➕ เพิ่มรายการงาน (Add Task)
-   ✏️ แก้ไขรายการงาน (Update Task)
-   ❌ ลบรายการงาน (Delete Task)
-   🔍 กรองและจัดเรียงงาน (Filter & Sort)
-   💾 บันทึกข้อมูลลง Local Storage

------------------------------------------------------------------------

## 🧱 Tech Stack

-   ⚡ Vue 3 (Composition API)
-   🗂️ Pinia (State Management)
-   🎨 Tailwind CSS
-   💾 LocalStorage (Persisted State)

------------------------------------------------------------------------

## 🧠 Design Decisions

-   ใช้ Pinia เพื่อจัดการ state กลางของแอป → ทำให้ scale ได้ง่าย
-   ใช้ LocalStorage เพื่อเก็บข้อมูล
-   ใช้ Composition API → code flexible และ reusable มากขึ้น

------------------------------------------------------------------------
