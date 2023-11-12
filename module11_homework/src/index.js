let num = 1.5;
export function countDown(num) {
    let arr = [];
    if (num > 1 && num % 1 == 0) {
        for (let i = num; i > 0; i--) {
            arr.push(i);
        }
        let str = arr.join(' ');
        console.log(str);
        return str;
    } else {
        let error = 'Введите целое число больше нуля!';
        console.log(error);
        return error;
    }
}
countDown(num);