const express = require("express");
const cors = require("cors");
const {
  readDuas,
  readCategorirs,
  readSubCategories,
  readSubCategoriesById,
  readDuasByCategoryId,
} = require("./controller");
const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());


app.get('/duas', (req, res) => {
    readDuas((err, rows) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).json(rows)
        }
    })
})

app.get("/duas/:id", (req, res) => {
  const categoryId = req.params.id; // Add this line to get the category id from the request parameters

  readDuasByCategoryId(categoryId, (err, rows) => {
    // Pass the categoryId to the readSubCategories function
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

app.get("/categories", (req, res) => {
  readCategorirs((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/sub-categories", (req, res) => {
  readSubCategories((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

app.get("/sub-categories/:id", (req, res) => {
  const categoryId = req.params.id; // Add this line to get the category id from the request parameters

  readSubCategoriesById(categoryId, (err, rows) => {
    // Pass the categoryId to the readSubCategories function
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

app.listen(8000, ()=> {
    console.log("Server is running");
})