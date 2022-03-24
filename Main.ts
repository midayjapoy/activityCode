import { LetterPrinter } from './LetterPrinter';
const readline = require("readline");


const read_line_interface = readline .createInterface({
	input: process.stdin,
	output: process.stdout
});


read_line_interface.question("Combine or choose from X, Y, Z:  ", function(str: string) {
	read_line_interface.question("Size (must be odd number):  ", function(num: number) {

		const letterPrinter = new LetterPrinter(str, num);
		letterPrinter.print();
		read_line_interface.close()
	});
});


