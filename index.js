const express = require("express");
const app = express();
const Path = require("path")
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(Path.join(__dirname,"public")))


app.get("/" , function(req,res){
     fs.readdir("./files", function(err, files) {
    res.render("index", { files: files });
  });
})

// changed route to match index.ejs links (/files/:filename)
app.get("/files/:filename", function(req, res){
    const safeName = Path.basename(req.params.filename);
    const filePath = Path.join(__dirname, "files", safeName);
    fs.readFile(filePath, "utf-8", function(err, filedata){
        if (err) {
          console.error("readFile error:", err);
          return res.status(404).send("File not found");
        }
        res.render('show', { filename: safeName, filedata: filedata });
    });
})

app.post("/create", function(req, res){
   fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
     if (err) {
      console.error(err);
      return res.status(500).send("Error writing file");
    }
    res.redirect("/");
   })
})

app.listen(3000);