<h1 align="left">Notes Taker App</h1>

<p align="left">
  A lightweight <strong>Notes Management Application</strong> built using 
  <strong>Express.js</strong>, <strong>EJS</strong>, and <strong>TailwindCSS</strong>.  
  <br>
  This app works entirely without a database — it uses Node’s <code>fs</code> module 
  to store notes as <code>.txt</code> files in a folder on your system.
</p>

---

<h2>🚀 Features</h2>

<ul>
  <li>🆕 <strong>Create Notes</strong> – Quickly add new notes through the web interface.</li>
  <li>📖 <strong>View Notes</strong> – See all saved notes listed from your notes folder.</li>
  <li>✏️ <strong>Edit Notes</strong> – Open and modify existing notes directly in the app.</li>
  <li>💾 <strong>File-Based Storage</strong> – Notes are saved as <code>.txt</code> files using the <code>fs</code> module — no database setup needed.</li>
  <li>🎨 <strong>Responsive Design</strong> – Built with TailwindCSS for a clean and modern UI.</li>
</ul>

---

<h2>🧰 Tech Stack</h2>

<ul>
  <li><strong>Frontend:</strong> EJS (Embedded JavaScript Templates)</li>
  <li><strong>Styling:</strong> TailwindCSS</li>
  <li><strong>Backend:</strong> Express.js</li>
  <li><strong>Storage:</strong> Node.js fs (File System) Module</li>
</ul>

---

<h2>📦 Installation & Setup</h2>

<pre>
# 1️⃣ Clone the repository
git clone https://github.com/Gauri-Nagariya/notes-taker.git

# 2️⃣ Navigate into the project directory
cd notes-taker

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
node index.js
</pre>

<p>
Once the server is running, open 
<a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.
</p>

---

<h2>📁 Project Structure</h2>

<pre>
notes-taker/
├── views/               # EJS templates
├── notes/               # Folder where .txt notes are saved
├── public/              # Folder for static assets (CSS, JS, images)
│   ├── css/             # Place custom stylesheets here
│   ├── js/              # Place client-side JS files here
│   └── images/          # Place static images or icons here
├── index.js             # Main Express server file
├── package.json
└── README.md
</pre>

---

<h2>📂 About the <code>public/</code> Folder</h2>

<p>
By default, your <code>public/</code> folder may be empty, so GitHub won’t include it.  
You can create it manually in your project root and add these subfolders:
</p>

<ul>
  <li><code>public/css</code> – For your custom CSS files or compiled Tailwind output.</li>
  <li><code>public/js</code> – For client-side scripts (if needed).</li>
  <li><code>public/images</code> – For any static images or icons used in your app.</li>
</ul>

<p>
Once you add files to these folders, Git will start tracking them automatically.
</p>

---

<h2>💡 How It Works</h2>

<ol>
  <li>When a user creates a note, the app saves it as a <code>.txt</code> file in the <code>notes</code> folder using the <code>fs</code> module.</li>
  <li>Each note’s title becomes its filename (e.g. <code>shopping-list.txt</code>).</li>
  <li>You can open, edit, and update notes directly from the browser.</li>
  <li>No external database (like MongoDB or MySQL) is required — it’s fully file-based.</li>
</ol>

---

<h2>📜 License</h2>

<p>
This project is licensed under the <strong>MIT License</strong>.  
</p>
