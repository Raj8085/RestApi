const express = require("express");

const {connectMongoDb} = require("./connection");

const {logReqRes} = require("./middleware");

const userRouter = require("./routes/user");
 
const app = express();
const PORT = 8015;


connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>console.log("Mongodb connected"));

app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));

// app.use(express.json());

 

 app.use("/api/users",userRouter);


app.listen(PORT,()=>console.log(`server started at port ${PORT}`));


























// const express = require("express");
// const fs = require("fs");
// const users = require("./MOCK_DATA.json");
// const PORT = 8053;
// const app = express();

// //Middleware -- Plugin

// app.use(express.urlencoded({extended:false}));



// app.route("/api/users/:id").get((req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// }).patch((req,res)=>{
//     return res.json({Status : "pending"})
// }).delete((req,res)=>{
//     users.delete({})
//     return res.json({Status : "pending"})
// })

// app.post("/api/users",(req,res)=>{
//     const body = req.body;
//     users.push({...body,id:users.length+1});
//     fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data) => {
//         return res.json({Status : "success",id:users.length});
//     })
// });


// // app.get("/api/users",(req,res)=>{
// //     return res.json(users);
// // });

// // app.get("/users",(req,res)=>{
// //     const html = `
// //     <ul>
// //         ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
// //     </ul>
// //     `;
// //     res.send(html);
// // });

// // app.get("/api/users/:id",(req,res) => {
// //     const id = Number(req.params.id);
// //     if(isNaN(id)){
// //         return res.status(400).json({error:"Invalid user Id"});
// //     }
// //     const user = users.find((user) => user.id === id);
// //     return res.json(user);
// // });




// app.listen(PORT,()=>console.log(`Server started at PORT ${PORT}`));