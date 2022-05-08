const sign_inScreen ={
    after_render : () =>{

    },
    render : () =>{
        return `
        <div id="sign_in_background">
        <div id="sign_in_box">
            <div id="sign_in_logo"><img src="./images/logo.png" alt=""><h3 style="display: inline; margin: 0px;">SOLARIS</h3></div>
            <div style="margin-bottom:12px ;">
                <h3 style="margin: 1px 0px; font-size: 1.6rem;">Sign in</h3>
                <p style="margin: 0px; font-size: 0.7rem; color: #949494;">Find inspiration and showcase your creative work</p>
            </div>
            <div style="margin: 20px;">
                <a style="    align-items: center;
                display: block;
                background-color: white;
                padding: 9px 44px;
                display: flex;     justify-content: center;
                border-radius: 9px; text-decoration: none; color: #949494;" href="www.google.com"><img style="width: 24px; margin: 0px 8px;" src="./images/googleImg.png" alt=""> Sign in with google</a>
                <a style=" margin: 12px 0px;    align-items: center;
                display: block;
                background-color: white;
                padding: 9px 44px;
                display: flex;
                border-radius: 9px; justify-content: center; background-color: #8600AB; text-decoration: none; color: white;" href="">New user?</a>
            </div>
            <div>
                <span style="display: block; color: #949494; font-size: 0.8rem;">Or login with email</span>
                <input class="sign_in_input" style="display: block;" placeholder="Email" type="email" name="" id="">
                <input class="sign_in_input" style="display: block;" placeholder="Password" type="password" name="" id="">
                <div style="    display: flex;justify-content: space-between;">
                    <button id="sign_btn">Sign In</button>
                    <a style="font-size: 0.7rem;" href="">Forgot your password?</a>
                </div>
            </div>
            <div style="
            margin-top: 3rem;
            border-top: solid 1px #949494;
            text-align: center;
            font-size: 13px;
        ">
                Don't have an account yet? <a style="color: #8600AB; text-decoration: none; " href=""> Sign_Up_Now </a>
            </div>
        </div>
    </div>
        `;
    }
}

export default sign_inScreen;