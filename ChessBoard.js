var size = 8;

var output = "";
var count = 0;
var sw = true;

while (count < size * size) {
    count++;
    if (sw) {
        output += " ";
    } else {
        output += "#";
    }
    sw = !sw;
    if (count % size === 0 ) {
        console.log(output);
        output = "";
        if (size % 2 === 0) 
            sw = !sw;
    }
}