
const x: string[] = ["O O", " O ", "O O"];
const y: string[] = ["O O", " O ", " O "];
const z: string[] = ["OOO", " O ", "OOO"];
const X: string[] = ["O   O"," O O ", "  O  ", " O O ", "O   O"];
const Y: string[] = ["O   O", " O O ", "  O  ", "  O  ","  O  "];
const Z: string[] = ["OOOOO", "   O ", "  O  ", " O   ", "OOOOO"];


export class LetterPrinter{

constructor (public letters: string, public size: number) {}

print(): void {
        
        var i: number, j: number;
        
        if(this.size == 3) {
            for (i = 0; i < this.letters.length; i++) {
                for (j = 0; j < eval(this.letters[i].toLowerCase()).length; j++) {
                	console.log(eval(this.letters[i].toLowerCase())[j])                                 
                }
            }
    	} else if (this.size == 5) {
    		for (i = 0; i < this.letters.length; i++) {
                for (j = 0; j < eval(this.letters[i].toUpperCase()).length; j++) {
                	console.log(eval(this.letters[i].toUpperCase())[j])                                 
            	 }   
         	}
    	} else {
    		console.log('Size can be only 3 or 5.');
    	}
    }
}        
