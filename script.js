window.onload = function(){

  var form = document.getElementById('login');
  var inputId = document.getElementById('inputId');
  var inputPw = document.getElementById('inputPw');
  
  function onLogin(e){
    const userId = inputId.value;
    const userPw = inputPw.value;
    if(userId === "rlaehgusqp" && userPw === "1234"){
      alert("정답");
    }else{
      e.preventDefault();
      alert("떙");
    }
  }
  
  form.addEventListener("submit", onLogin);

}

