document.getElementById('send-money').addEventListener('click',function(event){
    event.preventDefault();
    const totalamount=Number(getTextValue('totalamount'));
    const code = Number(getInputValue('send-money-code'));
    const inputAmount=Number(getInputValue('send-money-inputAmount'))
    if (totalamount>inputAmount && code===1234) {
        const mainAmount=totalamount-inputAmount;
        document.getElementById('totalamount').innerText=mainAmount;

        ShowSection('latest-payment')
        
        const latestPayment=document.getElementById('latest-payment');
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="flex justify-between items-center w-11/12 mx-auto mt-9 py-2 px-3 bg-white rounded shadow-2xl" >
            <div class="flex space-x-12 items-center">
                <div class="bg-gray-200 rounded-full p-3">
                    <span><i class="fa-solid fa-sack-dollar text-orange-400 text-2xl"></i></span>
                </div>
                <div class="">
                    <p class="font-bold ">Send Money ${inputAmount}</p>
                    <p>Today 01:44 AM</p>
                </div>
            </div>
            <div class="">
                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
        </div>
        `
        latestPayment.appendChild(div);

        const Transaction=document.getElementById('Transaction-History-info')
        const randomt=Math.floor(Math.random()*9863212331)
        const divs=document.createElement('div');
        divs.innerHTML=`
        <div class="flex justify-between items-center w-11/12 mx-auto mt-9 py-2 px-3 bg-white rounded shadow-2xl" >
            <div class="flex space-x-12 items-center">
                <div class="bg-gray-200 rounded-full p-3">
                    <span><i class="fa-solid fa-sack-dollar text-orange-400 text-2xl"></i></span>
                </div>
                <div class="">
                    <p class="font-bold ">Send Money ${inputAmount}</p>
                    <p>Trans : ${randomt}</p>
                </div>
            </div>
            <div class="">
                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
        </div>
        `
        Transaction.appendChild(divs)
    }else{
        alert('something Wents Wrong')
    }
    

    
})