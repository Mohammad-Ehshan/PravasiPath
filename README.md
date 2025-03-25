# Pravasi Path

## 🌐 Live Demo

- **Frontend**: [Pravasi Path on Netlify](https://pravasipath.netlify.app)
- **Backend**: [Pravasi Path API](https://pravasi-path.onrender.com)

🏆 **Finalist at Build with Delhi & Selected for Offline Round**

Pravasi Path is a web solution built using the **MERN stack** with plans to integrate **AI** and **Machine Learning** *(currently a work in progress)* to support India's migrant workers. Our platform aims to address critical challenges faced by migrants moving to metro cities in search of employment.

## 🚀 Features

- **Job Matching**: AI-driven job recommendations to reduce job inconsistency. *(Work in progress)*
- **Skill Development**: Connects workers with training programs to bridge the skill gap.
- **Government Schemes Awareness**: Educates migrants about relevant government benefits.
- **Community & Social Integration**: Helps migrants connect with their local communities.
- **Worker Protection**: Prevents overexploitation by ensuring fair wages and work conditions.

## 🏗️ Tech Stack

- **Frontend**: React.js, Tailwind CSS (Hosted on Netlify)
- **Backend**: Node.js, Express.js, MongoDB (Hosted on Render)
- **AI/ML**: Planned integration of Machine Learning models for job recommendations *(Currently a work in progress)*
- **Authentication**: JWT-based authentication

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Mohammad-Ehshan/PravasiPath
```

### 2️⃣ Backend Setup

```sh
cd backend
npm install
```

Create a `.env` file in the backend directory:

```
PORT=4000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLIENT_NAME=your_cloudinary_name
CLOUDINARY_CLIENT_API=your_cloudinary_api_key
CLOUDINARY_CLIENT_SECRET=your_cloudinary_secret
```

Start the backend server:

```sh
nodemon server.js
```

### 3️⃣ Frontend Setup

```sh
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:

```
REACT_APP_BACKEND_URL=https://pravasi-path.onrender.com
```

Start the frontend:

```sh
npm start
```

## 🛠️ Contributing

We welcome contributions! To get started:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License

This project is open-source and available under the MIT License.

---

✉️ **Contact Us**: If you have any questions or feedback, feel free to reach out!

