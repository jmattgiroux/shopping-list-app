function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}
module.exports = filterByTerm;
