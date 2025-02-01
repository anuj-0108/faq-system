
/*
============================
        Frontend (faq-frontend)
============================
*/

# FAQ Frontend

This is the frontend for the FAQ system, built using **React.js**. It provides an interface for users to view FAQs and for admins to add new FAQs.

## **Features**
- WYSIWYG editor (Quill.js) for FAQ answers
- REST API integration with the backend
- Multilingual support
- Admin panel for adding FAQs
- Responsive UI

---

## **📌 Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/anuj-0108/faq-frontend.git
cd faq-frontend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Frontend Server**
```sh
npm start
```

---

## **📡 API Integration**
The frontend interacts with the backend API at:
```http
http://localhost:5000/api/faqs
```

### **1️⃣ Fetch FAQs**
```js
fetch("http://localhost:5000/api/faqs?lang=en")
  .then(response => response.json())
  .then(data => console.log(data));
```

### **2️⃣ Add a New FAQ**
```js
fetch("http://localhost:5000/api/faqs", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ question: "What is React?", answer: "React is a JavaScript library for building UI." })
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## **🛠 Technologies Used**
- **React.js** (Frontend Framework)
- **React-Quill** (WYSIWYG Editor)
- **Axios** (API Requests)
- **React Router** (Routing)

---

## **📜 License**
This project is **MIT Licensed**. Feel free to use and modify.

---

## **🔗 Contribution**
1. **Fork the Repository**
2. **Create a Feature Branch** (`git checkout -b feature-name`)
3. **Commit Changes** (`git commit -m "feat: Added new feature"`)
4. **Push to GitHub** (`git push origin feature-name`)
5. **Open a Pull Request** 🚀

For any issues, please open an **Issue** on GitHub.

