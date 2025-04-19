require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
 .then(() => console.log("Kết nối MongoDB thành công!"))
.catch(err => console.error("Lỗi kết nối MongoDB:", err));

// Route đơn giản
app.get('/', (req, res) => {
  res.send('API đang chạy...');
});

// Lắng nghe cổng
app.listen(PORT, () => console.log(`🚀 Server đang chạy trên cổng ${PORT}`));
