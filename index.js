let {names} = require('./messageList')

function saySomething(somethingToSay){
    console.log(somethingToSay)
}

saySomething(names)
saySomething("Welcome to Node.js!")
saySomething("Pretty cool, right?")

// for (const name of names) {
//     saySomething(name)
// }

names.forEach(item => {
    saySomething(item);
});