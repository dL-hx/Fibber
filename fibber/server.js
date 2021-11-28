// server.js
import express from 'express'
const app = express()
app.use(express.static('dist'));
const temple = `
<html lang="en">
<head>
      <title>React Fiber</title>
</head>
<body>
    <div id="root"></div>
    <script src="bundle.js"></script>
</body>
</html>
`
app.get('*', (req, res)=>{
    res.send(temple)
})

app.listen(3000, ()=>{
    console.log('server is running');
})