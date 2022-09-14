(function () {
    let photos = [
        "img-1",
        "img-2",
        "img-3",
        "img-4",
        "img-5"
    ]
    let conatiner = document.querySelector(".container")
    let rightButton = document.querySelector(".rightBtn")
    let leftButton = document.querySelector(".leftBtn")
    let index = photos.length - 1;

    count = 0;
    rightButton.addEventListener("click", function () {
        count++
        if (count > index) {
            count = 0;
        }
        setTimeout(() => {
            conatiner.style.backgroundImage = `url("img/${photos[count]}.jpg")`
        }, 100);

    })

    leftButton.addEventListener("click", function () {
        count--
        if (count < 0) {
            count = index;
        }
        setTimeout(() => {
            conatiner.style.backgroundImage = `url("img/${photos[count]}.jpg")`
        }, 100);
    })
})()