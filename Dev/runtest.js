
//Sample code to demonstrate constrator fucntions in javascript as we us constractor functions alot in the project.

//This is a constructor function
function User(FirstName, LastName, age, gender) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.age = age;
    this.gender = gender;
}
// 'this' key word refers to objects of the class User that wil be
//created but not the function user it self
var user1 = new User('John', 'Doe', 30, 'Male');
