const images = ["0.jpeg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //난수

const image = new Image();
image.src = `img/${chosenImage}`; //이미지 주소
image.classList.add("bgImage"); // CSS를 위한 class 추가


image.onload = function(){ // onload가 끝난 뒤 하는 일
  document.body.appendChild(image); //html에 태그 추가
}