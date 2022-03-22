"use strict";
exports.__esModule = true;
exports.LetterPrinter = void 0;
var x = ["O O", " O ", "O O"];
var y = ["O O", " O ", " O "];
var z = ["OOO", " O ", "OOO"];
var X = ["O   O", " O O ", "  O  ", " O O ", "O   O"];
var Y = ["O   O", " O O ", "  O  ", "  O  ", "  O  "];
var Z = ["OOOOO", "   O ", "  O  ", " O   ", "OOOOO"];
var LetterPrinter = /** @class */ (function () {
    function LetterPrinter(letters, size) {
        this.letters = letters;
        this.size = size;
    }
    LetterPrinter.prototype.print = function () {
        var i, j;
        if (this.size == 3) {
            for (i = 0; i < this.letters.length; i++) {
                for (j = 0; j < eval(this.letters[i].toLowerCase()).length; j++) {
                    console.log(eval(this.letters[i].toLowerCase())[j]);
                }
            }
        }
        else if (this.size == 5) {
            for (i = 0; i < this.letters.length; i++) {
                for (j = 0; j < eval(this.letters[i].toUpperCase()).length; j++) {
                    console.log(eval(this.letters[i].toUpperCase())[j]);
                }
            }
        }
        else {
            console.log('Size can be only 3 or 5.');
        }
    };
    return LetterPrinter;
}());
exports.LetterPrinter = LetterPrinter;
