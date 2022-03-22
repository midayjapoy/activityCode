"use strict";
exports.__esModule = true;
var LetterPrinter_1 = require("./LetterPrinter");
var readline = require("readline");
var read_line_interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
read_line_interface.question("Combine or choose from X, Y, Z:  ", function (str) {
    read_line_interface.question("Choose a size between 3 and 5:  ", function (num) {
        var letterPrinter = new LetterPrinter_1.LetterPrinter(str, num);
        letterPrinter.print();
        read_line_interface.close();
    });
});
