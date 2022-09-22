console.log("Hello World!");

//console.error()
//console.table()
//console.warn()
//console.time()
//console.timeEnd()

let name = "Lee";
let age = 25;
let isSingle = false;
let hobby =["watching anime","playing basketball","Playing video games"];
let jsonObject ={ name: name, age: age, isSingle: isSingle, hobby: hobby};
let run = function(){
    console.log(name + "is running,");
}
console.log("My name is" + name, 
"My age is " + age,
 "Am I taken?" + isSingle, 
  "My Hobbies are" + hobby
  );
  console.log(jsonObject);