// DOM

const touches = [...document.querySelectorAll('.bouton')]; // sélectionner tous les elts qui ont la classe bouton
// console.log(touches)
const listkeycode = touches.map(touche => touche.dataset.key);
// console.log(listkeycode)
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => { // la fontion qui permet de récuperer le chiffre lorqu'on l'entre au clavier
    const valeur = e.KeyCode.toString();
    calculer(valeur)
    // console.log(valeur, typeof valeur)
})

document.addEventListener('click', (e)=> { // la fontion qui permet de récuperer le chiffre lorqu'on click sur l'ecran
    const valeur = e.target.dataset.key;
    calculer(valeur)
    // console.log(valeur, typeof valeur)
})

const calculer = (valeur) => {
    if (listkeycode.includes(valeur)) {
        console.log(listkeycode)
        switch(valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listkeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('une erreur est survenue dans votre calcul :' + e.message)
})