function sum(value1, value2) {
    if (typeof value1 == "number" && typeof value2 == "number") {
        return  value1 + value2;
} else {
    return "error";
}
}

console.log(sum(4, "Mietek"));