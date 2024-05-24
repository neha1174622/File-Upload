const routes = require("express").Router();
const Destination = require("../models/Destination")
const path = require("path");
const { UniqueString } = require("unique-string-generator")

// localhost:8080/api/destination/category/Wildlife

routes.get("/category/:x", async(req, res)=>{
    // console.log(req.params.x);
    let cate = req.params.x;
    let result = await Destination.find({ category : cate });
    res.send(result);
})


// localhost:8080/api/destination   -- ReST API
/*  
    let result = await axios.get(localhost:8080/api/destination)
    let result = await axios.get(localhost:8080/api/destination/101)
    let result = await axios.post(localhost:8080/api/destination/, obj)
    let result = await axios.put(localhost:8080/api/destination/101, obj)
    let result = await axios.delete(localhost:8080/api/destination/101)
*/



// return all data
routes.get("/", async(req, res)=>{
    let result = await Destination.find();
    res.send(result);
})
// return perticular data
routes.get("/:id", async(req, res)=>{
    let result = await Destination.find({_id : req.params.id});
    res.send(result[0]);
})


routes.post("/", async(req, res)=>{
    // console.log(req.body);
    // console.log(req.files);
    let unique_name = UniqueString(); // ODgyXzE2Nzk1MDQyMDcxNDZfNDkx 
    
    let file = req.files.image; // 1.jpg
    let arr = file.name.split(".");
    let ext = arr[arr.length-1];

    let new_name = unique_name+"."+ext;


    let upload_path = path.resolve()+"/assets/destination-images/"+new_name;
    file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.body.image = new_name;
        await Destination.create(req.body)
        res.send({success : true});
    })

    
})




routes.put("/:id", async(req, res)=>{
    await Destination.updateMany({_id : req.params.id},req.body)
    res.send({success : true});
})
routes.delete("/:id", async(req, res)=>{
    await Destination.deleteMany({_id : req.params.id})
    res.send({success : true});
})



// localhost:080/api/destination/category/Wildlife



module.exports = routes;

/*
    flipkart.com/api/product        this is a Api (.get)



    Express (node)
    1. express
    2. mongoose
    3. cors
    4. sha1
    5. express-fileupload
    6. jsonwebtoken
    7. unique-string-generator


    React
    1. react-router-dom
    2. axios
    3. formik
    4. yup




    let a = "hello.logo.jpg";
    
    let data = a.split("."); [hello, logo, jpg]
    let ext = data[data.length-1];
*/
