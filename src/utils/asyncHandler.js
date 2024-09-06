const asyncHandler =(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>{next(error)})
    }
}

export {asyncHandler}; //ise hum export default se bhi export kar sakte hai=>

//try catch wala code ya to ye use kar sakte hai ya fir promise wala upar wala
// const asyncHandler = (fn)=> async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message;
//         })
//     }
// }