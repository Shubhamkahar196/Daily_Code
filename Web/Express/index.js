//creating an http server
//express

const express = require('express');

const app = express();
app.use(express.json());


var user = [{
   name: "John",
   kidneys: [{
      healthy: false
   }]
   
}];

// req.res => request and response
app.get("/",function(req,res){
  const johnKidney = user[0].kidneys;
  console.log(johnKidney);
  const numberOfKidney = johnKidney.length;

  // 1st approach to find healthy kidney

//   const numberOfHealthyKidney = 0;
//   for(let i = 0; i<johnKidney.length;i++){
//    if(numberOfHealthyKidney.healthy){
//       numberOfHealthyKidney = numberOfHealthyKidney + 1;
//    }
//   }
//   const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;
//   res.json({
//    johnKidney,
//    numberOfHealthyKidney,
//    numberOfUnhealthyKidney
//   })

// 2nd way to find healthy kidney using filter method 


const healthyKidneys = johnKidney.filter(kideny =>kideny.healthy);
const numberOfHealthyKidney = healthyKidneys.length;
const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;

res.json({
  johnKidney,
  numberOfHealthyKidney,
  numberOfUnhealthyKidney
});

  
});

app.post("/",function(req,res){
 const isHealthy = req.body.isHealthy;
 user[0].kidneys.push({
   healthy: isHealthy
 })
 res.json({
   msg: "Done!"
 })
});


app.put("/", (req, res) => {
   const allHealthy = user[0].kidneys.every(kidney => kidney.healthy);
   if (allHealthy) {
     res.status(200).send({ message: "All kidneys are already healthy." });
   } else {
     user[0].kidneys = user[0].kidneys.map(kidney => ({ healthy: true }));
     res.json(user[0].kidneys);
   }
 })
 

app.delete("/", (req, res) => {
   const unhealthyKidneys = user[0].kidneys.filter(kidney => !kidney.healthy);
   if (unhealthyKidneys.length === 0) {
     const message = "No unhealthy kidneys found to delete.";
     console.log(message);
     res.status(200).send(message);
   } else {
     user[0].kidneys = user[0].kidneys.filter(kidney => kidney.healthy);
     res.json(user[0].kidneys);
   }
 })
 
app.listen(3000);

