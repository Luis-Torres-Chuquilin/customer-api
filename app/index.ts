/** @format */

import app from "./src/server";

// Listen Server
const PORT = 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} 🚀`));
