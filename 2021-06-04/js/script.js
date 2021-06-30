//Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее:


/*
let getFloat = ((str) =>  {
    let input, number;

    while (true) {
        input = prompt(str);
        if ((number = +input) !== parseFloat(input) || !Number.isFinite(number))
            alert("Not a number");
        else break;
    }
    return number;
})

let num1 = getFloat("Number 1");
let num2 = getFloat("Number 2");

if (num1 > num2) {
    alert(num1);
}
else if (num1 < num2) {
    alert(num2);
}
else {
    alert("Numbers are equal");
}
*/



///////////////////////////


//Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:


/*
function minMax(str){
    const numbers = str.split(' ').map(value => +value);

    const result = {
        min: numbers[0],
        max: numbers[0]
    };

    for(let i = 1; 1 < numbers.length; i++){
        if(numbers[i] < result.min) result.min = numbers[i];
        if(numbers[i] > result.max) result.max = numbers[i];
    }   

    return `${result.min} ${result.max}`;

}

console.log(minMax('-9 5 6 78 100 87'));
*/




///////////////////////////////////



//Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.


/*
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
}

console.log( findLongestWord('Аргентина манит негра') );
*/


