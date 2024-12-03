// ? 6. Create an object called person with name = John, age = 50, Then,access the object to alert("John is 50").
   
let person ={
    name: 'Jone',
    age: 50,
    fullName : function() {
      return this.name + " is " + this.age;
    }
  }
  console.log(person.fullName());  //Jone is 50.
  