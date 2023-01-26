const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      }
    ]
  }
];
// FILTER

// Exercise 1: Use the filter method to get all the friends of John Doe
const johnDoeFriends = data.filter(person => person.name === "John Doe")[0].friends;
console.log(johnDoeFriends);
// return geJohn

// Exercise 2: Use the filter method to get all the people who live in New York
const getCityNewY = data.filter(cityN => cityN.address.city.includes('New York'))
console.log(getCityNewY);

// Exercise 3: Use the filter method to get all the people who are older than 30
const olderAge = data.filter(older => older.age > 30)
console.log(olderAge);

// MAP

// Exercise 1: Use the map method to put the names of all the friends of John Doe in a single array (use also the flat method)
const johnDoeFriendsecond = data.filter(person => person.name === "John Doe").map(person => person.friends).flat().map(names => names.name)
console.log(johnDoeFriendsecond);


// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
const getAddress = data.map(addressarray => addressarray.address)
console.log(getAddress);
// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
const getHobbies = data.map(hobbiesFlat => hobbiesFlat.hobbies).flat()
console.log(getHobbies);



// FIND

// Exercise 1: Use the find method to find the first person who lives in Chicago
const findPerson = data.find(person => person.address.city === "Chicago")

console.log(findPerson);

// Exercise 2: Use the find method to find the first person who is older than 30
const olderMan = data.find(person => person.age > 30)
console.log(olderMan);

// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
const findHobbie = data.find(person => person.hobbies.includes("reading"))
console.log(findHobbie);


// FOREACH

// Exercise 1: Use the forEach method to print out the names of all the people in the data array
//////////////////
// back to it!
// let newarr=[]
// const printallNames=data.forEach(person=>person.name)
// newarr.push(printallNames)
// console.log(newarr);
////////////////////////



// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
const newProp = data.forEach((person) => {
  const addAdult = person.isAdult > 18 ? true : false
  return addAdult
})
// Exercise 3: Use the forEach method to print out the names of all the friends of each person
// back to it!
const allFriends = [];
data.forEach(({friends}) => friends.forEach(({name}) => allFriends.push(name)));
console.log(allFriends);


// SOME

// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
const checkHobby=data.some(person=>person.hobbies.includes("cooking"))
console.log(checkHobby);

// Exercise 2: Use the some method to check if any of the people in the data array live in California
const checkCity=data.some(person=>person.address.city.includes("California"))
console.log(checkCity);

// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30
const checkOlder=data.some(person=>person.age > 30)
console.log(checkOlder);


// EVERY

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby
const checkhobbies=data.every(person=>person.hobbies.includes("reading"))
console.log(checkhobbies);
// Exercise 2: Use the every method to check if all the people in the data array live in the same state
  const checkState=data.every((person=>{
    if(person.address.state === data[0].address.state){
      return true
    }  else{
      return false
    }
  }))

// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25


// REDUCE

// Exercise 1: Use the reduce method to get the total age of all the people in the data array

// Exercise 2: Use the reduce method to get the number of people who live in each state

// Exercise 3: Use the reduce method to get the average age of all the people in the data array


// INCLUDES

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"

// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4

// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"
