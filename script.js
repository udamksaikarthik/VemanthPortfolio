const logo_icon_id = document.getElementById('logo_icon_id')
console.log('logo_icon_id.offsetHeight: ',logo_icon_id.offsetHeight)
logo_icon_id.style.width = logo_icon_id.offsetHeight+"px";

const window_height = window.innerHeight

console.log('window_height: ',window_height)

const main_container_header_id = document.getElementById('main_container_header_id')
const main_container_home_id = document.getElementById('main_container_home_id')
main_container_home_id.style.height = (window_height - main_container_header_id.offsetHeight) + 'px'; 

const skill1_container = document.getElementById('skill1_container')
const skill1_name_container = document.getElementById('skill1_name_container')
skill1_name_container.style.height = skill1_container.offsetHeight + 'px';

const skill2_container = document.getElementById('skill2_container')
const skill2_name_container = document.getElementById('skill2_name_container')
skill2_name_container.style.height = skill2_container.offsetHeight + 'px';

const skill3_container = document.getElementById('skill3_container')
const skill3_name_container = document.getElementById('skill3_name_container')
skill3_name_container.style.height = skill3_container.offsetHeight + 'px';

const skill4_container = document.getElementById('skill4_container')
const skill4_name_container = document.getElementById('skill4_name_container')
skill4_name_container.style.height = skill4_container.offsetHeight + 'px';

// const skill5_container = document.getElementById('skill5_container')
// const skill5_name_container = document.getElementById('skill5_name_container')
// skill5_name_container.style.height = skill5_container.offsetHeight + 'px';


const journey_content_container1_id = document.getElementById('journey_content_container1')
const flow_line1 = document.getElementById('flow_line1')
flow_line1.style.height = journey_content_container1_id.offsetHeight + 'px'
flow_line1.style.width = (window.innerWidth *0.2) + 'px'

const journey_content_container2_id = document.getElementById('journey_content_container2')
const flow_line2 = document.getElementById('flow_line2')
flow_line2.style.height = journey_content_container2_id.offsetHeight + 'px'
flow_line2.style.width = (window.innerWidth *0.2) + 'px'

const journey_content_container3_id = document.getElementById('journey_content_container3')
const flow_line3 = document.getElementById('flow_line3')
flow_line3.style.height = journey_content_container3_id.offsetHeight + 'px'
flow_line3.style.width = (window.innerWidth *0.2) + 'px'

const journey_content_container4_id = document.getElementById('journey_content_container4')
const flow_line4 = document.getElementById('flow_line4')
flow_line4.style.height = journey_content_container4_id.offsetHeight + 'px'
flow_line4.style.width = (window.innerWidth *0.2) + 'px'



const center_circle1_id =document.getElementById('center_circle1')
center_circle1_id.style.borderRadius = center_circle1_id.offsetHeight + 'px'
center_circle1_id.style.width = center_circle1_id.offsetHeight + 'px'

const center_circle2_id =document.getElementById('center_circle2')
center_circle2_id.style.borderRadius = center_circle2_id.offsetHeight + 'px'
center_circle2_id.style.width = center_circle2_id.offsetHeight + 'px'

const center_circle3_id =document.getElementById('center_circle3')
center_circle3_id.style.borderRadius = center_circle3_id.offsetHeight + 'px'
center_circle3_id.style.width = center_circle3_id.offsetHeight + 'px'

const center_circle4_id =document.getElementById('center_circle4')
center_circle4_id.style.borderRadius = center_circle4_id.offsetHeight + 'px'
center_circle4_id.style.width = center_circle4_id.offsetHeight + 'px'




const main_container_body_id = document.getElementById('main_container_body_id')
const main_container_header_right_part_id = document.getElementById('main_container_header_right_part_id')
const menu_button_id = document.getElementById('menu_button_id')

function menu_button_animation(){
    main_container_body_id.classList.toggle('hidden')
    main_container_header_right_part_id.classList.toggle('show')
    main_container_home_id.classList.toggle('hidden')
    if(menu_button_id.innerText=='Menu'){
        menu_button_id.innerText = 'Back'
    }
    else if(menu_button_id.innerText == 'Back'){
        menu_button_id.innerText = 'Menu'   
    }
}

const main_container_home_dp_container_id = document.getElementById('main_container_home_dp_container_id')
console.log('main_container_home_dp_container_id.offSetHeight: ',main_container_home_dp_container_id.offsetHeight)
main_container_home_dp_container_id.style.borderRadius = main_container_home_dp_container_id.offsetHeight + 'px';
main_container_home_dp_container_id.style.width = main_container_home_dp_container_id.offsetHeight + 'px';

const main_container_home_content_container_name_id = document.getElementById('main_container_home_content_container_name_id')
const my_name_id = document.getElementById('my_name_id')
const main_container_home_content_container_role_id = document.getElementById('main_container_home_content_container_role_id')
const main_container_home_content_container_content_id = document.getElementById('main_container_home_content_container_content_id')

my_name_id.style.color = '#ff3333'

const main_container_home_content_container_name_id_text= 'Hi there! I\'m';
const my_name = 'Vemanth'
const my_role = 'JDA Developer'
const my_content = 'Software professional with good experience in JDA and creating and implementing effective adaptable and sustainable strategies. I have 16 months of work experience on JDA tool at ITC limited. In my free time, I like to travel and explore places.'
var i=0
var i2 = 0
var i3=0
var i4=0
var speed = 50
var speed_content = 25

function text1Animation(){
    if(i < main_container_home_content_container_name_id_text.length){
        main_container_home_content_container_name_id.innerHTML += main_container_home_content_container_name_id_text.charAt(i);
        i++;
        setTimeout(text1Animation, speed)
    }
}
function text2Animation(){
    if(i2 < my_name.length){
        my_name_id.innerHTML += my_name.charAt(i2);
        i2++;
        setTimeout(text2Animation, speed)
    }
}
function text3Animation(){
    if(i3 < my_role.length){
        main_container_home_content_container_role_id.innerHTML += my_role.charAt(i3);
        i3++;
        setTimeout(text3Animation, speed)
    }
}
function text4Animation(){
    if(i4 < my_content.length){
        main_container_home_content_container_content_id.innerHTML += my_content.charAt(i4);
        i4++;
        setTimeout(text4Animation, speed_content)
    }
}


text1Animation();
console.log('timeOut: ',speed*main_container_home_content_container_name_id_text.length)
setTimeout(text2Animation,speed*main_container_home_content_container_name_id_text.length);
setTimeout(text3Animation,speed*main_container_home_content_container_name_id_text.length + speed*my_name.length);
setTimeout(text4Animation,speed*main_container_home_content_container_name_id_text.length + speed*my_name.length + speed*my_role.length);
