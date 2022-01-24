$(document).ready(function(){

    //menu btn
    $('.menubtn').click(function(){
        $('.navibar .menu').toggleClass("active")

    });

    $('.menu').click(function(){
        $('.navibar .menu').toggleClass("active")

    });
    //lang card
    const card1 = document.querySelector(".card__inner1");
    card1.addEventListener("click", function (e) {
    card1.classList.toggle('is-flipped');
    });

    const card2 = document.querySelector(".card__inner2");
    card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped');
    });

    const card3 = document.querySelector(".card__inner3");
    card3.addEventListener("click", function (e) {
    card3.classList.toggle('is-flipped');
    });

    const card4 = document.querySelector(".card__inner4");
    card4.addEventListener("click", function (e) {
    card4.classList.toggle('is-flipped');
    });

    // Get all the images
    image_array = [
   
    ]
    const randPhoto = document.getElementById('button_container');
    randPhoto.addEventListener("click", function(e){
        random_index = Math.floor(Math.random() * image_array.length);
        selected_image = image_array[random_index]
        // Display the image
        document.getElementById('myPhoto').src = `${selected_image}`
    });


  
    // read more buttons for my timeline
    let blur = document.getElementById('blur');
    let pop = document.getElementById('popup');
    let pop2 = document.getElementById('popup2');
    let pop3 = document.getElementById('popup3');
    let pop4 = document.getElementById('popup4');
    let pop5 = document.getElementById('popup5');
    let pop6 = document.getElementById('popup6');
    $('.bottom a').click(function(){
        blur.classList.toggle('active');
    });
    $('#firstRead').click(function(){
        pop.classList.toggle('active');
    });
    $('#firstPop').click(function(){
        blur.classList.toggle('active');
        pop.classList.toggle('active');
    });
    $('#secondRead').click(function(){
        pop2.classList.toggle('active');
    });
    $('#secondPop').click(function(){
        blur.classList.toggle('active');
        pop2.classList.toggle('active');
    });
    $('#thirdRead').click(function(){
        pop3.classList.toggle('active');
    });
    $('#thirdPop').click(function(){
        blur.classList.toggle('active');
        pop3.classList.toggle('active');
    });
    $('#fourthRead').click(function(){
        pop4.classList.toggle('active');
    });
    $('#fourthPop').click(function(){
        blur.classList.toggle('active');
        pop4.classList.toggle('active');
    });
    $('#fifthRead').click(function(){
        pop5.classList.toggle('active');
    });
    $('#fifthPop').click(function(){
        blur.classList.toggle('active');
        pop5.classList.toggle('active');
    });
    $('#sixthRead').click(function(){
        pop6.classList.toggle('active');
    });
    $('#sixthPop').click(function(){
        blur.classList.toggle('active');
        pop6.classList.toggle('active');
    });
});