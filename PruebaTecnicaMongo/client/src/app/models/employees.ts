export class Employee{

  _id?: number;
  name: string;
  email: string;
  sex: string;
  area: string;
  description: string;
  boletin: string;
  rols: string;

  constructor(name: string,email: string,sex: string,area:string,description:string, boletin:string,rols: string){
    this.name=name;
    this.email=email;
    this.sex=sex;
    this.area=area;
    this.description=description;
    this.boletin=boletin;
    this.rols=rols
  }
}
