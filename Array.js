// Array en JavaScript con Json

const user = {
    "name" : "Neo",
    "age" : "20",
    "lastname" : "ray",
    "married" : "false",
}

console.log(user)

console.log(JSON.stringify(user))

const friends = [
    {name: "leo", lastname: "joe", age: 23},
    {name: "neo", lastname: "jhon", age: 25},
    {name: "jeo", lastname: "doe", age: 18}
]

user.friends = friends

console.log(JSON.stringify(user))