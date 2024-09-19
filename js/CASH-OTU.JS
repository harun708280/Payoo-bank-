document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const mainAmounts=Number(getTextValue('totalamount'));
    const ammountInput=Number(getInputValue('cash-input-ammount'));
    const code =Number(getInputValue('cash-code'))

    if (mainAmounts>ammountInput && code===1234) {
        const totalamounts=mainAmounts-ammountInput;
        document.getElementById('totalamount').innerText=totalamounts;
        
    }
    ShowSection('latest-payment')
    const latestPayment =document.getElementById('latest-payment');
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="flex justify-between items-center w-11/12 mx-auto mt-9 py-2 px-3 bg-white rounded shadow-2xl" >
            <div class="flex space-x-12 items-center">
                <div class="bg-gray-200 rounded-full p-3">
                    <span><i class="fa-solid fa-sack-dollar text-orange-400 text-2xl"></i></span>
                </div>
                <div class="">
                    <p class="font-bold ">Cash Out ${ammountInput}</p>
                    <p>Today 01:44 AM</p>
                </div>
            </div>
            <div class="">
                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
        </div>
    `
    latestPayment.appendChild(div)
    const TransactionHistoryInfo=document.getElementById('Transaction-History-info')
    const randomT=Math.floor(Math.random()* 78612351)
    const divs =document.createElement('div');
    divs.innerHTML=`
    <div class="flex justify-between items-center w-11/12 mx-auto mt-9 py-2 px-3 bg-white rounded shadow-2xl" >
          <div class="flex space-x-12 items-center">
              <div class="bg-gray-200 rounded-full p-3">
                  <span><i class="fa-solid fa-sack-dollar text-orange-400 text-2xl"></i></span>
              </div>
              <div class="">
                  <p class="font-bold "> Add Money ${inputAmount}</p>
                  <p>Trans : ${randomT}</p>
              </div>
          </div>
          <div class="">
              <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
          </div>
      </div>
    `
    TransactionHistoryInfo.appendChild(divs)

})
