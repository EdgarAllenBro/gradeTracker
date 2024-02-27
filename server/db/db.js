import {Sequelize} from 'sequelize'

export default async function connectToDB(dbUri){
    const sequelize = new Sequelize(dbUri)
    try{ 
        await sequelize.authenticate();
        console.log('DataBase connection successful')
    } catch (error){
        console.log('Unable to connect to DB',error)
    }
    return sequelize
}