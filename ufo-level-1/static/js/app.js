// from data.js
let tableData = data;

// select the button
let button = d3.select("button");

// select the form
let form = d3.select("form");

// creating event handlers
button.on("click", createTable);
form.on("submit", createTable);

function createTable() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // selecting the input element and getting raw HTML code
    let inputElement = d3.select("#datetime");

    // get value property of the input element
    let inputValue = inputElement.property("value");

    let fildteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(fildteredData);

    // select the table element
    let ufoTable = d3.select("tbody");

    // append one table row for each data object
    fildteredData.forEach((ufoData) => {
        let row = ufoTable.append("tr");

        Object.entries(ufoData).forEach(([key, value]) => {
            let cell= row.append('td');
            cell.text(value);
        });
    });




};