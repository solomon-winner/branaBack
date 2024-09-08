export const AuthMiddleware = async (req,res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).send({error: 'No token, Authorization denied!'});
    }
    try {

    } catch (error) {
        
    }
}