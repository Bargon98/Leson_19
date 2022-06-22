(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let one = 10;
    let two = 20;
    let three = 30;
    if (one < two && one === three) console.log(`popka`); else if (one > two && one !== three) console.log(`pipka`); else console.log(`net pipki`);
    let eto;
    if (true) eto = `20`;
    console.log(eto);
    function getSumm(one, two) {
        return one + two;
    }
    if (true) {
        let result = getSumm(4, 3);
        console.log(result);
    }
    let user = `5`;
    let userDima = `10`;
    let result = +user + +userDima;
    console.log(result);
    let users = 5;
    users += 3;
    users *= 2;
    users--;
    console.log(users);
    let first = `10`;
    let second = 20;
    let res = first++ < second;
    console.log(res);
    console.log(true && 11 || 0);
    function summ(one, two) {
        console.log(`one = 1`);
        console.log(`two = 2`);
        let go = `Summ = ${one + two}`;
        console.log(go);
    }
    summ(1, 2);
    function getPlus(a, b) {
        let c = d(a, b);
        console.log(c);
    }
    function d(a, b) {
        return a + b;
    }
    getPlus(1, 2);
    let message;
    function showMessage() {
        console.log(`abrakadabra`);
        message = 50;
    }
    showMessage();
    console.log(message);
    let globalVar = `Global message`;
    function getSummet() {
        let pet, det;
        function getP() {
            pet = 1;
            console.log(globalVar);
        }
        function getD() {
            det = 2;
        }
        getP();
        getD();
        let numSumm = pet + det;
        console.log(numSumm);
    }
    console.log(globalVar);
    getSummet();
    function calcSumm(n, m, more, less) {
        let build = n + m;
        if (build > 3) more(); else less();
    }
    function script_showMore() {
        console.log(`Big`);
    }
    function showLess() {
        console.log(`Smole`);
    }
    calcSumm(1, 5, script_showMore, showLess);
    function acalcSumm(s, f) {
        return s + f;
    }
    let both = acalcSumm(1, 2);
    console.log(`Summ: ${both}`);
    function showName() {
        console.log(`Andrew`);
    }
    setTimeout(showName, 0);
    console.log(`Kolya`);
    script_text();
    function script_text() {
        console.log(`text`);
    }
    `use strict`;
    if (true) {
        function showH() {
            console.log(`ghgh`);
        }
        showH();
    }
    window["FLS"] = true;
    isWebp();
})();