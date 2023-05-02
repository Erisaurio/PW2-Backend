const jwt = require("jsonwebtoken");

const JWT_SECRET = MasterKey

const tokenSing = async(user) => {
    const sing = await jwt.sing
    (   {
            _id: user._id,
            role: user.role,
            name: user.name,
        },
        JWT_SECRET,
        {
           expiresIn: "2h",
        }
    )

    return sing;
}

const verifytoken = async(tokenJwt) => {
   try{
      return jwt.verify(tokenJwt,JWT_SECRET)
   }catch(e){
      return null;
   }
}

module.exports = {tokenSing,verifytoken}