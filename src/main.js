import media from "./media/pic.jpg";
import anime from 'animejs'


const img = document.createElement('img');
document.body.append(img);
img.src = media
anime ({
    targets: img,
    rotate: 360
})