var chaine = new String("");

$(document).ready(function() {
	
	$(".chiffre").click(function(){
		var valeur = $(this).attr('value');	
		chaine = chaine + valeur;
	});

	$(".signe").click(function(){
		var valeur = $(this).attr('value');
		if (chaine!="" && !(chaine.endsWith('*')) && !(chaine.endsWith('/')) && !(chaine.endsWith('-')) 
			&& !(chaine.endsWith('+')) && !(chaine.endsWith('.'))) {
			chaine = chaine + valeur;
			$("#decimal").attr("disabled",false);
		}
	});

	$("#decimal").click(function(){
		$("#decimal").attr("disabled",true);
	});

	$("#C").click(function(){
		chaine = "";
	});

	$("input").click(function(){
		$("#affichage").val(chaine);
	});
	
	$("#egal").click(function(){
		if (chaine.endsWith('*') || chaine.endsWith('/') || chaine.endsWith('+') || chaine.endsWith('-')){
			$("#affichage").val('Erreur(termine par un opérateur)');
			chaine = "";
		}else{
			var resultat = eval(chaine);
			resultat = Math.round((resultat)*100)/100;

			if (chaine.endsWith('/0')){
				$("#affichage").val('Erreur(division par 0)');
			}else{
				chaine=resultat;
				$("#affichage").val(resultat);
			}
		}

		$("#decimal").attr("disabled",false);
		chaine=resultat;
	});
	
});

