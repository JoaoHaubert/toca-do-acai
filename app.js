//Carousel
const img = document.getElementById('img')
const image = document.querySelectorAll('#img img')

let imgNumber = 0;

function carousel(){
    imgNumber++;


    if(imgNumber > image.length -1 ){
    imgNumber = 0;
    }

    img.style.transform = `translateX(${-imgNumber * 350}px)`;
}

setInterval(carousel, 2400);

//Whatsap LinkButton

const wpplink = document.getElementById('linkButton')

wpplink.addEventListener('click', () => window.open(
'https://api.whatsapp.com/send?1=pt_BR&phone=5551991411860'))

//Instagram LinkButton

const instaButton = document.getElementById('instaLogo')

instaButton.addEventListener('click', () => window.open(
'https://www.instagram.com/tocadoacai74/'))

//Facebook LinkButton

const faceButton = document.getElementById('faceLogo')

faceButton.addEventListener('click', () => window.open(
'https://www.facebook.com/Toca-do-A%C3%A7a%C3%AD-104170275492104/?ref=page_internal'))

//Linkedin Footer

const linkedinButton = document.getElementById('linkedinLink')

linkedinButton.addEventListener('click', () => window.open ('https://www.linkedin.com/in/jo%C3%A3o-haubert-467058192'))

// Back to top btn

const toTopButton = document.getElementById('toTop')

/*Show the button when scrolls down*/

window.onscroll = () => {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        toTopButton.style.display = 'block';
    } else {
        toTopButton.style.display = 'none';
    }
}

/*Click to scroll to top*/

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

