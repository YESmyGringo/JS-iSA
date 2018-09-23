const vovo = "siema";

if(vovo >= 1){
    console.log("It's number:", vovo);
} else if(typeof vovo == "string"){
    console.log("It's string:", vovo);
} else{
    console.log("Undefinded!");
}



const value = "hello";

switch(typeof value){
    case "number":
        console.log("It's number!:", value);
        break;

    case "string":
        console.log("It's string!:", value);
        break;

    default:
        console.log("Undefinded! ERROR!");
}

