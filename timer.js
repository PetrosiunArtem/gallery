const firstExam = new Date('June 2, 2025, 10:00:00').getTime();

function countRestTime() {
    const now = new Date().getTime();
    const delta = firstExam - now;

    if (delta <= 0) {
        document.getElementById('timer').innerHTML ='TIME IS OVER';
    }
    
    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor(delta % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(delta % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(delta % (1000 * 60) / 1000);

    document.getElementById("date").innerHTML = `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
}

setInterval(countRestTime, 1000);
