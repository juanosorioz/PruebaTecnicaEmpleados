const Employee = require('../models/employees')

exports.createEmployee = async (req,res) =>{
  try {
    let employee;
    employee = new Employee(req.body);
    await employee.save()
    res.send(employee)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error')
  }
}

exports.getEmployees = async (req,res) =>{
  try {
    const employees = await Employee.find();
    res.json(employees)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error')
  }
}

exports.getEmployee = async (req,res) =>{
  try {
    let employee = await Employee.findById(req.params.id);
    if(!employee){
      res.status(500).send('El Empleado no Existe');
    }
    res.json(employee);
  } catch (error) {
    console.log(error)
    res.status(500).send('Error')
  }
}

exports.updateEmployee = async (req,res) =>{
  try {
    const {name,email,sex,area,description,boletin,rols} = req.body
    let employee = await Employee.findById(req.params.id);
    if(!employee){
      res.status(500).send('El Empleado no Existe');
    }
    employee.name=name;
    employee.email=email;
    employee.sex=sex;
    employee.area=area;
    employee.description=description;
    employee.boletin=boletin;
    employee.rols=rols;

    employee = await Employee.findByIdAndUpdate(
      {_id:req.params.id},employee,{new: true})
      res.json(employee);

  } catch (error) {
    console.log(error)
    res.status(500).send('Error')
  }
}

exports.deleteEmployee = async (req,res) =>{
  try {
    let employee = await Employee.findById(req.params.id);
    if(!employee){
      res.status(500).send('El Empleado no Existe');
    }
    await Employee.findByIdAndRemove({_id:req.params.id})
    res.json({msg: "Empleado Eliminado"})
  } catch (error) {
    console.log(error)
    res.status(500).send('Error')
  }
}