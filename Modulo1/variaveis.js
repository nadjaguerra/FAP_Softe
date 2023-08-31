let boolVar, bigiVar, strVar, symVar;

console.log(`
Boolean: ${boolVar}
Bigint: ${bigiVar}
String: ${strVar}
Symbol: ${symVar}
`)


boolVar = null;
bigiVar = null;
strVar = null;
symVar = null;


console.log(`

Boolean: ${boolVar}
Bigint: ${bigiVar}
String: ${strVar}
Symbol: ${symVar}
`)

boolVar = false;
bigiVar = 2**50;
strVar = "This is the way.";
symVar = Symbol();

console.log(`

Boolean: ${boolVar}
Bigint: ${bigiVar}
String: ${strVar}
Symbol: ${symVar.toString()}
`)