const person = {
    name: "Calvin",
    age: 17,
    hobbies: ["lezen", "sporten"]
};

const personJSON = JSON.stringify(person);
console.log(personJSON);    

const jsonString = '{"name":"Calvin","age":17,"hobbies":["lezen","sporten"]}'
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);

console.log(parsedPerson.name);
console.log(parsedPerson.hobbies[1]);

localStorage.setItem("person", personJSON);

const storedPersonJSON = localStorage.getItem("person");
console.log(storedPersonJSON);

const storedPerson = JSON.parse(storedPersonJSON);
console.log(storedPerson);

console.log(storedPerson.name);
console.log(storedPerson.hobbies);

const tasks = [
    {id: 1, description: "Boodschappen doen", completed: false },
    {id: 2, description: "Code schrijven", completed: true},
    {id: 3, description: "Sporten", completed: false}
];

const tasksJSON = JSON.stringify(tasks);
localStorage.setItem("tasks", tasksJSON);

const storedTasksJSON  = localStorage.getItem("tasks");
const storedTasks = JSON.parse(storedTasksJSON);
console.log(storedTasks);

storedTasks.forEach(task => console.log(task.description));



