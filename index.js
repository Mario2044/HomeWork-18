// Написати функцію, яка приймає 1 параметр. з тим, 
// сумуючи ці числа що передали перший раз і т. д.

function culcSum(a) {
    let counter = a;
    return (b) => {
        counter += b
        console .log(counter);
    }
}

let sum = culcSum(0);

sum(3);
sum(5);
sum(12);
sum(40);
sum(50);