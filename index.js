const express = require(`express`);
const app = express();
const port  = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

const users = [
    {id: 1 , name: "Emon" , email: "emon.mhk69@gmail.com"},
    {id: 2 , name: "Elina" , email: "elina.jsr05@gmail.com"},
    {id: 3 , name: "Emolina" , email: "emolina@gmail.com"}
]

app.get("/" , (req, res)=>{
    res.send("user management server is running");
})

app.get("/users" , (req, res)=>{
    res.send(users);
})

app.post("/users" , (req,res)=>{

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);

})

app.listen(port , ()=>{
    console.log(`user management server is running on port: ${port}`);
})
