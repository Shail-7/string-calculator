const add = (numbers) => {

    try {
        if (numbers) {
            if (typeof numbers == 'string') {


                let numArr;

                // Check for other delimeter.
                let otherDelimeter = (numbers.substring(0, 2) == '//' && numbers.indexOf('\n') == 3 ? numbers.charAt(2) : false);

                if (otherDelimeter) {
                    numbers = numbers.slice(4);
                }

                (otherDelimeter ? numArr = numbers.trim().replace(/(\r\n|\n|\r)/gm, ",").replace(otherDelimeter, ',').split(',') : numArr = numbers.trim().replace(/(\r\n|\n|\r)/gm, ",").split(','))

                const numLen = numArr.length;

                const negNums = numArr?.filter((num) => {
                    if (!isNaN(num) && Math.sign(num) == -1)
                        return num;
                })

                if (negNums?.length == 0) {

                    if (numLen == 1) {
                        if (!isNaN(numArr[0]))
                            return numArr[0];
                        else
                            return 'value is not a number.'
                    } else {
                        const sum = numArr.reduce((sum, num) => {
                            if (!isNaN(sum) && !isNaN(sum))
                                return parseFloat(num) + parseFloat(sum);
                        })
                        if (sum)
                            return sum;
                        else
                            return 'something went wrong while performing the Addition.'
                    }
                } else {

                    return `negatives not allowed ${negNums?.toString()}`
                }

            } else {
                return 'numbers must be of type string.'
            }
        } else {
            if (typeof numbers == 'string' && numbers.trim().length == 0)
                return 0;
            else
                return 'numbers should not be a falsy value.'
        }
    } catch (err) {
        console.error(err)
    }
}

// console.info(add("-1,2,4"))


module.exports = { add }    