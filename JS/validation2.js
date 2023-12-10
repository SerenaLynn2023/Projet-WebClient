//recuperer le formulaire
const formulaire=document.forms.carrieres

const nom=formulaire.nom.value
const addresse_courriel=formulaire.courriel.value
const addresse_postale=formulaire.addresse_postale.value

//Reccupération des messages d'erreur
const erreur1=document.querySelector('#erreur1');
const erreur2=document.querySelector('#erreur2');
const erreur3=document.querySelector('#erreur3');
const erreur4=document.querySelector('#erreur4');
//Declarer les regex pour les champs addresse courriel ,addresse postale, nom  et prenom

//Regex correspondant au nom 
const nomRegex = /^([a-zA-Z ]){2,30}$/

//Regex correspondant au code postal
const codePostalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
//Regex correspondant au courriel
const courrielRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/


formulaire.addEventListener('submit', function(event){
event.preventDefault()
const{nom,courriel,addresse_postale}=formulaire

//Reccupération des valeurs dans le formulaire

const values={ nom:nom.value,addresse_courriel:courriel.value,addresse_postale:addresse_postale.value}





if (!nomRegex.test(values.nom)) {
    
    nom.style.border = '2px solid red'
    
    return
}
nom.style.border=''
if (!courrielRegex.test(values.addresse_courriel)) {
    
    courriel.style.border = '2px solid red'
    
    return
}
courriel.style.border=''

if (!codePostalRegex.test(values.addresse_postale)) {
    
    addresse_postale.style.border = '2px solid red'
   
    return
}
addresse_postale.style.border=''



}





)
