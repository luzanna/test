function sendData() {
    let dataFromForm = {
        selectOne: +document.getElementById('one').value,
        selectTwo: +document.getElementById('two').value,
        selectThree: +document.getElementById('three').value,
        selectFour: +document.getElementById('four').value,
        selectFive: +document.getElementById('five').value,
        inputOne: document.getElementById('firstInput').value,
        inputTwo:  document.getElementById('secondInput').value,
    };
    let result = JSON.stringify(dataFromForm);
    addJsonData(result);
    getRequest();
};

function addJsonData(str){
    document.querySelector('.jsonMessage').innerHTML = str;
};

async function getRequest() {
    const res = await fetch('http://localhost:8080/forma.html');
    document.getElementById('overlay').style.display='block';
    document.querySelector('.server-request').innerHTML = res.status;
}

function modalWindowClose() {
    document.getElementById('overlay').style.display='none';
}
