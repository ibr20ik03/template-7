/* 
            ===== WELCOME =====
    Designer and programmer :  Ibrahim Kassab
    Phone number            : +201556641403
    E-mail                  : ibr.jan17@gmail.com
            ===================
*/
let rightcolumn = document.querySelector(".r-col");

// top bar of main section [search & addicon & camera & status]
let search  = document.getElementsByClassName("inp_search")[0];
let addIcon = document.getElementsByClassName("add-icon")[0];
let camera  = document.getElementsByClassName("camera")[0];
let statuse  = document.getElementsByClassName("status")[0];
let menuAdd = document.getElementById("menu-add-sec");


displayNone("focus",search,addIcon,camera,statuse,menuAdd);
displayShow("blur",search,addIcon,camera,statuse);


// show & hide add data-togle [new chat & add contacts & transaction]
addIcon.addEventListener("click",() => {
    if (addIcon.className == "add-icon") {
        menuAdd.style.display = "flex";
        addIcon.style = "transform: rotate(45deg); background-color: var(--w-second-color); color: #fff"
        addIcon.classList.add("x");
    }else {
        menuAdd.style.display = "none";
        addIcon.style = "";
        addIcon.classList.remove("x");
    }
})


let msgItem     = document.querySelectorAll(".msg-body .msg-item");
let rightCol    = document.querySelectorAll(".r-col")[0];
let cahtContent = document.querySelectorAll(".r-col .chat-content")[0];
let notContent  = document.querySelectorAll(".r-col .not-content")[0];

msgItem.forEach((ele) => {
    ele.onclick = () => {
        msgItem.forEach((ele) => {
            ele.classList.remove("msg-active");
        })
        ele.classList.add("msg-active");
        notContent.style.display  = "none";
        rightCol.style.display    = "flex";
        cahtContent.style.display = "flex";
    }
})



// menu of select [massage & group & service]
let slectContr  = document.getElementsByClassName("slect-contr")[0];
let selectMenu  = document.getElementsByClassName("select-menu")[0];
let selectLabel = document.querySelectorAll(".third-sec .select-menu .select-label");
let closeMenu   = document.querySelector(".third-sec .select-menu .close-menu");

btnMouse("click",slectContr,"slect-contr",selectMenu);
forechAllEle("click",selectLabel,"slect-active");
displayNone("click",closeMenu,selectMenu);

// return to left column [all contacts]
let btnBackword  = document.querySelector(".callback .backword");
displayNone("click",btnBackword,rightcolumn);

// show menu group [call & video & transfer & location & file & contacts]
let btnGroupMenu  = document.querySelector(".send-message .group-menu");
let contactTarget  = document.querySelector(".r-col .third-sec .contact");
btnMouse("click",btnGroupMenu,"group-menu",contactTarget);

// select contact to send message
let span = document.querySelectorAll(".l-col .nchat-sec .cont-sec .contact .box .body-box .contact-item .select-cont > span");

span.forEach((ele) => {
    ele.onclick = () => {
        if (ele.className == "cont-active") {
            ele.classList.remove("cont-active");
        }else {
            ele.classList.add("cont-active");
        }
    }
})


// section send chat with other friends
let sectionChat  = document.querySelector(".l-col .nchat-sec");
let btnOpenChat  = document.querySelector(".second-sec .menu-add .new-chat");
let btnCloseChat = document.querySelector(".l-col .nchat-sec .up-down > span");

stylecss("click",btnOpenChat,sectionChat,"top: 0%");
stylecss("click",btnCloseChat,sectionChat,"top: 100%");

// section add contacts
let sectionContact  = document.querySelector(".l-col .add_contacts");
let btnOpenContact  = document.querySelector(".second-sec .menu-add .new-cont");
let btnCloseContact = document.querySelector(".l-col .add_contacts .up-down > span");

stylecss("click",btnOpenContact,sectionContact,"top: 0%");
stylecss("click",btnCloseContact,sectionContact,"top: 100%");

let addUserNumber  = document.querySelector(".l-col .add_contacts .cont-sec .title .icon i.add-user");
let overLayaddnum  = document.querySelector(".l-col .add_contacts .over-lay");
let alertAddNumber = document.querySelector(".l-col .add_contacts .alert-cont");

addUserNumber.addEventListener("click", () => {
    overLayaddnum.style.display = "flex";
    alertAddNumber.style.left   = "50%";
})


// section camera
let sectionCamera  = document.querySelector(".l-col .camera-section");
let btnOpenCamera  = document.querySelector(".l-col .main-sec .frist-sec .camera");
let btnCloseCamera = document.querySelector(".l-col .camera-section .came-shot .close-camera > i");

stylecss("click",btnOpenCamera,sectionCamera,"top: 0%");
stylecss("click",btnCloseCamera,sectionCamera,"top: 100%");

let cameraPhoto = document.querySelector(".l-col .camera-section .came-shot .sawp-pho-vide .photo");
let cameraVideo = document.querySelector(".l-col .camera-section .came-shot .sawp-pho-vide .video");
let cameraSpan = document.querySelectorAll(".l-col .camera-section .sawp-pho-vide span");
let cameraShot = document.querySelector(".l-col .camera-section .came-shot .click_shot");

forechAllEle("click",cameraSpan,"active-cam");

cameraPhoto.addEventListener("click", () => {
    if (cameraPhoto.classList.contains("active-cam") ) {
        cameraShot.style = "background-color: transparent";
    }
})

cameraVideo.addEventListener("click", () => {
    if (cameraVideo.classList.contains("active-cam") ) {
        cameraShot.style = "background-color: #f00";
    }
})


/* 
    #################################################################################
    ################################# Main Function #################################
    #################################################################################
*/

// remove active class from all elements + add on element event
function forechAllEle(action,array,active) {
    array.forEach((ele) => {
        ele.addEventListener(action,() => {
            array.forEach((ele) => {
                ele.classList.remove(active);
            })
            ele.classList.add(active);
        })
    })
}

// button click [show & hide] section
function btnMouse(action,btn,className,sec) {
    btn.addEventListener(action,() => {
        if (btn.className == className) {
            sec.style.display = "flex";
            btn.classList.add("x");
        }else {
            sec.style.display = "none";
            btn.classList.remove("x");
        }
    })
}

// hide elements
function displayNone(action,btn,...ele) {
    btn.addEventListener(action, () => {
        ele.forEach((ele) => {
            ele.style.display = "none";
        })
    })
}

// show elements
function displayShow(action,btn,...ele) {
    btn.addEventListener(action, () => {
        ele.forEach((ele) => {
            ele.style.display = "flex";
        })
    })
}

// edit style css when btn action excution style on section 
function stylecss(action,btn,sec,...decla) {
    btn.addEventListener(action,() => {
        decla.forEach((decl) => {
            sec.style = decl;
        })
    })
}

