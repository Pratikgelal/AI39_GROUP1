1. Programs You Need to Install
✅ 1. Node.js
Download from: https://nodejs.org
Install the LTS version
Verify:
node -v
npm -v
✅ 2. MySQL Server
Install from: https://dev.mysql.com/downloads/
Also install MySQL Workbench (GUI to manage DB)
Remember your:
username → usually root
password → whatever you set

------------------------------------------------------

2.Setup Backend (Node.js)
📍 Step 1: Open terminal in backend/
cd auth-project/backend
npm init -y
📍 Step 2: Install dependencies
npm install express mysql2 cors body-parser bcrypt

------------------------------------------------------

3. Setup MySQL Database
Open MySQL Workbench or terminal and run:

CREATE DATABASE auth_app;
USE auth_app;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);

------------------------------------------------------

How to Run Everything
Start Backend:

cd backend
node server.js

You should see:

Server running on port 3000
Connected to MySQL

------------------------------------------------------

🔄 How Data Flows
User fills form
JS sends request → http://localhost:3000
Node.js receives request
MySQL stores/checks data
Response comes back → shown in alert

