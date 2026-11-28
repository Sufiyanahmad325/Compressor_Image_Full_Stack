export const  asyncyHandler=(requestHandler)=>{
    return async(req, res, next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((error)=>next('this is your error ===>' , err))
    }
}