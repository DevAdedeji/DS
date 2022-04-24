// Let and const instead of var

// Let keyword doesnt allow same variable name for two variables in the same scope
// let library = 'React'
// let library = 'jQuery'

// Const keyword allows the properties of an object to be reassigned or updated, but the reference to the variable itself (the memory reference address cannot be changed)
const framework = {
    name: "Angular"
}

framework.name = 'React'

console.log(framework);





