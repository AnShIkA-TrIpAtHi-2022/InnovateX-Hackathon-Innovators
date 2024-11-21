const express = require('express')
const app = express()


app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));



app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log(`This app listening on port  3000`)
})