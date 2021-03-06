const { Model, DataTypes } = require ("sequelize");

class Student extends Model {
    static init(sequelize){
        super.init({
            ra: DataTypes.NUMBER, 
            name: DataTypes.STRING, 
            email: DataTypes.STRING,
            cpf: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Student;