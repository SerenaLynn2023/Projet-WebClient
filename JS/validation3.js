const formulaire=document.forms.retroaction

const nom=formulaire.nom.value
const addresse_courriel=formulaire.courriel.value
//Recuperation des elements du bloc de remerciement

const remerciement= document.querySelector('#remerciement')
const nomclient = document.getElementById('nom_client')
const nomapppareil= document.querySelector('#nom_appareil')
//Declarer les regex pour les champs addresse courriel ,addresse postale, nom  et prenom

//Regex correspondant au nom 
const nomRegex = /^([a-zA-Z ]){2,30}$/


//Regex correspondant au courriel
const courrielRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/

formulaire.addEventListener('submit', function(event){
    event.preventDefault()
    const{nom,courriel,product}=formulaire
    
    //Reccupération des valeurs dans le formulaire
    
    const values={ nom:nom.value,addresse_courriel:courriel.value, produit:product.value}
    
    
    
    
    
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
    
    remerciement.style.display = 'block'
    nomclient.innerHTML = values.nom
    nomapppareil.innerHTML=product.options[product.selectedIndex].text
   
    
    
    }
    
    
    
    
    
    )
