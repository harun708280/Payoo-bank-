document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
    const phoneNumber=getInputValue('name')
    const pinCode=getInputValue('code')
    
    if (phoneNumber === '01710290619' && pinCode === '1234') {
        window.location.href='./home.html'
        
    }
    
    

    
})