function getInputValue(id){
    const inputValue=document.getElementById(id).value;
    return inputValue;
}

function getTextValue(id){
    const textValue=document.getElementById(id).innerText;
    return textValue;
}

function ShowSection(id){
    document.getElementById('latest-payment').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('Transactions-from').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}