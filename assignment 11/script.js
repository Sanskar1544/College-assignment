let count = 0;

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById('counter').textContent = count;
}