import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

let bookings=[];


// receive booking

app.post("/book",(req,res)=>{

const booking=req.body;

bookings.push(booking);

console.log("New booking:",booking);

res.json({

success:true,

message:"Safari booked"

});

});


// view bookings

app.get("/bookings",(req,res)=>{

res.json(bookings);

});

app.listen(3000,()=>{

console.log("Running");

});
