let otherLinks = document.getElementById('other-links');
let popup = document.getElementById('popup');

otherLinks.addEventListener('mouseover', function (e) {

    popup.style.visibility = 'visible';
    popup.addEventListener('mouseover', function () {
        popup.style.visibility = 'visible';
    })
})

otherLinks.addEventListener('mouseout', function () {
    popup.style.visibility = 'hidden';
    popup.addEventListener('mouseout', function () {
        popup.style.visibility = 'hidden';
    })
})