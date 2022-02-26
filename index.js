// Code your solution here

array = ["bob","sam"]

function findMatching (array, name) {
    return array.filter(function (x) {
        return x.toUpperCase() === name.toUpperCase(); 
    })
}

function fuzzyMatch (array, string) {
    return array.filter(function (x) {
        return string === x.substring(0, string.length)
    })
}

function matchName (array, string) {
    return array.filter (function (x) {
        return x.name === string;
    })
}