const fs = require("fs");

function logReqRes(filename){
    return (req,res,next) => {
        const logFile = `\n${Date.now()}:${req.path}:${req.method}\n`;
        fs.appendFile(filename,logFile,(err)=>{
            if(err){
                console.log("Failed to write file")
            }
            next();
        });
    }
}

module.exports = {
    logReqRes,
}