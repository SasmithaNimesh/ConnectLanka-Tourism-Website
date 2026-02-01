Connect Lanka

Connect Lanka is an AI-assisted tourism web application that helps users plan trips with personalized destination, hotel, and transport recommendations. The platform combines a Node.js + MongoDB backend with an interactive frontend to provide a smooth travel planning experience.

📝 Features

User Authentication: Sign up, log in, and manage user accounts securely.

AI Travel Recommendations: Get personalized suggestions based on your budget and interests using Prolog AI rules.

Hotels & Guides Directory: Browse hotels, tour guides, and local partners.

Interactive Maps: Visualize destinations and plan routes efficiently.

Responsive Frontend: Works on desktop and mobile devices.

📂 Project Structure
ConnectLanka Fixed/
├─ index.html                # Homepage
├─ Gallery.html              # Image gallery
├─ Login.html                # Login page
├─ Signup.html               # Signup page
├─ signup-option.html        # Signup options
├─ travel.html               # Travel page
├─ register.html             # Registration page
├─ css/                      # Stylesheets
├─ js/                       # JavaScript files
├─ images/                   # Images and assets
├─ server.js                 # Express backend server
├─ models/                   # MongoDB models
├─ prolog/                   # Prolog AI rules
├─ package.json              # Node dependencies
├─ package-lock.json         # Node lock file
└─ README.md                 # Project documentation

💻 Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Database: MongoDB

AI/Logic: Prolog (for travel recommendations)

Other Tools: CORS, Child Process (exec for Prolog execution)

🚀 Getting Started
Prerequisites

Node.js and npm installed

MongoDB running locally

Installation

Clone the repository:

git clone https://github.com/SasmithaNimesh/ConnectLanka-Tourism-Website.git
cd ConnectLanka-Tourism-Website


Install dependencies:

npm install


Start the server:

node server.js


Open your browser at:

http://localhost:5000

🔧 Notes

Make sure all image, CSS, and JS paths are correct relative to your HTML and CSS files.

Express serves files from the project root, so do not reference a public/ folder anymore.

Node modules (node_modules) should be ignored in GitHub with .gitignore:

node_modules/

🌐 GitHub Pages

You can deploy the frontend via GitHub Pages:

Branch: main

Folder: /root

Wait 1–2 minutes after enabling to see the live site.

📌 Authors

Sasmitha Nimesh – Developer & Designer

📄 License

MIT License
