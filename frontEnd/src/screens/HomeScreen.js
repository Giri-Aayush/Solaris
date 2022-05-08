// import { suscribe } from "../api.js";
// import { apiUrl } from "../config.js";
// import { getCartItems, getUserInfo } from "../localStorage.js";
// import { hideLoading, showLoading, showMessage } from "../utils.js";

const HomeScreen = {
    after_render : () =>{
        // document.getElementById("suscribe-form")
        // .addEventListener('submit',async(e) =>{
        //     e.preventDefault();
        //     showLoading();
        //     const data = suscribe({
        //         email : document.getElementById('email').value , 
        //     });
        //     hideLoading();
        //     if(data.error){
        //         showMessage("Invalid Email");
        //     }else{
        //         showMessage('Suscribed');
        //     }
        // });
    },
    render : () => {
        return `
        <section class="pt-9 bg-black" id="hero">
            
            <div class="sc-36bfb188-0 fnTGAN pt-14 py-md-12">
                <div class="heroVideoPlaceholder">
                    <video style="width: 95rem;" loop="" muted="" playsinline="" autoplay="" poster="./images/hero-wide.jpg">
                        <source src="./images/solaris_vid.mp4" type="video/mp4">
                    </video>
                    <div class="heroVideoPlaceholder__overlay"></div>
                </div>
            </div>
            <div class="container mt-lt-8 mt-12">
                <div id="hero_box">
                    <div id="hero_intro"><h2 style="font-size: 3.5rem;">Introducing Solaris</h2></div>
                    <div id="hero_first_line"><span>We offer you immersive learning experience along with tons of curated content</span></div>
                    <div id="hero_second_line"><span>Get yourself rewarded with solaris while you learn!</span></div>
                    <div id="hero_button">
                        <span>Start learning now</span>
                        <a id="first_button" href="">Create you plus account</a>
                        <a id="second_button" href="">Create your free account</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- ---------------------- Courses demo --------------------- -->
        <div id="courses_section">
            <h3 class="rm_margin">Learn and earn by doing the courses</h3>
            <p>Get access to the best online courses for creatives intereat with the best professionals and discover the creative world's best-kept secrets.</p>

            <div id="courses_container">

                <div id="courses_item">
                    <a href=""><img style="display: inline;" src="./images/image 2.png" alt=""></a>
                    <div id="info_card">
                        <a style="text-decoration: none; color:black;" href=""><span id="courses_name">Drawing for Beginners Level -1</span></a>
                        <span id="courses_tag">New</span>
                        <div id="fufi">
                            <span id="courses_by">A course by Puño</span>
                            <span id="courses_desc">Create your first sketchbook by applying basic techniques for drawing by hand</span>
                        </div>
                        <div>
                            <i class='mar bx bx-user'><span class="user_count">152</span></i>
                            <i class='mar bx bx-calendar'><span class="user_count">05/05/2022</span></i>
                        </div>
                        <div style="display:flex; justify-content:center; margin: 14px 0px;">
                            <a class="btn" href=""><img id="sol_img" src="./images/logo.png" alt=""><span>+0.5 Solaris/h</span></a>
                            <a style="font-size : 1.7rem;" href=""><i class='bx bxs-bookmark-plus' ></i></a>
                        </div>
                    </div>
                </div>
                <div id="courses_item">
                    <a href=""><img style="display: inline;" src="./images/image 3.png" alt=""></a>
                    <div id="info_card">
                        <a style="text-decoration: none; color:black;" href=""><span id="courses_name">Drawing for Beginners Level -1</span></a>
                        <span id="courses_tag">New</span>
                        <div id="fufi">
                            <span id="courses_by">A course by Puño</span>
                            <span id="courses_desc">Create your first sketchbook by applying basic techniques for drawing by hand</span>
                        </div>
                        <div>
                            <i class='mar bx bx-user'><span class="user_count">152</span></i>
                            <i class='mar bx bx-calendar'><span class="user_count">05/05/2022</span></i>
                        </div>
                        <div style="display:flex; justify-content:center; margin: 14px 0px;">
                            <a class="btn" href=""><img id="sol_img" src="./images/logo.png" alt=""><span>+0.5 Solaris/h</span></a>
                            <a style="font-size : 1.7rem;" href=""><i class='bx bxs-bookmark-plus' ></i></a>
                        </div>
                    </div>
                </div>
                <div id="courses_item">
                    <a href=""><img style="display: inline;" src="./images/image 4.png" alt=""></a>
                    <div id="info_card">
                        <a style="text-decoration: none; color:black;" href=""><span id="courses_name">Drawing for Beginners Level -1</span></a>
                        <span id="courses_tag">Trending</span>
                        <div id="fufi">
                            <span id="courses_by">A course by Puño</span>
                            <span id="courses_desc">Create your first sketchbook by applying basic techniques for drawing by hand</span>
                        </div>
                        <div>
                            <i class='mar bx bx-user'><span class="user_count">152</span></i>
                            <i class='mar bx bx-calendar'><span class="user_count">05/05/2022</span></i>
                        </div>
                        <div style="display:flex; justify-content:center; margin: 14px 0px;">
                            <a class="btn" href=""><img id="sol_img" src="./images/logo.png" alt=""><span>+0.5 Solaris/h</span></a>
                            <a style="font-size : 1.7rem;" href=""><i class='bx bxs-bookmark-plus' ></i></a>
                        </div>
                    </div>
                </div>
                <div id="courses_item">
                    <a href=""><img style="display: inline;" src="./images/image 5.png" alt=""></a>
                    <div id="info_card">
                        <a style="text-decoration: none; color:black;" href=""><span id="courses_name">Drawing for Beginners Level -1</span></a>
                        <span id="courses_tag">New</span>
                        <div id="fufi">
                            <span id="courses_by">A course by Puño</span>
                            <span id="courses_desc">Create your first sketchbook by applying basic techniques for drawing by hand</span>
                        </div>
                        <div>
                            <i class='mar bx bx-user'><span class="user_count">152</span></i>
                            <i class='mar bx bx-calendar'><span class="user_count">05/05/2022</span></i>
                        </div>
                        <div style="display:flex; justify-content:center; margin: 14px 0px;">
                            <a class="btn" href=""><img id="sol_img" src="./images/logo.png" alt=""><span>+0.5 Solaris/h</span></a>
                            <a style="font-size : 1.7rem;" href=""><i class='bx bxs-bookmark-plus' ></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
        `;

    },
};

export default HomeScreen;