
export class LetterPrinter {
    constructor(public letters: string, public size: number, public placement?: string) {
        this.letters = letters,
        this.size = size,
        this.placement = placement
    }

    print (): void {

        var result: string = "";
        var position: string = ""; 

        for (let i = 0; i < this.letters.length; i++) {
            for (let row = 0; row < this.size; row++) {
                for (let col = 0; col < this.size; col++) {
                    if(this.letters[i] == 'x') {
                        if (row == col || (row + col) == (this.size - 1)) {
                            position = "O"
                        } else {
                            position = " "
                        }
                    } if (this.letters[i] == 'y') {
                        if (row == col && row < Math.floor(this.size/2) || (row + col) == (this.size - 1) && row <= Math.floor(this.size/2) || col == Math.floor(this.size/2) && row >  Math.floor(this.size/2)) {
                            position = "O"
                        } else {
                            position = " "
                        }
                    } if (this.letters[i] == 'z') {
                        if (row == (this.size - 1) || row == 0 || (row + col) == (this.size - 1)) {
                            position = "O"
                        } else {
                            position = " "
                        }
                    }
                    result += position
                }
                result += "\n"
            }    
        }

        console.log(result)
    }
}

