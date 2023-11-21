window.onload = function(){

  var form = document.getElementById('login');
  var inputId = document.getElementById('inputId');
  var inputPw = document.getElementById('inputPw');

  function onLogin(e){
    const userId = inputId.value;
    const userPw = inputPw.value;
    if(userId === "rlaehgusqp" && userPw === "1234"){
      document.getElementById('again').className+='hidden';
    }else{
      e.preventDefault();
      document.getElementById('again').classList.remove('hidden');
    }
  }
  
  form.addEventListener("submit", onLogin);

}

