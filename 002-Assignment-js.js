// let emaill = "asdf@gmail.com";

// let email = "dfg.ert@gmail.com";

// console.log(email.includes("@"));

// console.log(email.indexOf("@"));

// console.log(email.includes("."));

// console.log(email.indexOf("."));
// let lastItems = (email.length - 1) - email.indexOf(".");
// console.log(lastItems);
// console.log(lastItems >= 2 && lastItems < 4);

// let firstItems = email.slice(0, email.indexOf("@"));
// console.log(firstItems);
// console.log(firstItems.search(/\W/g));

// let pattern = /\W/g;
// console.log(pattern);
// console.log(firstItems.search(pattern));

let email = prompt("Please enter email :");
function emailvalidator(email) {
    if (email.includes("@") && email.includes(".")) {
        let lastItems = (email.length - 1) - email.indexOf(".");
        let firstItems = email.slice(0, email.indexOf("@"));
        if (firstItems.search(/\W/g) === -1 && (lastItems >= 2 && lastItems < 4)) {
            return "valid";
        } else {
            return "invalid";
        }

    }
}
console.log(emailvalidator(email));
