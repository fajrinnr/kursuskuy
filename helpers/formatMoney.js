function formatPrice(price) {
    let strPrice = price.toString().split("");
    let newStr   = "";
    let counter  = 0;
    for (let i = strPrice.length - 1; i >= 0; i--) {
        if (counter < 3) {
            newStr += strPrice[i];                    
        }else{
            counter = 0;
            newStr += "," + strPrice[i];
        }
        counter++;
    }
    newStr = newStr.split("").reverse().join("");
    return `Rp. ${newStr}`;
}

module.exports = formatPrice;