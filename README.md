# ImaginAI - Community Showcase

## 📘 Project Overview
The **AI Community Showcase** is a full-stack web application that allows users to generate unique images from text prompts using the **Stability AI (Stable Diffusion)** model and share them with a public community feed.  
It demonstrates a seamless integration of the **MERN stack** with external, high-performance APIs for **AI image generation** and **cloud storage**.

---

## ✨ Key Features

### 🎨 AI Image Generation
Users can input creative text prompts and instantly generate **1024x1024 pixel images** powered by the **Stability AI API**.

### 🌐 Community Sharing
Generated images, along with the **prompt** and **user name**, can be shared to a **live, scrollable community feed**, enabling public viewing and interaction.

### 🔒 Secure Image Pipeline
The app securely handles large **Base64 image data**, uploads it to **Cloudinary**, and stores only the **public URL** in MongoDB for optimized performance and scalability.

### ⚙️ Full CRUD Functionality
Implements **Create** and **Read** operations for posts, with **real-time updates** displayed on the home page.

### 📱 Responsive Design
Built with **React** and styled using **Tailwind CSS** to ensure a **modern**, **clean**, and **mobile-friendly** user interface.

---

## 🧩 Tech Stack

| **Component**       | **Technology**                         | **Role**                                                                 |
|----------------------|----------------------------------------|--------------------------------------------------------------------------|
| **Frontend**         | React, Tailwind CSS                    | UI, State Management, API Consumption, Vercel Deployment.                |
| **Backend**          | Node.js, Express.js                    | RESTful API, Routing, Secure API Key Handling, Render Deployment.        |
| **Database**         | MongoDB Atlas (via Mongoose)           | Scalable NoSQL database for post persistence.                            |
| **External APIs**    | Stability AI (Stable Diffusion)        | Text-to-Image Generation.                                                |
| **Asset Storage**    | Cloudinary                             | Cloud-based image hosting and management.                                |

---

## 🚀 Getting Started (Local Setup)

To run this project locally, make sure you have **Node.js** and **npm** installed on your system.

---

### 1️⃣ Clone the Repository
```bash
git clone [YOUR_REPO_URL_HERE]
cd [your-project-name]
```

### 2️⃣ Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Configure Environment Variables
- Create a file named .env inside the server directory and add your credentials.

### 4. Run the Project
- Run the client and server concurrently in two separate terminal windows:
```bash
# Terminal 1 (Server)
cd server
npm start
# Server runs on http://localhost:8080

# Terminal 2 (Client)
cd client
npm run dev
# Client runs on http://localhost:5173 (or similar)
```

## 💡 Inspiration

- This project was built to explore the potential of Generative AI in a community-driven environment — enabling users to create, inspire, and collaborate through AI-generated art.


## ⭐ If you like this project, consider giving it a star on GitHub!
