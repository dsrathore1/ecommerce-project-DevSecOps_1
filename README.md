# 🛒 E-commerce Project DevSecOps

Welcome to the E-commerce Backend API! This project provides basic product listing functionality including sorting, creating a database, and more. The code is production-ready, with a robust GitHub Actions pipeline for the development and master branches. The code quality is top-notch, with proper indentation and a well-structured project.

## 📂 Folder Structure

```bash
ecommerce-project-DevSecOps_1/
├── .github/
│   ├── workflows/
│       ├── dev-branch-flow.yml
│       ├── master-branch-flow.yml
├── Backend/
│   ├── controllers/
│   ├── data/
│   ├── db/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── .dockerignore
├── .gitignore
├── LICENSE
├── CONTRIBUTING.md
├── README.md
```

## ✨ Features

- 📑 **Product Listing**: View all products with the ability to sort by various criteria.
- 📚 **Database Creation**: Automated database setup for easy deployment.
- 🔍 **Sorting**: Sort products by price, rating, and more.
- 🛠️ **Production Ready**: High-quality code with proper indentation and structure.
- 🔄 **CI/CD Pipeline**: GitHub Actions for continuous integration and deployment on development and master branches.

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gauri-abc/ecommerce-project-DevSecOps_1.git
   cd ecommerce-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root directory and add the following:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Usage

- **List Products**:

  ```
  GET /api/products
  ```

## 📜 Scripts

- `npm run dev`: Run the development server.
- `npm run start`: Run the production server.
- `npm run test`: Run tests.

## 🔄 Continuous Integration

The project uses GitHub Actions for continuous integration and deployment. The workflow files are located in the `.github/workflows/` directory.

### Development Branch Workflow

- Lints the code.
- Runs tests.
- Deploys to the staging environment.

### Master Branch Workflow

- Lints the code.
- Runs tests.
- Deploys to the production environment.

## 📝 Contributing

We welcome contributions! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📧 Contact

If you have any questions, feel free to reach out to me @gauri-abc

<h3 align="center">Happy coding! 😃 </h3>
