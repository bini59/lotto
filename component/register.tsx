import style from "../styles/register.module.sass"

const Regist = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.title}><h1>회원가입</h1></div>
                <div className="id">
                    <input id="email" className={ style.input } type="text" placeholder="id를 입력해 주세요." />
                    <div id="emailError" className="error"></div>
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
                    <button className={ style.signUp } id="signUpButton" disabled onClick={()=>{}}>가입하기</button>
                </div>
            </div>

        </>
        
        
    );
}

export default Regist