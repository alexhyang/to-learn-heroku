/* document.addEventListener('DOMContentLoaded' , () => {
    document.querySelector("#btn").onclick = () => {
        document.querySelector("h1").style.color = "purple";
    }
}) */

$(function() {
    alert('welcome!');
    $('#btn').on('click', () => {
            $('h1').css('color', 'purple');
        })
})