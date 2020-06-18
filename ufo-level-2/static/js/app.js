// from data.js
let tableData = data;

// select the button doesn't work here... not sure why
// let button = d3.select("button");\

// select for filtered input
let filter = d3.selectAll(".filter");

// select the form
let form = d3.select("form");

// creating event handlers
// button.on("click", createTable);
filter.on("change", createTable);

// this accounts for someone hitting enter after their query is input 
form.on("submit", createTable);

// creating a blank object to store query data
inputDict = {};

function createTable() {
// creates the table using filtered data to search through the set of data
    let filteredData = tableData;

    // prevent the page from refreshing
    d3.event.preventDefault();

    // get value property of the input elements
    let inputSelection = d3.select(this).select("input");
    let inputValue = inputSelection.property("value");
    let inputID = inputSelection.attr("id");
    
    // updates the object to have a key/value pair
    inputDict[inputID] = inputValue;
    console.log(inputDict);
    Object.entries(inputDict).forEach(([key, value]) => {
        console.log(key, value);
        filteredData = filteredData.filter(ufo => ufo[key] === value);
        console.log(filteredData);
    });
    
    // select the table element
    let ufoTable = d3.select("tbody");

    // append one table row for each data object
    filteredData.forEach((ufoData) => {
        let row = ufoTable.append("tr");

        Object.entries(ufoData).forEach(([key, value]) => {
            let cell= row.append('td');
            cell.text(value);
        });
    });

};