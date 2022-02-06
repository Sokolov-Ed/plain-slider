let shell = document.querySelector('.shell');
let img = document.querySelector('img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let navigation = document.querySelector('.navigation');
let slide = 0;

for(let i = 0; i < shell.children.length; i++) {
	navigation.innerHTML += `<div class='pointer${i}'></div>`;
}

navigation.children[slide].style.backgroundColor = "rgba(255, 255, 255, .9)";

next.addEventListener('click', () => {
	slide === shell.children.length - 1 ? slide = 0 : slide++;
	shell.style.marginLeft = `-${img.offsetWidth * slide}px`;
	navigationChange();
});

prev.addEventListener('click', () => {
	slide === 0 ? slide = shell.children.length - 1 : slide--;
	shell.style.marginLeft = `-${img.offsetWidth * slide}px`;
	navigationChange();
})

function navigationChange() {
	for(let i = 0; i < shell.children.length; i++) {
		i === slide ? navigation.children[i].style.backgroundColor = "rgba(255, 255, 255, .9)" : navigation.children[i].style.backgroundColor = "rgba(255, 255, 255, .3)";
	}
}