// import { suscribe } from "../api.js";
import { apiUrl } from "../config.js";
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
    render : async() => {
        // showLoading();
        const response = await fetch(apiUrl+'/api/products/featured' , {
            headers : {
                'Content-Type' : 'application/json',
            },
        });
        const response_2 = await fetch(apiUrl+'/api/products/new' , {
            headers : {
                'Content-Type' : 'application/json',
            },
        });
        // hideLoading();
        if((!response || !response.ok)&&(!response_2 || !response_2.ok)){
            return `<div>Error in getting data</div>`;
        }
        const featured = await response.json();
        const New = await response_2.json();
        return `
        <main>
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
    Header : () => {
        const {name , isAdmin} = getUserInfo();
        let cart = getCartItems();
        return `
            <nav class="nav bd-grid">
            <div>
                <a href="/#/" target="_blank" class="nav_logo"><img id="kurta_logo" src="./Images/kurta_logo.png" alt=""></a>
            </div>
            <div class="nav_menu" id="nav-menu">
                <ul class="nav_list">
                    <li class="nav_item"><a href="#home" class="nav_link active">Home</a></li>
                    <li class="nav_item"><a href="/#/shop" class="nav_link">Shop</a></li>
                    <li class="nav_item"><a href="#featured" class="nav_link">Featured</a></li>
                    <li class="nav_item"><a href="#new" class="nav_link">New</a></li>
                    ${name ? `<li class="nav_item"><a href="/#/profile" class="nav_link">${name}</a></li>` : 
                    `<li class="nav_item"><a href="/#/signin" class="nav_link">Sign In</a></li>
                    <li class="nav_item"><a href="/#/register" class="nav_link">Sign Up</a></li>`
                    }
                    ${isAdmin ? `<li class="nav_item"><a class="nav_link" href="/#/dashboard">Dashboard</a></li>` : ``}
                </ul>
            </div>

            <div>
            ${cart.length  === 0 ? `<a href="/#/cart" class="icons_nav"><i class=' bx bx-cart'></i></a>` :`<a href="/#/cart" class="icons_nav"><i class='bx bxs-cart' ></i></a>`}
                <a class="icons_nav" href="#home"><i class="bx bx-menu nav_toggle" id="nav-toggle"></i></a>
            </div>
        </nav>
        `;
    }
};

export default HomeScreen;