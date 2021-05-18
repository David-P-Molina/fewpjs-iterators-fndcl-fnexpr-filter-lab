const { stringContaining } = require("expect")

// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(search => 
    search.toLowerCase() === name.toLowerCase()
    )};

function fuzzyMatch(drivers, name) {
    return drivers.filter(search =>
        search[0] === name[0]
    )
}
function matchName(drivers, name) {
    return drivers.filter(search =>
        search.name === name
        )
}