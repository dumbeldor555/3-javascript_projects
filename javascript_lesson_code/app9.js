// lecture 81

// regular expration
// exec 
// match
//test 
// search
// replace


const regularEx = /hello/;

// useing exec 

// const x = 'oh hello';
// const resulte = regularEx.exec(x);
// console.log(resulte);


// useing match

// const x = 'oh hello there ';
// const result = x.match(regularEx);
// console.log(result);

// useing test 

// const x = 'new hello';
// const result = regularEx.test(x);
// console.log(result);

//useing search 

// const x = 'ok its not hello here';
// const result = x.search(regularEx);
// console.log(result);

// useing replace

// const x = 'Hello';
// const result = x.replace(regularEx);
// console.log(result);

// lecture 082

// let re = /friends/;
// re = /hello/;
// re = /^h/i; // first letter starts with
// re = /o$/;  // last letter ends with 
// re = /^hello$/i; // first letter and last letter start, inshort all character must be same
// re = /h.llo/i;// can sneak in some other character in the place of '.' like h@llo,or h*llo, etc
// re = /friend*/i; // can sneak in any character, and any number of time includeing 0 (means if you not inclue any character that should be fine) like hell#@)@@@@(), and strangly the character befor * symbol is getting ignored , i dont why
// re = /frie?nds/i; // after the ? charecter you can write some other chatacter such as frieond
// re = /frie?nds\?/i; // if you want to include the ? character itself then escape it with '\' symbol


// const str = 'fri#nds';




// function testForRegular(re, str) {
// if(re.test(str)){
//   console.log(`${re.source} is same as ${str}`);
// }else {
//   console.log(`${re.source} is not same as ${str}`);
// }
// }

// testForRegular(re, str);

// lacture 83

let re = /hello/;
re = /hell[abs]/i; //  [] must be abs in place of o in hello
re = /hel[^ok]o/i; // ^  can be anythig in place of second l in hello exept 'ok'
re = /hell[A-Z]/; // must match any upper case letter in place of 'o' in hello
re = /hell[a-z]/; // must match any lower case letter in place of 'o' in hello
re = /hell[A-Za-z]/; // must match ant letter upper case or lower case in place of character 'o' in hello
re = /hell[0-9][0-9]/; // can put any number in place of 'o' in hello including floating numbers


// brackets  // you can make various combination of regular expration
re = /hel{2}o/i; // must occur someCarachter{n} times 
re = /hel{2,6}o/i; // must occur between some a to b times(a and b included) like {2 to 6} times 
re = /hel{2,}o/i; //  must occur atleast {n} number of times

// shortHand 

re = /\w/; // any alphanumeric  character in a string
re = /\w+/; // one or more 
re = /\W/; // upperCase 'W' any non-alphanumeric charecter
re = /\W+/;// one or more non-alphaNumeric charecter 
re = /\d/; // match any digit(number) at any position in string
re = /\d+/;// match any digit(number) at any position 1 or more times
re = /\D/; // match any non-digit at any position 
re = /\D+/; // match any non-digit at any position 1 or more times
re = /\s/;// match any white space 
re =/\s+/; // match any white space 1 or more times
re =/\S+/; // match any non-white space  1 or more times
re =/\S/; // match any non-white space 1 time
re = /hell\b/i; // looks for the word befor '\b' in a string at the end nothig shoud appear after the word 'hell'
re = /\bhell/i;   // does the same thing but at the begining

// assrtion 
re = /l(?=o)/; // true the first l if followed by o 
re = /k(?!n)/; // true if only k is not followed by p

const str = 'helloknowiundekprstand';
const result = re.exec(str);
console.log(result);

function testForRegular(re, str) {
  if(re.test(str)){
    console.log(`${re.source} is same as ${str}`);
  }else {
    console.log(`${re.source} is not same as ${str}`);
  }
  }

  testForRegular(re, str);

