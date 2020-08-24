const add = (input) => {
    if (input.length === 0) return 0
    let delimiter = /,|\n/;
    let newInput = input;

    ({ delimiter, newInput } = checkNewDelimiter(input, delimiter, newInput));

    const splittedInput = newInput.split(delimiter);
    checkSyntax(splittedInput);
    return sumInput(splittedInput);
}

function checkNewDelimiter(input, delimiter, newInput) {
    if (input.slice(0, 2) === '//') {
        delimiter = input[2]
        newInput = input.slice(4)
    }
    return { delimiter, newInput }
}

function checkSyntax(splittedInput) {
    if (splittedInput.includes(""))
        throw new Error("syntax error");
}

function sumInput(splittedInput) {
    let negativeNumber = [];
    const ans = splittedInput.reduce((sum, currentValue) => {
        let currentNumber = Number(currentValue)
        if (currentNumber < 0) {
            negativeNumber.push(currentNumber)
        }
        return sum + currentNumber
    }, 0);

    if (negativeNumber.length > 0) {
        throw new TypeError(`can not be negative: ${negativeNumber}`);
    }

    return ans;
}

module.exports = {
    add
}

