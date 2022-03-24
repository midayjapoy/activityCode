"use strict";
exports.__esModule = true;
exports.LetterPrinter = void 0;
var LetterPrinter = /** @class */ (function () {
    function LetterPrinter(letters, size, placement) {
        this.letters = letters;
        this.size = size;
        this.placement = placement;
        this.letters = letters,
            this.size = size,
            this.placement = placement;
    }
    LetterPrinter.prototype.print = function () {
        var result = "";
        var position = "";
        for (var i = 0; i < this.letters.length; i++) {
            for (var row = 0; row < this.size; row++) {
                for (var col = 0; col < this.size; col++) {
                    if (this.letters[i] == 'x') {
                        if (row == col || (row + col) == (this.size - 1)) {
                            position = "O";
                        }
                        else {
                            position = " ";
                        }
                    }
                    if (this.letters[i] == 'y') {
                        if (row == col && row < Math.floor(this.size / 2) || (row + col) == (this.size - 1) && row <= Math.floor(this.size / 2) || col == Math.floor(this.size / 2) && row > Math.floor(this.size / 2)) {
                            position = "O";
                        }
                        else {
                            position = " ";
                        }
                    }
                    if (this.letters[i] == 'z') {
                        if (row == (this.size - 1) || row == 0 || (row + col) == (this.size - 1)) {
                            position = "O";
                        }
                        else {
                            position = " ";
                        }
                    }
                    result += position;
                }
                result += "\n";
            }
        }
        console.log(result);
    };
    return LetterPrinter;
}());
exports.LetterPrinter = LetterPrinter;
