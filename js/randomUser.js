'use strict';
//Questionne un API
fetch('https://randomuser.me/api/')
    //Attend la réponse puis analyse le JSON et le retourne
    .then(function (reponseAuFormatJson){
        return reponseAuFormatJson.json(); //transforme Json en Javascript
    })
    //Attend la réponse au format JavaScript
    .then(function (reponseAuFormatJS){
        console.log(reponseAuFormatJS);
        console.log(reponseAuFormatJS.result[0].email);
    });