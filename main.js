function rgb_c() {
    return Math.floor(Math.random() * 1000);
}

function random_color_generator(){ 

    let random_r_1 = rgb_c(), random_g_1 = rgb_c() , random_b_1 = rgb_c();
    return `rgb(${random_r_1},${random_g_1},${random_b_1})`;

}

let myfun = () =>{

    let el = document.querySelector("#target");
    let color1 = random_color_generator();
    let color2 = random_color_generator();
    el.style.background = `linear-gradient(${color1}, ${color2})`;


}