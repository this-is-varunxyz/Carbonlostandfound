# Campus Ledger: Decentralized Lost & Found Board ⬛⬜

**HackMatrix 2026 Submission** | **Track:** Open Innovation | **Problem ID:** HM39

A highly functional, brutalist-themed platform designed to solve the disorganized nature of lost and found items across the university campus. Campus Ledger provides a centralized web dashboard and a seamlessly integrated WhatsApp bot to report, search, and claim missing belongings.

---

## 🎯 The Problem
Currently, lost items on campus are reported through chaotic, fragmented WhatsApp groups where messages get buried instantly. Students lose valuable items (wallets, IDs, electronics) and finders have no streamlined way to locate the owners. 

## 💡 Our Solution
Campus Ledger replaces the chaos with a searchable, filterable feed. 
We took it a step further by integrating **CarbonV2**—a WhatsApp bot that allows students to query the live database directly from their phones without even opening the website.

### ✨ Key Features
* **Stark Monochrome UI:** A high-contrast, brutalist design focused purely on utility and fast data entry.
* **Live Search & Filtering:** Instantly filter the ledger by "Lost" or "Found" items, and search via keywords.
* **Secure Image Uploads:** Direct integration with Cloudinary for fast, optimized visual data uploads.
* **Contact Protocols:** Secure inline modals that reveal the finder's/loser's contact details only when a user clicks "I Have Found It" or "Claim: It's Mine".
* **WhatsApp Bot Integration (CarbonV2):** Users can send `!lostitems` or `!founditems` in their WhatsApp groups to fetch a real-time list of reported items directly from the MongoDB database.

---

## 🛠️ Technology Stack
* **Frontend:** React.js, Vite, Custom Pure CSS (Brutalist Theme), Lucide-React (Icons)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **Storage:** Cloudinary, Multer
* **Bot Integration:** Baileys (WhatsApp Web API)

---

## 📂 Project Structure
\`\`\`text
carbonlostandfound/
├── frontend/                 # React UI
│   ├── src/
│   │   ├── components/       # FilterBar, ItemCard, UploadForm, Navbar
│   │   ├── pages/            # Feed, Upload
│   │   └── index.css         # Custom Monochrome Styles
├── backend/                  # Node.js API
│   ├── src/
│   │   ├── config/           # MongoDB & Cloudinary Configs
│   │   ├── controllers/      # Item processing logic
│   │   ├── models/           # Mongoose Schemas (Item.js)
│   │   ├── routes/           # Express API endpoints
│   │   └── server.js         # API Entry Point
└── CarbonV2/                 # WhatsApp Bot
    └── index.js              # Bot logic featuring !lostitems command
\`\`\`

---

## 🚀 Installation & Setup

### 1. Prerequisites
* Node.js installed
* MongoDB Atlas Account
* Cloudinary Account

### 2. Backend Setup
\`\`\`bash
cd backend
npm install
\`\`\`
Create a `.env` file in the `backend` directory:
\`\`\`env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
\`\`\`
Start the server:
\`\`\`bash
npm run dev
\`\`\`

### 3. Frontend Setup
Open a new terminal:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

### 4. WhatsApp Bot (CarbonV2) Setup
Open a third terminal:
\`\`\`bash
cd CarbonV2
npm install
\`\`\`
Ensure your `.env` inside `CarbonV2` also contains the `MONGO_URI`. Then start the bot:
\`\`\`bash
node index.js
\`\`\`

---

## 📱 Usage
1.  **Web Dashboard:** Navigate to `http://localhost:5173`. Click "Report Item" to upload a new lost or found item with an image.
2.  **WhatsApp Query:** In any group where CarbonV2 is active, type `!lostitems` to get a formatted list of all items currently missing on campus.

---

## 👤 Developer
* **Varun Kushwah** (Registration: 24BCE11084)
* VIT Bhopal University
