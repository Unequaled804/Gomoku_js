const express = require('express');
const app = express();
const PORT = 3000

// app.get('/', (req, res) => {
//     res.send("Hello world");
// })

app.use(express.static('files'))

app.listen(PORT, () => {
    console.log(`Server starts on http://localhost:${PORT}`);
});