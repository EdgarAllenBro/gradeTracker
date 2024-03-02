import {Student,Teacher,Class} from './model.js'


// Teacher.create({firstName:'laurel',lastName:'hailstone',userName:'LHailstone',password:'password'})

let teachers = await Teacher.findAll()

console.log(teachers)