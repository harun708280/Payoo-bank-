document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault()
   const amountInput=document.getElementById('input-ammount').value;
   const totalAmount=document.getElementById('totalamount').innerText;
   const code = document.getElementById('code').value;
   if (code==='1234') {
    const amountInputNumber=parseFloat(amountInput);
    const totalAmountNumber=parseFloat(totalAmount);
    console.log(amountInputNumber,totalAmountNumber);
    
    const addMoney=totalAmountNumber+amountInputNumber;
    document.getElementById('totalamount').innerText=addMoney;
   
    
   }else{
    alert('Incorrect Pin Code')
   }
   document.getElementById('input-ammount').value='';
   document.getElementById('code').value=''
   
    
})




