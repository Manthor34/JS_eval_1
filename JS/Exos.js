//tp11
// Mélenchon = 100
// try{
//     do { attaque = prompt("Quelle attaque souhaitez-vous utiliser? (Entrez le nombre de l'attaque)\n1 : ben voyons : 35 dmg\n2 : grand remplacement : 25 dmg\n3 : réalisme : 250 dmg")
//         switch (attaque.toLowerCase()) {
//             case "1":
//                 alert("Zemmour lance ben voyons")
//                 alert("C'est très efficace!")
//                 alert("Mélenchon a pris 35 de degats")
//                 Mélenchon = Mélenchon - 105
//             break;
//             case "2":
//                 alert("Zemmour lance grand remplacement")
//                 alert("Mélenchon se protège avec Créolisation")
//                 Mélenchon = Mélenchon - 10
//             break;
//             case "3":
//                 alert("Zemmour utilise réalisme")
//                 alert("Mélenchon esquive l'attaque")
//             break;
//             default:
//                 alert("Not enough power")
//                 throw new Error("You're too weak for that")
//         }
//     } while (Mélenchon > 0);
// } catch(e) {
//     alert(e)
// }
// if (Mélenchon<=0) { 
//     alert("Mélenchon et son parti sont mort")
// }



// EVAL


do {
    start()
    if (Number.isInteger(n1) == true && Number.isInteger(n2) == true) {
        switch (calcul) {
            case "1":
                alert("Le resultat de " + (n1) + " +" + (n2) + " est : " + addition(n1, n2)) ;
            break;
            case "2":
                alert("Le resultat de " + (n1) + " -" + (n2) + " est : " + soustraction(n1, n2)) ;
            break;
            case "3":
                alert("Le resultat de " + (n1) + " *" + (n2) + " est : " + multiplication(n1, n2)) ;
            break;
            case "4":
                alert("Le resultat de " + (n1) + " /" + (n2) + " est : " + division(n1, n2)) ;
            default :
                alert("erreur, input invalide")
        }
    } else {
        alert("Nombres invalides")
    }
    quest = prompt("voulez vous faire un calcul?\n1.oui\n2.non(Veuillez entrer le chiffre correspondant)")
} while (quest == 1);


function start(){
    calcul = prompt("Quel calcul souhaitez vous faire? (Veuillez entrer le chiffre correspondant)\n1.addition\n2.soustraction\n3.multiplication\n4.division")
    if (calcul>0 && calcul<=4){
        n1 = parseInt(prompt("Entrez le premier nombre"));
        n2 = parseInt(prompt("Entrez le deuxieme nombre"));
    } else {
        alert("erreur, chiffre invalide");
        start();
    }
}

function addition(n1, n2){
    return n1+n2
}
function soustraction(n1, n2){
    return n1-n2
}
function multiplication(n1, n2){
    return n1*n2
}
function division(n1, n2){
    return n1/n2
}
