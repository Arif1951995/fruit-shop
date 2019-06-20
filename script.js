let message, inputRs, total, applePrice, bananaPrice, orangePrice, appleCount, bananaCount, orangeCount, appleTotalPrice, bananaTotalPrice, orangeTotalPrice;
applePrice = 10;
bananaPrice = 7;
orangePrice = 13;
appleCount = 0;
bananaCount = 0;
orangeCount = 0;
appleTotalPrice = 0;
bananaTotalPrice = 0;
orangeTotalPrice = 0;
message = document.getElementById('message');

// APPLE PLUS BUTTON

document.getElementById('applePlus').addEventListener('click', function () {
    inputRs = Number(document.getElementById('inputRs').value)
    if (inputRs > 0) {
        appleCount++;
        appleTotalPrice = applePrice * appleCount;

        total = appleTotalPrice + bananaTotalPrice + orangeTotalPrice;

        if (total > inputRs) {
            message.innerHTML = `you need Rs. ${total - inputRs} more to complete your order`;
        } else if (appleCount < 0) {
            message.innerHTML = `You can't buy with Negative Value`
        } else {
            message.innerHTML = ''
        }


        document.querySelector('.apple input').placeholder = appleCount;
        document.querySelector('.outPutTotal span').innerHTML = total;
    } else {
        alert('PLEASE ENTER VALID RS')
    }


})

// APPLE MINUS BUTTON


document.getElementById('appleMinus').addEventListener('click', function () {
    inputRs = Number(document.getElementById('inputRs').value);

    if (inputRs > 0) {
        appleCount--;
        appleTotalPrice = applePrice * appleCount;
        total = appleTotalPrice + bananaTotalPrice + orangeTotalPrice;
        if (total > inputRs) {
            message.innerHTML = `you need Rs. ${total - inputRs} more to complete your order`;
        } else if (appleCount < 0) {
            message.innerHTML = `You can't buy with Negative Value`
        } else {
            message.innerHTML = ''
        }

        document.querySelector('.apple input').placeholder = appleCount;
        document.querySelector('.outPutTotal span').innerHTML = appleTotalPrice;
    } else {
        alert('PLEASE ENTER VALID RS')

    }

})


// BANANA PLUS BUTTON

document.getElementById('bananaPlus').addEventListener('click', function () {
    inputRs = Number(document.getElementById('inputRs').value);

    if (inputRs > 0) {
        bananaCount++;
        bananaTotalPrice = bananaPrice * bananaCount;
        total = appleTotalPrice + bananaTotalPrice + orangeTotalPrice;
        if (total > inputRs) {
            message.innerHTML = `you need Rs. ${total - inputRs} more to complete your order`;
        } else if (bananaCount < 0) {
            message.innerHTML = `You can't buy with Negative Value`
        } else {
            message.innerHTML = ''
        }


        document.querySelector('.banana input').placeholder = bananaCount;
        document.querySelector('.outPutTotal span').innerHTML = total;

    } else {
        alert('PLEASE ENTER VALID RS')

    }

})


// BANANA MINUS BUTTON


document.getElementById('bananaMinus').addEventListener('click', function () {
    inputRs = Number(document.getElementById('inputRs').value);

    if (inputRs > 0) {
        bananaCount--;
        bananaTotalPrice = bananaPrice * bananaCount;
        total = appleTotalPrice + bananaTotalPrice + orangeTotalPrice;
        if (total > inputRs) {
            message.innerHTML = `you need Rs. ${total - inputRs} more to complete your order`;
        } else if (bananaCount < 0) {
            message.innerHTML = `You can't buy with Negative Value`
        } else {
            message.innerHTML = ''
        }
        document.querySelector('.banana input').placeholder = bananaCount;
        document.querySelector('.outPutTotal span').innerHTML = total;
    } else {
        alert('PLEASE ENTER VALID RS')

    }

})



// ORANGE PLUS BUTTON

document.getElementById('orangePlus').addEventListener('click', function () {
    inputRs = Number(document.getElementById('inputRs').value);

    if (inputRs > 0) {
        orangeCount++;
        orangeTotalPrice = orangePrice * orangeCount;
        total = appleTotalPrice + bananaTotalPrice + orangeTotalPrice;
        if (total > inputRs) {
            message.innerHTML = `you need Rs. ${total - inputRs} more to complete your order`;
        } else if (orangeCount < 0) {
            message.innerHTML = `You can't buy with Negative Value`
        } else {
            message.innerHTML = ''
        }

        document.querySelector('.orange input').placeholder = orangeCount;
        document.querySelector('.outPutTotal span').innerHTML = total;

    } else {
        alert('PLEASE ENTER VALID RS')

    }


})



// ORANGE MINUS BUTTON


document.getElementById('orangeMinus').addEventListener('click', function () {
    inputRs = Number(document.getElementById('inputRs').value);

    if (inputRs > 0) {
        orangeCount--;
        orangeTotalPrice = orangePrice * orangeCount;
        total = appleTotalPrice + bananaTotalPrice + orangeTotalPrice;
        inputRs = Number(document.getElementById('inputRs').value);

        if (total > inputRs) {
            message.innerHTML = `you need Rs. ${total - inputRs} more to complete your order`;
        } else if (orangeCount < 0) {
            message.innerHTML = `You can't buy with Negative Value`
        } else {
            message.innerHTML = ''
        }

        document.querySelector('.orange input').placeholder = orangeCount;
        document.querySelector('.outPutTotal span').innerHTML = total;
    } else {
        alert('PLEASE ENTER VALID RS')

    }



})

















