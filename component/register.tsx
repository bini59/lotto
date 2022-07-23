import style from "../styles/register.module.sass"

// 휴대폰 인증 관련 코드
// // 휴대폰 번호 입력 부분
// function changePhone1(){
//     const phone1 = document.getElementById("phone1").value // 010
//     if(phone1.length === 3){
//         document.getElementById("phone2").focus();
//     }
// }
// function changePhone2(){
//     const phone2 = document.getElementById("phone2").value // 010
//     if(phone2.length === 4){
//         document.getElementById("phone3").focus();
//     }
// }
// function changePhone3(){
//     const phone3 = document.getElementById("phone3").value // 010
//     if(phone3.length === 4){
//       document.getElementById("sendMessage").focus();
//       document.getElementById("sendMessage").setAttribute("style","background-color:yellow;")
//       document.getElementById("sendMessage").disabled = false;
//     }
// }

// // 문자인증+타이머 부분
// function initButton(){
//   document.getElementById("sendMessage").disabled = true;
//   document.getElementById("completion").disabled = true;
//   document.getElementById("certificationNumber").innerHTML = "000000";
//   document.getElementById("timeLimit").innerHTML = "03:00";
//   document.getElementById("sendMessage").setAttribute("style","background-color:none;")
//   document.getElementById("completion").setAttribute("style","background-color:none;")
// }

// let processID = -1;

// const getToken = () => {

//   // 인증확인 버튼 활성화
//   document.getElementById("completion").setAttribute("style","background-color:yellow;")
//   document.getElementById("completion").disabled = false;

//   if (processID != -1) clearInterval(processID);
//   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   document.getElementById("certificationNumber").innerText = token;
//   let time = 180;
//   processID = setInterval(function () {
//     if (time < 0 || document.getElementById("sendMessage").disabled) {
//       clearInterval(processID);
//       initButton();
//       return;
//     }
//     let mm = String(Math.floor(time / 60)).padStart(2, "0");
//     let ss = String(time % 60).padStart(2, "0");
//     let result = mm + ":" + ss;
//     document.getElementById("timeLimit").innerText = result;
//     time--;
//   }, 50);
// };

// function checkCompletion(){
//   alert("문자 인증이 완료되었습니다.")
//   initButton();
//   document.getElementById("completion").innerHTML="인증완료"
//   document.getElementById("signUpButton").disabled = false;
//   document.getElementById("signUpButton").setAttribute("style","background-color:yellow;")
// }


// 가입부분 체크
function signUpCheck(){
    let id = (document.getElementById("email")as HTMLInputElement).value
    let email = (document.getElementById("email")as HTMLInputElement).value
    let name = (document.getElementById("name")as HTMLInputElement).value
    let password = (document.getElementById("password")as HTMLInputElement).value
    let passwordCheck = (document.getElementById("passwordCheck")as HTMLInputElement).value
//   let area = document.getElementById("area").value
//   let gender_man = document.getElementById("gender_man").checked
//   let gender_woman = document.getElementById("gender_woman").checked
    let check = true;

    // 이메일확인
    if(email.includes('@')){
        let emailId = email.split('@')[0]
        let emailServer = email.split('@')[1]
        if(emailId === "" || emailServer === ""){
            document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
            check = false
        }
        else{
            document.getElementById("emailError").innerHTML=""
        }
    }else{
        document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
        check = false
    }


    // 이름확인
    if(name===""){
        document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
        check = false
    }else{
        document.getElementById("nameError").innerHTML=""
    }


    // 비밀번호 확인
    if(password !== passwordCheck){
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
        check = false
    }else{
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
    }

    if(password===""){
        document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
        check = false
    }else{
        //document.getElementById("passwordError").innerHTML=""
    }
    if(passwordCheck===""){
        document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
        check = false
    }else{
        //document.getElementById("passwordCheckError").innerHTML=""
    }


    //   // 지역선택 확인
    //   if(area === "지역을 선택하세요."){
    //     document.getElementById("areaError").innerHTML="지역을 선택해주세요."
    //     check = false
    //   }else{
    //     document.getElementById("areaError").innerHTML=""
    //   }

    //   // 성별체크확인
    //   if(!gender_man && !gender_woman){
    //     document.getElementById("genderError").innerHTML="성별을 선택해주세요."
    //     check = false
    //   }else{
    //     document.getElementById("genderError").innerHTML=""
    //   }
    
    if(check){
        document.getElementById("emailError").innerHTML=""
        document.getElementById("nameError").innerHTML=""
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
        
        //비동기 처리이벤트
        setTimeout(function() {
            alert("가입이 완료되었습니다.")
        }, 0);
        
        document.getElementById("register-wrapper").classList.add(style.wrapper_hidden)
        document.getElementById("register-wrapper").classList.remove(style.wrapper)
    }
}


const register_submit = async (url = '') => {
    let inputIds = ["id", "password", "email", "name"]
    let data = {}
    for (var i = 0; i < inputIds.length; i++){data[inputIds[i]] = (document.getElementById(inputIds[i]) as HTMLInputElement).value;}

    // 옵션 기본 값은 *로 강조
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE 등
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });
    return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

const Regist = () => {
    return (
        <>
            <div id="register-wrapper" className={style.wrapper}>
                <div className={style.title}><h1>회원가입</h1></div>
                <div className="id">
                    <input id="id" className={ style.input } type="text" placeholder="id를 입력해 주세요." />
                    <div id="idError" className="error"></div>
                </div>
                <div className="password">
                    <input id="password" className={ style.input } type="password" placeholder="비밀번호를 입력해 주세요." />
                    <div id="passwordError" className="error"></div>
                </div>
                <div className="passwordCheck">
                    <input id="passwordCheck" className={ style.input } type="password" placeholder="비밀번호를 다시 입력해 주세요." />
                    <div id="passwordCheckError" className="error"></div>
                </div>
                <div className="email">
                    <input id="email" className={ style.input } type="text" placeholder="이메일을 입력해 주세요." />
                    <div id="emailError" className="error"></div>
                </div>
                <div className="name">
                    <input id="name" className={ style.input } type="text" placeholder="이름을 입력해 주세요." />
                    <div id="nameError" className="error"></div>
                </div>
        
                <div className="line"><hr /></div>
                <div className="signUp">
                    <button className={style.signUp} id="signUpButton" onClick={() => { signUpCheck();  register_submit("/api/regist")}}>가입하기</button>
                </div>
            </div>

        </>
    );
}

export default Regist