const add = (numbers) => {

    try {
        if (numbers) {
            if (typeof numbers == 'string') {

                const numArr = numbers.trim().replace(/(\r\n|\n|\r)/gm, ",").split(',');
                // console.log("arr")
                // console.log(numArr)

                const numLen = numArr.length;

                if (numLen == 1) {
                    if (parseFloat(numArr[0]))
                        return numArr[0];
                    else
                        return 'value is not a number.'
                } else {
                    const sum = numArr.reduce((sum, num) => {
                        if (parseFloat(num))
                            return parseFloat(num) + parseFloat(sum);
                    })
                    if (sum)
                        return sum;
                    else
                        return 'something went wrong while performing the Addition.'
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


// console.info(add("1\n2,3"))


module.exports = { add }    