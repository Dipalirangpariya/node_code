let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    for (let k = 0; k <= 2 * (i - 1); k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);



//Pattern 2


let a = 5;
let string_str = "";

for (let i = 1; i <= a; i++) {
    for (let j = 1; j < i; j++) {
        string_str += " ";
    }
    for (let k = 1; k <= 2 * (a - i + 1) - 1; k++) {
        string_str += k;
    } string_str += "\n";
} console.log(string_str);

// pattern 3


let b = 5;
let str = "";
let i = 1;
while( i <= b) {
    for (let j = 0; j < i; j++) {
        str += "*";
    } 
    i++;
    str += "\n";
}

for (let i = 1; i <= b - 1; i++) {
    for (let j = 0; j < b - i; j++) {
        str += "*";
    }
    str += "\n";
} console.log(str);