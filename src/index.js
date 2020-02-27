module.exports = function toReadable (number) {
    const uniqueNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) {
        return (`${uniqueNumber[number]}`);
    }

    if (number >= 20 && number < 100) {
        let ten = Math.floor(number / 10);
        let units = number % 10;
        if(units) {
            return (`${tens[ten - 2]} ${uniqueNumber[units]}`)
        }
        else return (`${tens[ten - 2]}`);
    }

    if (number >= 100 ) {
        let hundreds = Math.floor(number / 100);
        let ten = Math.floor((number % 100) / 10);
        let units = Math.floor((number % 100) % 10);

        if(number % 100 == 0) {
            return (`${uniqueNumber[hundreds]} hundred`);
        }

        if(number % 100 >= 20 && units != 0) {
            return (`${uniqueNumber[hundreds]} hundred ${tens[ten - 2]} ${uniqueNumber[units]}`)
        }

        if(number % 100 >= 20 && units == 0) {
            return (`${uniqueNumber[hundreds]} hundred ${tens[ten - 2]}`)
        }
        
        if(number % 100 < 20) {
            return(`${uniqueNumber[hundreds]} hundred ${uniqueNumber[number % 100]}`);
        }
    }
}
