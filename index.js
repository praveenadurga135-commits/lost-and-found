const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const itemRoutes=require("./routes/item");
const errorHandler= require("./middleware/errorHandler");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "working"
    });
});

app.use((req,res,next) => {
    console.log(req.method);
    console.log(req.url);
    next();
});

app.use("/items", itemRoutes);

app.use((req,res) => {
    res.status(404).json({
        message: "Page not found"
    });
});

app.use(errorHandler);

app.listen(PORT, () => {
    connectDB();
    console.log("server listening on "+PORT);
});