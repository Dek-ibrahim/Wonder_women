let body    = document.querySelector("body");
let headerOne    = document.querySelector("h1");
let pragraph     = document.querySelector("p");
let containerL1  = document.getElementById("container");
let containL1    = document. createElement("contain");
let pragraphL2   = document.getElementById("pragraph");

headerOne.innerHTML = "Wonder women";
pragraph.innerHTML = "Public-24,may,2023";
pragraphL2.innerHTML = "Wonder Woman, whose real name is Diana Prince, is an Amazonian princess from the island of Themyscira, also known as Paradise Island. She is the daughter of Queen Hippolyta and was granted her powers by the Greek gods. Trained in the ways of the Amazons, she possesses superhuman strength, speed, agility, and durability, as well as the ability to fly and wield a magical lasso called the Lasso of Truth, which compels anyone it captures to tell the truth.F";

// style js css
const containerStyle = `
    display: flex;
    align-content: center;
    gap: 20px;
`
const bodyStyle =`
    background-color: rgb(153, 216, 216);
    justify-content: center;
    align-items: center;
    margin-top: center;
    postion
    box-sizing: border-box;
`
const containStyle = `
    width: 50rem; 
    boder-radius: 90px;;
    padding: 60px;
    margin: 0;
    background: whitesmoke;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) 
`
const headerStyle = `
    font-size: 32px;
`
containerL1.style.cssText = [containerStyle];
body.style.cssText = [bodyStyle];
containL1.style.cssText = [containStyle];
headerOne.style.cssText = [headerStyle];
