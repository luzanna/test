setTimeout("document.getElementById('overlay').style.display='block'", 1000);

function modalWindowClose() {
    document.getElementById('overlay').style.display='none';
}

function closeHeader(){
    (document.getElementById('text').hidden == true) ?
        document.getElementById('text').hidden = false :
        document.getElementById('text').hidden = true;
};

// перемещение на большом ээкране доделать!!!!!!!
function move() {
    let divs =  [document.getElementById('move1'), document.getElementById('move2')];
    let oldClassFirst = document.getElementById('move1').getAttribute('class');
    let oldClassSecond = document.getElementById('move2').getAttribute('class');

    divs[0].removeAttribute('class');
    divs[0].setAttribute('class', oldClassSecond);

    divs[1].removeAttribute('class');
    divs[1].setAttribute('class', oldClassFirst);
};

