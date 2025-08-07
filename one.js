const express = require("express");
const StudentRoute = require("./Routes/StudentRoute"); 

const app = express(); 
const PORT = 80;

app.use(express.json());

app.use("/student", StudentRoute);

app.get("/" , (req, res) => {
    res.send("hello how are you")
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`);
});
