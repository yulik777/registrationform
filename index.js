
    function showError(){
        let email = document.getElementById
        ("email");
        let password = document.getElementById
        ("psw");
         let name = document.getElementById
         ("name");
    
        document.getElementById('errorMessageemail')
        .innerHTML = " ";
        document.getElementById('errorMessagepsw')
       .innerHTML = " ";
       document.getElementById('errorMessageName')
       .innerHTML = " ";
    
       if(name.value == '')
        {document.getElementById('errorMessageName')
        .innerHTML+="Введите имя<br>";}
    
        if(email.value == '')
        {document.getElementById('errorMessageemail')
        .innerHTML += "Ваш email не заполнен<br>";}
    
        if(psw.value == '')
        {document.getElementById('errorMessagepsw')
        .innerHTML+="Ваш пароль не заполнен<br>";}
    
        else
    {alert(`Добро пожаловать, ${name.value}!`);
    return true;
    }}
    
    