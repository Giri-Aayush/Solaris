const sign_upScreen ={
    after_render : () =>{

    },
    render : () =>{
        return `
        <div id="sign_in_background">
        <div id="sign_in_box">
            <div id="sign_in_logo"><img src="./images/logo.png" alt=""><h3 style="display: inline; margin: 0px;">SOLARIS</h3></div>
            <div style="margin-bottom:12px ;">
                <h3 style="margin: 1px 0px; font-size: 1.6rem;">Sign Up</h3>
                <p style="margin: 0px; font-size: 0.7rem; color: #949494;">Find inspiration and showcase your creative work</p>
            </div>
            <div>
                <span style="color: red;line-height: 1px;float: right;padding-top: 10px;padding-right: 20px;">*</span>
                <input class="sign_in_input" style="display: block;" placeholder="Enter your full name" type="email" name="" id="">
                <span style="color: red;line-height: 1px;float: right;padding-top: 10px;padding-right: 20px;">*</span>
                <input class="sign_in_input" style="display: block;" placeholder="Enter your metamask ID" type="password" name="" id="">
                <span style="color: red;line-height: 1px;float: right;padding-top: 10px;padding-right: 20px;">*</span>
                <input class="sign_in_input" style="display: block;" placeholder="Email" type="password" name="" id="">
                <span style="color: red;line-height: 1px;float: right;padding-top: 10px;padding-right: 20px;">*</span>
                <input class="sign_in_input" style="display: block;" placeholder="Password" type="password" name="" id="">
                <span style="color: red;line-height: 1px;float: right;padding-top: 10px;padding-right: 20px;">*</span>
                <input class="sign_in_input" style="display: block;" placeholder="Confirm your password" type="password" name="" id="">
                <div style="    display: flex;justify-content: space-between;">
                    <button id="sign_btn">Sign Up</button>
                    <span style="font-size: 0.5rem;" >fields marked with <p style="color: red; display: inline;">*</p> are mandatory</span>
                </div>
            </div>
            <div style="
            margin-top: 1rem;
            border-top: solid 1px #949494;
            text-align: center;
            font-size: 13px;
        ">
                Already have an account? <a style="color: #8600AB; text-decoration: none; " href=""> Sign in Now! </a>
            </div>
        </div>
    </div>
        `;
    }
}

export default sign_upScreen;