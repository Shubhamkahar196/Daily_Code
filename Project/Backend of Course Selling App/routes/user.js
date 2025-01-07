

function createUserRoutes(app){
    
    app.post("/user/signup", function(req,res){
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
    
        res.status(200).json({
            message: "You are successfully signup"
        })
    });
    
    app.post("/user/signin",function(req,res){
             const email = req.params.email;
             const password = req.params.password;
    
             res.status(200).json({
                message: "You are logged in"
             })
    });
    
    app.post("/user/purchases",function(req,res){
        res.json({
            message: "user purchase endpoint"
        })
    });

}


module.exports ={
    createUserRoutes: createUserRoutes
}
