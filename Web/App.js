// Objectos en JavaScript

const user = {
    "name" : "Neo",
    "age" : "20",
    "lastname" : "ray",
    "married" : "false"
}

console.log(user);


console.log(JSON.stringify(user))

// Convertir Objectos a Json

const friends = [
    {name: "leo", lastname: "joe", age: 23},
    {name: "neo", lastname: "jhon", age: 25},
    {name: "jeo", lastname: "doe", age: 18}
]

user.friends = friends

let output = ''

for (let i = 0; i < friends.length; i++){
    output = output + <li>${friends[i].name}</li>

}

console.log(JSON.stringify(friends))

document.getElementById('aside-list').innerHTML = output