let arr = [
  { id: 1, name: "john", age: 18, profession: "developer" },
  { id: 2, name: "jack", age: 20, profession: "developer" },
  { id: 3, name: "karen", age: 19, profession: "admin" },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  arr.filter((value) => {
    value.profession == "developer" ? console.log(value) : "";
  });
}

function addData() {
  //Write your code here, just console.log
  const data = {
    id: 4,
    name: "Rakesh",
    age: 29,
    profession: "Cleaner",
  };
  arr.push(data);
  for (let value of arr) {
    console.log(value);
  }
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.map((value) => {
    value.profession == "admin" ? "" : console.log(value);
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  const data = [
    {
      id: 5,
      name: "Rohit",
      age: 29,
      profession: "Cleaner1",
    },
    {
      id: 6,
      name: "Romik",
      age: 39,
      profession: "Cleaner2",
    },
  ];

  const array = arr.concat(data);

  for (const value of array) {
    console.log(value);
  }
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log("Consoling Array Variable", arr);
  // Over here I can directly access the variable.
}
