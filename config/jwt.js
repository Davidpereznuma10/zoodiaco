const { MongoLib } = require("../libs/mongodb");
const dotenv = require("dotenv");
const {SignJWT, jwtVerify} = require("jose");
dotenv.config();

class EmployeesCollection {
    constructor(){
        this.collection = "Employees",
        this.mongoDB = new MongoLib()
    };

    async find(id, pw){
        try {
            const employee = await this.mongoDB.getUser(this.collection, id, pw);
            if (employee === null){
                throw {status: 404, message: "User not found"}
            }else{
                return employee;
            }
        } catch (error){
            throw error
        }
    }
    async generateToken (req,res) {
        if(Object.keys(req.body).length === 0) throw {status:400,message:"Data not entered"}
        else{
            const {id, pw} = req.body
            const result = await this.find(id, pw);
            const encoder = new TextEncoder();
            let data = {
                id: result.Employee_ID.toString(),
                role: result.Name
            }
        
            const jwtConstructor = await new SignJWT(data)
                .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
                .setIssuedAt()
                .setExpirationTime('3h')
                .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        
            req.data = {status: 200, message: jwtConstructor};
            return await req.data
        }
    }
    async verifyToken (req, res) {
        const { authorization } = req.headers;
        if (!authorization)
          throw {status: 400, message: "Please generate Token"}
          try {
            const encoder = new TextEncoder();
            req.data = await jwtVerify(
              authorization,
              encoder.encode(process.env.JWT_PRIVATE_KEY)
            );
            return req.data;
          } catch (error) {
            throw {status:498, message: "Something is wrong, generate new token"}
          }
      }
}



module.exports = {EmployeesCollection};