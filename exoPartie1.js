// exo1
// var dia = "hello word";
// alert(dia);
// exo2
// var nom = "Doe",prenom = "john",ville= "New-York";
// alert(nom+"\n"+prenom+"\n"+ville);
// exo3
// var prenom = "";
// alert("bonjour :"+prompt(prenom));
// exo4
// var nom = "",prenom = "",ville= "";
// alert("bonjour :"+prompt(nom)+"\n"+prompt(prenom)+"\n"+prompt(ville));
// exo5
// function mult(){
// 	var x = document.getElementById('firstNumber').value;
// 	var y = document.getElementById('secondNumber').value;
// 	var num1 = Math.trunc(x);
// 	var result = num1 * y;
// 	document.getElementById('result').innerHTML = result;
// 	return false;
// }

// exo6
// function division(){
// 	var x = document.getElementById("firstNumber").value;
// 	var y = document.getElementById("secondNumber").value;
// 	var num1 = parseInt(x);
// 	var num2 = parseInt(y);
// 	if(x!= 0){
// 		alert(num1 % num2);
// 	}else{
// 		alert("le premier numero doit etre différent de zero");
// 	}
// }
// exo7
// function calc(){
// 	var pointure = document.getElementById('shoeSize').value;
// 	var naissance = document.getElementById('yearOfBirth').value;
// 	var finaleResult = ((((pointure*2)+5)*50)-naissance)+1766;
// 	// var resultPointure = pointure * 2;
// 	// var pointurePlusCinq = resultPointure + 5;
// 	// var allMultCinquante = pointurePlusCinq * 50;
// 	// var soustraireDdn =  allMultCinquante - naissance;
// 	// var finaleResult = soustraireDdn + 1766 ;
// 	// alert(resultPointure+"\n"+pointurePlusCinq+"\n"+allMultCinquante+"\n"+soustraireDdn+"\n"+finaleResult);
// 	document.getElementById('result').innerHTML = finaleResult;

// }
// exo8

function verifAge(){
	var age = document.getElementById('age').value;
	if(age > 18){
		document.getElementById('ageV').innerHTML = "Vous êtes majeur";
		// alert('Vous êtes majeur');
	}else{
		document.getElementById('ageV').innerHTML = "Vous êtes mineur ";
		// alert('Vous êtes mineur');
	}
}
