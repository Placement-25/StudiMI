# Studimi – Study Resource Web Platform

Studimi is a full-stack web application designed to help students **share, access, and organize study resources efficiently**. Built with **React.js**, **Node.js**, and **MongoDB**, this platform enables secure collaboration through an intuitive UI, streamlined resource management, and search functionality.
This Website helps every student there academics as well as placement preparation.
## 🚀 Features

- 🔐 **User Authentication** – Secure registration and login system using JWT  
- 📁 **Study Resource Sharing** – Upload, tag, and categorize notes and materials  
- 🔍 **Search & Filter** – Quickly find notes by subject, tags, or titles  
- 📱 **Responsive UI** – Mobile-first design using React.js & CSS Flex/Grid  
- 💬 **Collaboration** – Comment and discuss resources with peers  
- 📊 **Dashboard** – Personalized dashboard for managing uploads and bookmarks  

---

## 🛠️ Tech Stack

| Frontend         | Backend          | Database     |   
|------------------|------------------|--------------|
| React.js         | Node.js, Express | MongoDB      | 

---

## 📦 Installation

1. **Clone the Repository**
``` bash
   git clone https://github.com/yourusername/studimi-platform.git
   cd studimi-platform
````

2. **Install Dependencies**
   *Backend (in `/server` folder):*
   ```bash
   cd server
   npm install
   ```
   *Frontend (in `/client` folder):*
   ```bash
   cd ../client
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the `/server` folder with:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. **Run the App**
   
   *Start backend:*
   ```bash
   cd server
   npm run dev
   ```
   *Start frontend:*
   ```bash
   cd ../client
   npm start
   ```
---


## 🧩 Folder Structure

```
studimi-platform/
├── client/               # React Frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── utils/
├── server/               # Node.js Backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
```

---

## 🧠 Future Improvements

* ✏️ Add file previews and PDF annotation
* 📚 Resource recommendations based on user activity
* 🔔 Notification system
* 📊 Admin panel for moderation

Currently working on some updation...
