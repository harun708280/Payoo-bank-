document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault()
    const amountInput=document.getElementById('cash-input-ammount').value;
    const totalAmount=document.getElementById('totalamount').innerText;
    const code = document.getElementById('cash-code').value;
    if (code === '1234') {
        const totalAmountNumber=parseFloat(totalAmount);
        const amountInputNumber=parseFloat(amountInput);
        if (totalAmountNumber > amountInputNumber) {
            const cashout=totalAmountNumber-amountInputNumber;
            document.getElementById('totalamount').innerText=cashout;

        }else{
            alert('Low Balance')
        }
    }else{
        alert('Invalid Code')
    }
    document.getElementById('cash-input-ammount').value='';
    document.getElementById('cash-code').value=''



    
   
    
})