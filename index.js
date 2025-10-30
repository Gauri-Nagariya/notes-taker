const express = require("express");
const app = express();
const Path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, "public")));

app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    res.render("index", { files: files });
  });
});

// changed route to match index.ejs links (/files/:filename)
app.get("/files/:filename", function (req, res) {
  const safeName = Path.basename(req.params.filename);
  const filePath = Path.join(__dirname, "files", safeName);
  fs.readFile(filePath, "utf-8", function (err, filedata) {
    if (err) {
      console.error("readFile error:", err);
      return res.status(404).send("File not found");
    }
    res.render("show", { filename: safeName, filedata: filedata });
  });
});

app.get("/edit/:filename", function (req, res) {
  const safeName = Path.basename(req.params.filename);
  const filePath = Path.join(__dirname, "files", safeName);
  // fs.readFile(filePath, "utf-8", function(err, filedata){
  //     if (err) {
  //       console.error("readFile error:", err);
  //       return res.status(404).send("File not found");
  //     }
  res.render("edit", {
    filename: safeName.replace(".txt", "").replace(/_/g, " "),
  });
  // });
});

// app.post("/edit",function (req, res) {
//   fs.rename(`./file/${req.body.previous}`, `./file/${req.body.new}`, function (err) {
//           res.redirect("/");

//     // console.log(`./file/${req.body.previous}`);
//   });
// });

// ...existing code...
app.post("/edit", function (req, res) {
  // form sends: title = current name (no .txt, human spaces), details = new name (no .txt)
  const current = (req.body.title || "").trim();
  const next = (req.body.details || "").trim();
  if (!current || !next) {
    console.error("edit: missing fields", { current, next });
    return res.status(400).send("Missing name fields");
  }

  const fromName = current.replace(/\s+/g, "_") + ".txt";
  const toName = next.replace(/\s+/g, "_") + ".txt";

  const fromPath = Path.join(__dirname, "files", fromName);
  const toPath = Path.join(__dirname, "files", toName);

  console.log("rename request:", fromPath, "->", toPath);

  fs.rename(fromPath, toPath, function (err) {
    if (err) {
      console.error("rename error:", err);
      // show error in browser or redirect with a query param to show message
      return res.status(500).send("Rename failed: " + (err.message || "unknown"));
    }
    // console.log("rename success:", fromName, "->", toName);
    res.redirect("/");
  });
});
// ...existing code...

app.post("/create", function (req, res) {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("_")}.txt`,
    req.body.details,
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send("Error writing file");
      }
      res.redirect("/");
    }
  );
});

app.listen(3000);
