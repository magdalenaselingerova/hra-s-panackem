'use strict';

/*
Tu strašlivě vypadající funkci níže v komentáři budeš potřebovat později
Funkce zjistí, zda se protínají dva obdélníky. To se hodí například
ve chvíli, kdy chceš zjistit, zda se dotýkají dva objekty na obrazovce,
třeba. ve chvíli, kdy má panáček sebrat minci.

Pokud tě to nezajímá (omg, proč ne?!??), tak buď v klidu. Prostě to jen
ve správnou chvíli použijeme.

Zajímavé je, že tento problém se občas používá u pohovorů v zahraničních
firmách. Neboj, při pohovoru na juniorskou pozici se s ním asi nesetkáš :)

function kolize(a, b) {
	return (!( a.x + a.sirka < b.x
		|| b.x + b.sirka < a.x
		|| a.y + a.vyska < b.y
		|| b.y + b.vyska < a.y));
}
*/

const panacek = {

	x: 50,
	y: 200,
	width: 64,
	height: 70,
	element: document.querySelector('#panacek')

};

place();

document.addEventListener('keydown', move);

function move(event) {

	if (event.code === 'ArrowRight') {
		panacek.element.src = 'images/panacek-vpravo.png';
		panacek.x += 10;
		if (panacek.x + panacek.width > window.innerWidth) {
			panacek.x = window.innerWidth - panacek.width;
		}
	} else if (event.code === 'ArrowLeft') {
		panacek.element.src = 'images/panacek-vlevo.png';
		panacek.x -= 10;
		if (panacek.x < 0) {
			panacek.x = 0;
		}
	} else if (event.code === 'ArrowUp') {
		panacek.element.src = 'images/panacek-nahoru.png';
		panacek.y -= 10;
		if (panacek.y < 0) {
			panacek.y = 0;
		}
	} else if (event.code === 'ArrowDown') {
		panacek.element.src = 'images/panacek-dolu.png';
		panacek.y += 10;
		if (panacek.y + panacek.height > window.innerHeight) {
			panacek.y = window.innerHeight - panacek.height;
		}
	} place();

}

function place() {

	panacek.element.style.left = `${panacek.x}px`;
	panacek.element.style.top = `${panacek.y}px`;

}

