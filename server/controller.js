import {Teacher} from './db/model.js'


const userHandlers = {
    handleLogin: async (req,res)=>{
        const {username,password} = req.body

        const teacherLogin = await Teacher.findOne({where:{userName: username,password:password}})
        if(teacherLogin){
            const data = teacherLogin
            data.password = ''
            res.send(data)
        }else{
            res.send('not a valid login')
        }
    }


}

export default userHandlers