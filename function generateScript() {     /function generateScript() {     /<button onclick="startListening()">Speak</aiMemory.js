// aiMemory.js
// Core AI Memory System (Simple + Stable)

const fs = require("fs");
const path = require("path");

const MEMORY_FILE = path.join(__dirname, "ai-memory.json");

// Initialize memory file if not exists
function initMemory() {
  if (!fs.existsSync(MEMORY_FILE)) {
    fs.writeFileSync(
      MEMORY_FILE,
      JSON.stringify({ users: {} }, null, 2)
    );
  }
}

// Load memory
function loadMemory() {
  initMemory();
  const data = fs.readFileSync(MEMORY_FILE, "utf-8");
  return JSON.parse(data);
}

// Save memory
function saveMemory(memory) {
  fs.writeFileSync(MEMORY_FILE, JSON.stringify(memory, null, 2));
}

// Create or update user memory
function updateUserMemory(userId, data) {
  const memory = loadMemory();

  if (!memory.users[userId]) {
    memory.users[userId] = {
      topic: "",
      level: "beginner",
      history: [],
      createdAt: new Date().toISOString()
    };
  }

  memory.users[userId] = {
    ...memory.users[userId],
    ...data,
    updatedAt: new Date().toISOString()
  };

  saveMemory(memory);
  return memory.users[userId];
}

// Get user memory
function getUserMemory(userId) {
  const memory = loadMemory();
  return memory.users[userId] || null;
}

// Add learning history
function addHistory(userId, entry) {
  const memory = loadMemory();

  if (!memory.users[userId]) return null;

  memory.users[userId].history.push({
    entry,
    time: new Date().toISOString()
  });

  saveMemory(memory);
  return memory.users[userId];
}

module.exports = {
  updateUserMemory,
  getUserMemory,
  addHistory
};
