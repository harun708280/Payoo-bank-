
document.getElementById('cash-outBtn').addEventListener('click',function(event){
    event.preventDefault();
    ShowSection('cash-out-form')
})

document.getElementById('add-moneyBtn').addEventListener('click',function(event){
    event.preventDefault();
    ShowSection('add-money-form')
})

document.getElementById('transactions-btn').addEventListener('click',function(event){
     event.preventDefault();
     ShowSection('Transactions-from')

 })

document.getElementById('transfer').addEventListener('click',function(event){
    event.preventDefault();
    ShowSection('send-money-from')
    
}) 