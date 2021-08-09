const Student = require("../model/Student");

module.exports = {

//List Students
    async index(req, res){
        try {
            const student = await Student.findAll();    
            return res.json(student);    

        } catch (error) {
            return res.status(400).json({ error: "can't list all"})
        }
    },

//List Students by Id
    async findId(req, res){
        try {
            const student = await Student.findAll({  
                where: {
                    id : req.params.id
                }
            });
            return res.json(student);  

        } catch (error) {
            return res.status(400).json({ error: "can't list by Id"})
        }

    },

//Create Student
    async store(req, res){
        const { ra, name, email, cpf } = req.body;
        try {
            await Student.create({
               ra, name, email, cpf
            });    
            return res.status(200).json({ success: "Ra, Name, Email and Cpf created successfully!"}); 
       
        } catch (error) {
            return res.status(400).json({ error: "RA already exists, please change"});
        }
    },

//Update Student
    async update(req, res){
        const { name, email,} = req.body;
        try {
            await Student.update({
                name, email
            }, { 
                where: {
                    id: req.params.id
                },
             });
            return res.status(200).json({ success: "name and email successfully changed!"}); 
        
        } catch (error) {
            return res.status(400).json(error)
        }
    },

//Delete Student
    async delete(req, res){
        try {
            const student = await Student.destroy({  
                where: {
                    id : req.params.id
                }
            });
            return res.status(200).json({ deleted: "deleted successfully"});
        
        } catch (error) {
            return res.status(400).json({ error: "can't delete"})
        }
    },


};