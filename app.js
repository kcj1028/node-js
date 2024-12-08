const express = require('express');
const app = express();

// 포트 설정
const PORT = 3000;

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my Node.js app on EC2!');
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
