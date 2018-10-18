// console.log("***Задание №1***");
// let n = 100, i = 15;
// while (true) {
//     if ( i == 1) {
//         i++;
//         continue;
//     }
//     if (i % 2 == 0) {
//         i++;
//         continue;
//     }
//     if (i % 3 == 0) {
//         i++;
//         continue;
//     }
//     if (i % 4 == 0) {
//         i++;
//         continue;
//     }
//     if (i % 5 == 0) {
//         i++;
//         continue;
//     }
//     if (i % 6 == 0) {
//         i++;
//         continue;
//     }
//     if (i % 7 == 0) {
//         i++;
//         continue;
//     }
//     if (i % 8 == 0) {
//         i++;
//         continue;
//     }
//     if (i % 9 == 0) {
//         i++;
//         continue;
//     }
//     console.log(i++);
//     if (i > n) {
//         break;
//     }
// }
    
        
    // console.log("*** Задание №2***");
    // let i = 0;
    // do {
    //         if (i % 2 !== 0) {
    //         console.log ( i + '-нечетное число');
    //     }
    //     else if ( i % 2 == 0 && i !== 0) {
    //         console.log ( i + '- четное число');
    //     }
    //     else  {
    //         console.log ( i + '- равно ноль');
    //     }
    //     i++;
    // }    while ( i < 11 )
    
    // console.log("***Задание №3***");
    // let i;
    // for (i = 0; i <= 9;)
    // console.log(i++);

    // console.log("***Задание №4***");
    // let i, str = '';
    // for ( i=1; i <= 20; i++) {
    //     str += 'x';
    // console.log (str);    
    // }

    console.log("***Задание №5***");

let basket = [2, 3, 4, 5, 7, 9];
function countBasketPrice (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log (basket);
} 
countBasketPrice(basket);



