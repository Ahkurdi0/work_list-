//to run : node filename.js
const express = require('express');
const app = express();
const date = require(__dirname+"/date.js")
const port = 3000;
const bodyParser = require('body-parser');
var workList = ['university', 'work', 'exam'];
var gameList = ['GTA', 'R7', 'FIFA49'];


app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'))
app.set('view engine', 'ejs');




app.get("/", function (req, res) {
    res.render("list", {
        backData: date,
        newWork: workList
    });
})

app.post("/", function (req, res) {
    var item = req.body.addWord;
    if (req.body.add === "Game") {
        gameList.push(item);
        res.redirect('/work');
    } else {
        workList.push(item);
        res.redirect('/');
    }


})

app.get("/about",function(req,res){
    res.render("about");
})


app.get("/work", function (req, res) {
    res.render("list", {
        backData: "Game",
        newWork: gameList
    });
})




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))