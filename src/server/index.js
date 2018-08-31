var express = require("express")
const app = express()

app.use(express.static("dist/"))
app.get("/", (req, res, next) => {

    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>

      <body>
        <div id="app">Hello World</div>
        <script src="main.js"></script>
      </body>
    </html>
  `)
})

app.listen(4000, () => {
    console.log('Server is listening on port: 4000')
})