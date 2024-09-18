document.getElementById('add-moneyBtn').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('latest-payment').classList.add('hidden')
    
})

document.getElementById('cash-outBtn').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('latest-payment').classList.add('hidden')
})

document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href='./index.html'
    
})