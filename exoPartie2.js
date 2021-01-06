// exo1
// function imgTwo() {
// 	var image = document.getElementById('image1');
// 	if (image.src.match("images/image1.jpg")) {
// 		image.src = "images/image1_2.jpg";
// 	}else{
// 		image.src = "images/image1.jpg";
// 	}
// }
// exo2
// var x =document.getElementById('lastname');
// function messageFuc() {
//   alert('Merci de votre participation');
// }
// x.addEventListener('focus',messageFuc);
// exo3
// exo4
// function sup(){
// 	document.getElementById('lastname').value ="";
// 	document.getElementById('firstname').value ="";
// 	document.getElementById('city').value ="";
// }
// exo5
// function changeImage(image) {
// 	image.src= "images/"+image.id+"_2.jpg";
// }
// exo6
// function changeImage(image) {
// 	image.src= "images/"+image.id+"_2.jpg";
// }
// function changeImage1(image) {
// 	image.src= "images/"+image.id+".jpg";
// }
// exo bonus 1
	// var plus = document.getElementById('plus');
	// var moin = document.getElementById('moin');
	// plus.onclick= function(){
	// 	console.log(i+=1)
	// }
	// moin.onclick= function(){
	// 	console.log(i-=1)
	// }
	// var score = 0;
	// function plus(){
 //    score++;
 //    document.getElementById('compteur').innerHTML = score;
	// }
	// function moin(){
 //    score--;
 //    document.getElementById('compteur').innerHTML = score;
	// }
	// -----------------------------------------
	// var compteur = document.getElementById('compteur');
	// var plus = document.getElementById('plus');
	// var moin = document.getElementById('moin');
	// var score = 0;
	// 	 	plus.onclick= function teste(){
	// 	    score++;
	// 	    document.getElementById('compteur').innerHTML = score;
	// 	    // return score;
	// 	    if(score == 10 ){
	// 			document.getElementById('compteur').innerHTML = 'bravo vous avez attendu le 10';
	// 		}
	// 		}
	// 		moin.onclick= function (){
	// 	    score--;
	// 	    document.getElementById('compteur').innerHTML = score;
	// 	    // return score;
	// 	    if(score == 10 ){
	// 			document.getElementById('compteur').innerHTML = 'bravo vous avez attendu le 10';
	// 		}
	// 		}
	// 	exo bonus 2
		// 	var ale = Math.floor(Math.random()*100);
		// 	console.log(ale);
		// 	var nbn =[]; //array pour stoquer les chiffres 
		// function aleatoire(){
		// 	var nb = document.getElementById('champ').value; //recup chiffre 
		// 	nbn.push(nb);// ajout dans le array 
		// 	console.log(nbn);
		// 	document.getElementById('essai').innerHTML = "vous venu d'essayé le : "+nbn;//affichage les chiffres choisé
		// 	var nv = document.getElementById('rejouer');//btn rejouer
		// 	nv.onclick = ()=>{
		// 		window.location.reload();
		// 		// document.getElementById('message').innerHTML = 'bonne chance';//message 	
		// 		// document.getElementById('champ').disabled = false;//active le champ
		// 		// document.getElementById('champ').innerHTML = "";//vider le champ
		// 		// document.getElementById('btnChamp').disabled = false;//active le btn
		// 		// document.getElementById('rejouer').style = "visibility: hidden;"//cache le btn rejouer
		// 		// document.getElementById('essai').innerHTML ='';// vider le message 
		// 	}
		// 	if(nbn.length == 10){
		// 		// message perdu!
		// 		document.getElementById('message').innerHTML = 'perdu !';
		// 		// bloque le champ et button!
		// 		document.getElementById('champ').disabled = true;
		// 		document.getElementById('btnChamp').disabled = true;
		// 		// afficher button rejouer
		// 		document.getElementById('rejouer').style = "visibility: visible;"
		// 	}else{
		// 		//conduction et message!
		// 		if(nb < ale){
		// 			document.getElementById('message').innerHTML = 'plus grand !'
		// 		}else if (nb > ale){
		// 			document.getElementById('message').innerHTML = 'plus petit !'
		// 		}else{
		// 			document.getElementById('message').innerHTML = 'bravo vous avez gagné !'
		// 		}
		// 	}
			
		// }
		// exo bonus3
	
	const touches = [...document.querySelectorAll('.bouton')];//recup toutes les boutons et transformé la liste en tableau avec method spred
	const listeKeyCode = touches.map(touche => touche.dataset.key)// recup un tableau de toute les keyCode sous forme de phrase
	const ecran = document.querySelector('.ecran');// recup valeur qui possede ecran
	document.addEventListener('keydown',(e)=>{
		const valeur = e.keyCode.toString();// recup valeur de keydown  sous forme de string
		calculer(valeur);
	})
	document.addEventListener('click', (e)=>{
		const valeur = e.target.dataset.key;// recup valeur clické  sous forme de string
		calculer(valeur);
	})
	const calculer = (valeur)=>{
		if(listeKeyCode.includes(valeur)){  // verif les valeurs choisé s'il existe et bloquer le reste du clavier
			switch(valeur){
				// la touche C 
				case '8':
					ecran.textContent = '';
					break;
				// la touche Entrer
				case '13':
					const calcul = eval(ecran.textContent);// evaluer le contenu de l'ecran. eval() est func javascript donne result de calcul
					ecran.textContent = calcul;// mettre resultat de calcul
					break
					//le reste de touches
				default : 
					const indexKeyCode = listeKeyCode.indexOf(valeur);// renvoi l'index de la valeur de le tableau
					const touche = touches[indexKeyCode];
					ecran.textContent += touche.innerHTML;		
				}
		}
	}
	window.addEventListener('error', (e)=>{
		alert('une erreur est survenue dans votre calcul :\n vous ne pouvez pas avoir deux opérateurs coller');
	})

