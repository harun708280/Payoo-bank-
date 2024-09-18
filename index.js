const loginBtn=document.getElementById('login-btn');


loginBtn.addEventListener('click',function(event){
    event.preventDefault();
    const code = document.getElementById('code').value;
    const names = document.getElementById('name').value;
    console.log(code,names);
    
     if (code==='1234' && names==='01710290619') {
         window.location.href='./home.html'
        
     }else{
         alert('Number or Pin-code Not Valid')
     }
    document.getElementById('code').value=''
    document.getElementById('name').value=''
})
