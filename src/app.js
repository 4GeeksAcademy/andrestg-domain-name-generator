/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["The", "My", "Ours", "Hers"];
  let adj = ["masterful", "prosmiscuous", "immeasurable", "magical"];
  let noun = ["Volkswagen", "Programmer", "Virgin", "Railway"];
  let extension = [".net", ".com", ".ve", ".io"];

  function generateDomainName(arr1 = [], arr2 = [], arr3 = [], arr4 = []) {
    let domainName = [];

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          for (let l = 0; l < arr4.length; l++) {
            domainName.push(arr1[i] + arr2[j] + arr3[k] + arr4[l]);
          }
        }
      }
    }
    return domainName;
  }

  let Dominio = generateDomainName(pronoun, adj, noun, extension);

  console.log(Dominio);
};
