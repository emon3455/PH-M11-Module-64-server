const express = require(`express`);
const app = express();
const port  = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const users = [
    {id: 1 , name: "Emon" , email: "emon.mhk69@gmail.com"},
    {id: 2 , name: "Elina" , email: "elina.jsr05@gmail.com"},
    {id: 3 , name: "farjana" , email: "farju.brs@gmail.com"}
]

app.get("/" , (req, res)=>{
    res.send("user management server is running");
})

app.get("/users" , (req, res)=>{
    res.send(users);
})

app.listen(port , ()=>{
    console.log(`user management server is running on port: ${port}`);
})
