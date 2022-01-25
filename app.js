
let btn = document.querySelector('#btn');
let socialIcons = document.querySelector('.social-icons-container');

console.log(btn);
console.log(socialIcons);

btn.addEventListener('click', function () {
    console.log(btn);
    if (socialIcons.style.display === 'none') {
        socialIcons.style.display = 'block';
        console.log(socialIcons);
    } else {
        socialIcons.style.display = 'none';

    }

})


