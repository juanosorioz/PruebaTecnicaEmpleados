const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
  name:{
    type:String,
    require: true
  },
  email:{
    type:String,
    require: true
  },
  sex:{
    type:String,
    require: true
  },
  area:{
    type:String,
    require: true
  },
  description:{
    type:String,
    require: true
  },
  boletin:{
    type:String,
    require: true
  },
  rols:{
    type:String,
    require: true
  },
  fechacreacion:{
    type:Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Empleado', employeeSchema)