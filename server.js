const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.json({ Message: "Hello" });
})

app.listen(8000, () => {
    console.log("Server starting listening at port 8000")
})