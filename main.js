const LinkedList = require('./list.js');

const list = new LinkedList();
list.append("Animal");
list.append("Cat");
list.prepend("Dog");
console.log(list.toString());
console.log(list.reverse());

console.log(`Size: ${list.size}`);
console.log(`Head: ${list.head}, Tail: ${list.tail}`);
console.log(`At index 2: ${list.at(2).toString()}`);
console.log(`Popped: ${list.pop()}`);
console.log(`Size: ${list.size}`);
console.log(`Index of "Animal": ${list.find("Animal")}`);
console.log(list.toString());
console.log(`Is "Cobra" in list: ${list.contains("Cobra")}`);

list.insertAt("Parrot", 2);
list.insertAt("Snake", 0);
console.log(list.toString());
list.insertAt("Fish", 3);
console.log(`Is "Parrot" in list: ${list.contains("Parrot")}`);
console.log(`At index 4: ${list.at(4).toString()}`);

console.log(list.toString());
console.log(list.reverse());
list.removeAt(3);
console.log(list.toString());
console.log(list.reverse());
console.log(`New Size: ${list.size}`)
list.insertAt("Parrot", 5);
list.removeAt(-1);
list.insertAt("Parrot", -1);
list.removeAt(2);
