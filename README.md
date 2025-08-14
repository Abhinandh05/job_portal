# 🚀 Job Portal

A full-stack job portal application built with the MERN stack, connecting job seekers with employers in a seamless, modern interface.

![Job Portal Banner](https://via.placeholder.com/800x200/4f46e5/ffffff?text=Job+Portal)

## ✨ Features

### For Job Seekers
- 🔐 **User Authentication** - Secure registration and login
- 👤 **Profile Management** - Create and update professional profiles
- 🔍 **Advanced Job Search** - Filter jobs by location, salary, company, and skills
- 📝 **Easy Applications** - One-click job applications with resume upload
- 📊 **Application Tracking** - Monitor application status and history
- 🔔 **Job Alerts** - Get notified about relevant job openings
- ⭐ **Save Jobs** - Bookmark interesting positions for later

### For Employers
- 🏢 **Company Profiles** - Showcase your organization
- 📋 **Job Posting** - Create and manage job listings
- 👥 **Candidate Management** - Review applications and candidate profiles
- 📈 **Analytics Dashboard** - Track job posting performance
- 💬 **Communication Tools** - Direct messaging with candidates

### General Features
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI/UX** - Clean and intuitive interface
- 🚀 **Real-time Updates** - Live notifications and updates
- 🔒 **Security** - JWT authentication and data protection

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling and validation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Nodemailer** - Email service

### DevOps & Tools
- **Git** - Version control
- **npm/yarn** - Package management
- **Postman** - API testing
- **MongoDB Atlas** - Cloud database
- **Vercel/Netlify** - Frontend deployment
- **Heroku/Railway** - Backend deployment

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)
- [Git](https://git-scm.com/)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/job_portal.git
cd job_portal
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your environment variables to .env
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# EMAIL_USER=your_email
# EMAIL_PASS=your_email_password
# CLOUDINARY_CLOUD_NAME=your_cloudinary_name
# CLOUDINARY_API_KEY=your_cloudinary_api_key
# CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Start the backend server
npm run dev
```

### 3. Frontend Setup
```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your environment variables to .env
# REACT_APP_API_URL=http://localhost:5000/api

# Start the frontend development server
npm start
```

### 4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Documentation: http://localhost:5000/api/docs (if Swagger is implemented)

## 📁 Project Structure

```
job_portal/
├── backend/
│   ├── config/
│   │   ├── database.js
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── upload.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Application.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── jobs.js
│   │   └── users.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── jobs/
│   │   │   └── user/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Jobs.js
│   │   │   ├── Login.js
│   │   │   └── Profile.js
│   │   ├── redux/
│   │   │   ├── slices/
│   │   │   └── store.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── tailwind.config.js
├── README.md
└── .gitignore
```

## 📚 API Documentation

### Authentication Endpoints
```
POST   /api/auth/register     - Register a new user
POST   /api/auth/login        - Login user
POST   /api/auth/logout       - Logout user
GET    /api/auth/profile      - Get user profile
PUT    /api/auth/profile      - Update user profile
```

### Job Endpoints
```
GET    /api/jobs              - Get all jobs
GET    /api/jobs/:id          - Get job by ID
POST   /api/jobs              - Create new job (employers only)
PUT    /api/jobs/:id          - Update job (employers only)
DELETE /api/jobs/:id          - Delete job (employers only)
GET    /api/jobs/search       - Search jobs with filters
```

### Application Endpoints
```
POST   /api/applications      - Apply for a job
GET    /api/applications      - Get user applications
PUT    /api/applications/:id  - Update application status
DELETE /api/applications/:id  - Withdraw application
```

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd backend
npm run test

# Frontend tests
cd frontend
npm run test

# Run tests with coverage
npm run test:coverage
```

## 📱 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400/f3f4f6/374151?text=Home+Page+Screenshot)

### Job Listings
![Job Listings](https://via.placeholder.com/800x400/f3f4f6/374151?text=Job+Listings+Screenshot)

### User Dashboard
![User Dashboard](https://via.placeholder.com/800x400/f3f4f6/374151?text=User+Dashboard+Screenshot)

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Backend Deployment (Railway)
1. Create account on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Add environment variables
4. Deploy automatically on push

### Environment Variables for Production
```env
# Backend
NODE_ENV=production
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_strong_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Frontend
REACT_APP_API_URL=your_backend_production_url
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use ESLint and Prettier for code formatting
- Follow conventional commit messages
- Write meaningful commit descriptions
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - For the amazing frontend library
- [Node.js](https://nodejs.org/) - For the runtime environment
- [MongoDB](https://www.mongodb.com/) - For the database
- [Express.js](https://expressjs.com/) - For the web framework
- All the open-source contributors who made this project possible

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/yourusername/job_portal/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact me directly at abhinandhc31@gmail.com
## 🔄 Changelog

### Version 1.0.0 (Current)
- Initial release
- Basic job posting and application features
- User authentication and authorization
- Responsive design implementation

### Upcoming Features
- [ ] Advanced search filters
- [ ] Real-time chat between employers and candidates
- [ ] Video interview scheduling
- [ ] AI-powered job recommendations
- [ ] Mobile app development

---

<div align="center">
  <p>Made with ❤️ by [Your Name]</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
