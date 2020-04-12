const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.use(express.static('dist'));
app.get('*',(req,res)=>{
    let indexHtmlPath = path.join(__dirname,"dist","index.html");
    res.sendFile(indexHtmlPath)
})

app.listen(port, () => console.log(`Example pp listening on port ${port}!`))