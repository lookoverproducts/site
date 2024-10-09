function changeLink() {
    const links = [
        'https://cryptoworldtruth.exblog.jp/36051493/',
        'https://cryptoworldtruth.exblog.jp/36051306/',
        'https://cryptoworldtruth.exblog.jp/36029965/'
    ];
    const randomIndex = Math.floor(Math.random() * links.length);
    window.open(links[randomIndex], '_blank');
}

function startTimer(event) {
    event.preventDefault();
    var counter = 2;
    var interval = setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            clearInterval(interval);
            changeLink();
        }
    }, 1000);
    document.querySelector('.myDiv').style.display = 'block';
}