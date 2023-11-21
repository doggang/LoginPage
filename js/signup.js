function pwChk(){
    const inputPw = document.getElementById('inputPw').value;
    const inputPwChk = document.getElementById('inputPwChk').value;

    if(inputPw == inputPwChk){
        alert("똑같애요");
        return true;
    }else{
        alert("안똑같애요씨벌ㄹ럼아");
        return false;
    }
}
