// Default export function
export default function DoSomething() {
    // Add functionality here
}

// Named export using arrow function
export const DoSomething = () => {
    // Add functionality here
};

// Arrow function component
const MyComponent = () => {
    return <div></div>;
};

// Button with an onClick handler
<button onClick={() => {
    console.log("Hello, world!");
}}>
</button>;

// Ternary operators for conditional rendering and value assignment
let age = 10;
let name = age > 10 && "Redwan"; // If true
name = age > 10 || "Redwan";     // If not true
name = age > 10 ? "Redwan" : "Afzal"; // If-else

const Component = () => {
    return age > 10 ? <div>Redwan</div> : <div>Afzal</div>;
};

// Objects and destructuring
const name = "Redwan";
const age = 20;

const person = {
    name,
    age,
    isMarried: false, // Fixed assignment syntax
};

const { name: personName, age: personAge, isMarried } = person;

const person2 = { ...person, name: "Afzal" }; // Spread operator to update the name

// Arrays and the spread operator
const names = ["Redwan", "Rahman", "Afzal"];
const names2 = [...names, "Joel"]; // Adding 'Joel' to the names array

// Map and Filter
const nameList = ["Redwan", "Rahman", "Afzal"];

// Using .map() to transform the array
const transformedNames = nameList.map((name) => {
    return <h1>{name}</h1>;
});

// Using .filter() to exclude specific values
const filteredNames = nameList.filter((name) => {
    return name !== "Redwan"; // Remove all occurrences of "Redwan"
});

// Example with repeated names
const repeatedNames = ["redwan", "afzal", "rahman", "redwan", "Khan", "redwan"];
const uniqueNames = repeatedNames.filter((name) => {
    return name !== "redwan";
});

// Async/Await + Fetch Example
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};