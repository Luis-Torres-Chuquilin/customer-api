/** @format */

const app = require("./src/server");

// Listen Server
const PORT = 8000;
app.listen(8000, () => console.log(`🚀 Server running on port ${PORT} 🚀`));
