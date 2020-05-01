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
