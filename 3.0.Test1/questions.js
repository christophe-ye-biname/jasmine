/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    return texte.slice(0,9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    if (texte === texte.toString())
    {
        return true;
    }
    else
    {
        return false;
    }
}

let AfficherExtensionString =  (texte) => {
    return texte.slice(texte.length-3, texte.length);
}
let NombreEspaceString =  (texte) => {
    let count = 0;
for (let i = 0; i < texte.length;i++)
{
    if (texte[i] == " ")
    {
        count++;
    }
}
return count;
}
let InverseString =  (texte) => {
let str = "";
for (let i = texte.length - 1;i > -1; i--)
{
    str += texte[i];
}
return str;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    return array.map(x => Math.abs(x));
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon,2));
}
let hypothenuse =  (ab, ac) => {
    return Math.pow(Math.pow(ab,2) + Math.pow(ac,2) ,1/2);
}
let calculIMC =  (poids, taille) => {
    return parseFloat((poids / Math.pow(taille,2)).toFixed(2));
}
