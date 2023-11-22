function pwChk(){
    const inputPw = document.getElementById('inputPw').value;
    const inputPwChk = document.getElementById('inputPwChk').value;
    
    if(inputPw == inputPwChk){
        if(document.getElementById('again').className=='hidden'){
            document.getElementById('success').classList.remove('hiddensuccess');
            alert("회원가입이 완료되었습니다.");
            return true;
        }else{
            document.getElementById('again').className +='hidden';
            document.getElementById('success').classList.remove('hiddensuccess');
            alert("회원가입이 완료되었습니다.");
            return true;
        }
    }else{
        document.getElementById('again').classList.remove('hidden');
        return false;
    }
}
