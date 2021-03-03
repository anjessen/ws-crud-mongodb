const router = require("express").Router();
const Todo = require("../models/model");

// routes

// routes will be here....
router.get("/", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("../views/index.ejs", {todo: allTodo})
    console.log(allTodo)
})


//module.exports = router;
router.post("/add/todo", (req, res) => {
    const  todo  = req.body;
    const newTodo = new Todo( todo );

    // save the todo
    newTodo.save()
      .then(() => {
        console.log("Successfully added todo!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  router.get("/edit/todo/:_id", async(req, res) => {

    const oneTodo = await Todo.findOne(req.params)
    res.render("../views/update.ejs", {todo: oneTodo});
    console.log(oneTodo)
  });

  router.post("/update/todo/:_id", (req, res) => {
    const id = req.params;
    console.log(id)
    Todo.findByIdAndUpdate(id, {$set:{...req.body}}, {useFindAndModify: false})
    .then(() =>{
      res.redirect("/");
    })
    .catch(err => {
      console.log("error")
    });

  });

  router.get("/delete/todo/:_id", (req, res) => {
    const  _id  = req.params;
    Todo.deleteOne( _id )
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

/*authentification*/

  router.get('/',  (req, res) => {
    res.render('index');
  });

  router.get('/new', (req, res, next) => {
    res.render('../views/signup.ejs');
  });

  router.post('/', (req, res, next)=>{
    res.end();
  });

  router.get('/signin/form', (req, res, next) => {
    res.end();
  });

  router.post('/signin', (req, res, next) => {
    res.end();
  });

  router.get('/signout', (req, res, next) => {
    res.end();
  });

module.exports = router;
