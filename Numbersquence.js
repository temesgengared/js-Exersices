for (let i = 2; i < 22; i += 2) {

    // if (i == 0) //checking if the number is even
    // console.log(`number sequence :${i}`); //2,4 //}
    // console.log(`first 10 postive even numbers:${i}`);
}


let i = 2;
let tenFirstPostiveEvenNumberCount = 0;
while (tenFirstPostiveEvenNumberCount < 10) {
    if (i % 2 == 0) {
        tenFirstPostiveEvenNumberCount++;
        //console.log(`number sequence from while loop:${i}`)
    }
    i++
}
tenFirstPostiveEvenNumberCount = 0;
i = 2;
do {
    if (i % 2 == 0) {
        tenFirstPostiveEvenNumberCount++;
        console.log(`number sequence from while loop:${i}`)
    }
    i++;
} while (tenFirstPostiveEvenNumberCount < 10);