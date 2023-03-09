console.log('1.Вивести на сторінку в один рядок через кому числа від 10 до 20.')

let i = 10;
let arr = [];
while (i <= 20) {
    arr.push(i);
    i++;
}
console.log(arr);


console.log('2.Вивести квадрати чисел від 10 до 20.')

let array = [];
for (let number = 10; number <= 20; number) {
    array.push(number * 2);
    number++;
}
console.log(array);

console.log('3.Вивести таблицю множення на 7.')

let res = '';
for (let i = 7; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {
        res += ' ' + i * j;
        if (i * j < 10) {
            res += ' ';
        }
    }
    console.log(res);
}

console.log('4.Знайти суму всіх цілих чисел від 1 до 15.')

let sum = 0;
for (let i = 0; i <= 15; i++) {
    sum = sum + i;
}
console.log(sum);


console.log('5.Знайти добуток усіх цілих чисел від 15 до 35.')

let mult = 15;
for (let i = 15; i <= 35; i++) {
    mult = mult * i;
}
console.log(mult);


console.log('6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.')

let average = 1;
for (let i = 1; i <= 500; i++) {
    summa = average + i;
    resultAverage = summa / 500;
}
console.log(resultAverage);


console.log('7.Вивести суму лише парних чисел в діапазоні від 30 до 80.')

let summ = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2) {
        summ = summ + i;
    }
}
console.log(summ);


console.log('8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.')

let numbers = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        numbers.push(i);
    }
}
console.log(numbers);


console.log('9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.')

let natural = prompt('Введите любое натуральное число');
for (let i = 2; i * 2 <= natural; i++) {
    if (natural % i == 0) {
        console.log('дільник ' + i);
    }
}

console.log('10.Визначити кількість його парних дільників.')

let count = 0;
for (let i = 2; i * 2 <= natural; i++) {
    if (natural % i == 0) {
        if (i % 2 === 0) {
            count++;
        }
    }
}
console.log('кількість його парних дільників. ' + count);




console.log('11.Знайти суму його парних дільників.')

let summ1 = 0;
for (let i = 2; i * 2 <= natural; i++) {
    if (natural % i == 0) {
        if (i % 2 === 0) {
            summ1 += i;
        }
    }
}
console.log('сума його парних дільників. ' + summ1);



console.log('12.Надрукувати повну таблицю множення від 1 до 10.')

rest = [];
for ( i = 1; i <= 9; i=i +1) {
    console.log('таблиця множення на ' + i);
    for ( j = 1; j <= 9; j=j+1) {
        rest =  i * j
        console.log(rest);
    }

}