import connectToDB from "./db.js";
import { Model, DataTypes } from "sequelize";
import url from 'url'
import util from 'util'

const db = await connectToDB('postgresql:///americanOne')


class Teacher extends Model{
    [util.inspect.custom]() {
        return this.toJSON();
      }
}

Teacher.init({
    teacherId:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{
        type:DataTypes.STRING(24),
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING(24),
        allowNull:false
    },
    userName:{
        type:DataTypes.STRING(24),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(),
        allowNull:false
    }

},{
    sequelize: db,
    modelName: 'Teacher'
})


class Student extends Model{
    [util.inspect.custom]() {
        return this.toJSON();
      }
}

Student.init({
    studentId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    firstName:{
        type:DataTypes.STRING(24),
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING(24),
        allowNull:false
    },

},{
    sequelize:db,
    modelName:'Student'
})




class Class extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
      }
}

Class.init({
    classId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    className:DataTypes.STRING()
},{
    sequelize:db,
    modelName:'Class'
})

class Score extends Model {
    [util.inspect.custom](){
        return this.toJSON()
    }
}

Score.init({
    scoreId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    testName:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    score:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},
{
    sequelize:db,
    modelName: 'Score'
})

Student.hasMany(Score)
Score.belongsTo(Student)

Class.hasMany(Student)
Student.belongsTo(Class)

Class.hasMany(Teacher)
Teacher.belongsTo(Class)

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    
    // If we don't manually close the connection, the script will hang a couple seconds
    // before closing.
    await db.close();
    console.log('Finished syncing database!');
}


export {Teacher,Student,Class}