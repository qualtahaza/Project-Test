//bai 1
// let nhapSo = prompt("Nhập vào các số ngăn cách nhau bởi dấu cách");
// let arr = [...nhapSo.split(" ")];
// let luyThua = [];
// for (let i = 0; i < arr.length; i++) {
//   if (Number.isInteger(Math.sqrt(arr[i]))) {
//     luyThua.push(arr[i]);
//   } else {
//     continue;
//   }
// }

// console.log("Dãy số là kết quả lũy thừa của 1 số là: " + luyThua);

//bai 2
// function add(a, b) {
//   if (Number.isInteger(a, b)) {
//     return console.log(a + b);
//   } else {
//     return console.log(NaN);
//   }
// }
// let add1 = function (a) {
//   return function (b) {
//     return console.log(a + b);
//   };
// };
// add(2, 3);
// add("2", "3");
// add1(2)(3);

//bai 3


function showSpring() {

    let content = document.getElementById("content");



    content.innerHTML = `<div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;"onclick="showText()" src="spring1.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show" style="display:none;">
                <p class="card-text" ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText1()" src="spring2.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show1"style="display:none;">
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText2()" src="spring3.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show2"style="display:none;">
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>`





}

function showText() {
    let x = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showText1() {
    let x = document.getElementById("show1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showText2() {
    let x = document.getElementById("show2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




function showSummer() {

    let content = document.getElementById("content");
    content.innerHTML = `<div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText3()" src="summer1.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show" style="display:none;">
                <p class="card-text" ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText4()" src="summer2.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show1"style="display:none;">
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText5()" src="summer3.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show2"style="display:none;">
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>`





}

function showText3() {
    let x = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showText4() {
    let x = document.getElementById("show1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showText5() {
    let x = document.getElementById("show2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




function showAutumn() {

    let content = document.getElementById("content");
    content.innerHTML = `<div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText6()" src="autumn1.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show" style="display:none;">
                <p class="card-text" ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText7()" src="autumn2.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show1"style="display:none;">
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText8()" src="autumn3.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show2"style="display:none;">
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>`





}

function showText6() {
    let x = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showText7() {
    let x = document.getElementById("show1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showText8() {
    let x = document.getElementById("show2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}





function showWinter() {

    let content = document.getElementById("content");
    content.innerHTML = `<div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText9()" src="winter1.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show" style="display:none;">
                <p class="card-text" ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText10()" src="winter2.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show1"style="display:none;">
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-4 mt-5">
        <div class="card" style="width: 18rem;border: 0px;">
            <img style="height:200px;" onclick="showText11()" src="winter3.jpg" class="card-img-top" alt="...">
            <div class="card-body"id="show2"style="display:none;">
                <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>`





}

function showText9() {
    let x = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showText10() {
    let x = document.getElementById("show1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showText11() {
    let x = document.getElementById("show2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}