// Your code goes here
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#text').textContent = 'This is really cool!'
})

document.querySelector('#text').addEventListener('click', function(){
    document.querySelector('#text').textContent = 'JavaScript is so cool. It lets me add text to my page programmatically.'
})

console.log(document.querySelector('#text').textContent);