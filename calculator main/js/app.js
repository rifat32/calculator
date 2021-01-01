/*
####################################################################
Global Constants
####################################################################
*/ 
const π = 3.141592653589793;
const e = 2.718281828459045;
const arr = [0];

/*
####################################################################
Global variables
####################################################################
*/ 
let acCount = 1;
/*
####################################################################
Angle MOD
####################################################################
*/ 


let deg = 0;
const radId = document.getElementById("rad");
const degId = document.getElementById("deg");
radId.addEventListener("click", () => {
  
  radId.classList.add("btn-Own");
  degId.classList.remove("btn-Own");
 return deg = 0;
});
degId.addEventListener("click", () => {
   
  degId.classList.add("btn-Own");
  radId.classList.remove("btn-Own");
   return deg = 1;
});

/*
####################################################################
Custom functions related to mathemetical operations
####################################################################
*/ 
// 
const factorialize = (num) => {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
const sin = (num) =>{
  if(deg == 0){
    return Math.sin(num);
 
  }
  else{
    return Math.sin(num * π / 180);
  }
 
}
const arcsin = (num) =>{
  if(deg == 0){
    return Math.asin(num);
 
  }
  else{
    return Math.asin(num) *180  / π;
  }
 
}
const cos = (num) => {
  if(deg == 0){
  
    return Math.cos(num);
    }
    else{
      return Math.cos(num * π / 180);
    }
}
const arccos = (num) =>{
  if(deg == 0){
    return Math.acos(num);
 
  }
  else{
    return Math.acos(num) *180  / π;
  }
 
}
const tan = (num) => {
  if(deg == 0){
 
    if(num == 1.5707963267948966 || num == 4.71238898038469){
      return "Error";
    }
   else{
    return Math.tan(num);
   }
    
    }
    else {
   
     if(num == 90 || num == 270){
      return "Error";
    }
    else{
      return Math.tan(num * π / 180);
    }
      
      }
    }
    const arctan = (num) =>{
      if(deg == 0){
        return Math.atan(num);
     
      }
      else{
        return Math.atan(num) *180  / π;
      }
     
    }
    const exp = (num,zeros) => {
let i, text, exp;
text = "";
for(i=0; i<zeros; i++){
text += "0";
}
exp = num + text;
return exp;
    }
    const square = (num) => {
      return num * num
          }
     const nRoot = (power, num) => {
            power = 1 / power;
            return Math.pow(num,power);
                }
    const ans = () => {
      let ans;
      ans = arr[arr.length-1];
      if(ans == 'Error'){
        return ans;
      }
      else{   return parseFloat(ans);
      }
     
     
    }
  // const Percentage = (partialValue, totalValue) => {
  //     return (100 * partialValue) / totalValue;
  //  } 
    
   
  
 
/*
####################################################################
reflecting the input field by button click
####################################################################
*/ 

const ceInput= () => {
   acClass.innerHTML = 'CE';
     acCount = 0;
 }
const piInput = () => {
  let x = "π"
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
ceInput();
 }
 const Rinput = () => {
  let x =  Math.random().toPrecision(7);
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  ceInput();
  
 }
const rootInput = () => {
  let x = " √("
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
   document.getElementById("input").focus();
   ceInput();
 
 }
 const rootInvInput = () => {
   let x = " square("
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
   document.getElementById("input").focus();
   ceInput();
 
 }

 const inverseInput = () => {
   let x =  " 1/("
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();
 }
 const factorInput = () => {
   let x = " !("
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();
 }
 const sinInput = () => {
   let x = " sin(";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const sinInvInput = () => {
   let x = " arcsin(";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const cosInput = () => {
  let x = " cos(";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const cosInvInput = () => {
  let x = "arccos(";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const tanInput = () => {
  let x = " tan(";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const tanInvInput = () => {
  let x = " arctan(";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const logInput = () => {
  let x = " log(";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const logInvInput = () => {
  let x = " ∧(10 expotent ";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const lnInput = () => {
  let x = " ln(";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const lnInvInput = () => {
  let x = " ∧(e expotent ";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }

 const expInput = () =>{
  let x = " exp( E ";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const powerInput = () => {
  let x = " ∧( expotent ";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 const powerInvInput = () => {
  let x = " ⋁ ( n√ ";
  var str = document.getElementById("input").value;
  document.getElementById("input").value = str.concat(x);
  document.getElementById("input").focus();
  ceInput();

 }
 
 const ansInput = () => {
  let x = "Ans";
  let str = document.getElementById("input").value;
  if(acCount == 1){
    document.getElementById("input").value = x;
   }
   else if(acCount == 0){
    document.getElementById("input").value = str.concat(x);
   }
  document.getElementById("input").focus();
  ceInput();

 }
 
 const ac = () => {
   if(acCount == 1){
    document.getElementById("input").value = '';
   }
   else if(acCount == 0){
let str = document.getElementById("input").value;
let str2 = str.slice(0, -1);
document.getElementById("input").value = str2;
   }
   ceInput();

  
 }





 
/*
####################################################################
our calculate function
####################################################################
*/ 

const calculate = () => {
  // taking input
  let str = document.getElementById("input").value;
 
  let br1 =  str.split("(").length-1;
  let br2 =  str.split(")").length-1;
if(br1 !== br2){
 let toBeAdded = br1 - br2;
 for(let i = 0; i < toBeAdded; i++){
  str += (')');
 }
}
document.getElementById("input").value = str;

  

  
  // new string for calculation
  let strcal = str.replace(  /n√/g, ",");
 strcal = strcal.replace(  /∧/g, "Math.pow");
 strcal = strcal.replace(  /⋁/g, "nRoot");
 
 strcal = strcal.replace(/√/g,"Math.sqrt");
 strcal = strcal.replace( /expotent/g, ",");
 strcal = strcal.replace( /E/g, ",");
 strcal = strcal.replace( /!/g, "factorialize");
 strcal = strcal.replace( /log/g, "Math.log10");
 strcal = strcal.replace( /ln/g, "Math.log");
 strcal = strcal.replace( /Ans/g, "ans()");
 strcal = strcal.replace( /%/g, "/100");
 strcal = strcal.replace( /÷/g, "/");
 strcal = strcal.replace( /×/g, "*");
 strcal = strcal.replace( /−/g, "-");





 
//   finally evaluate
  let x = eval(strcal);

  
if(x === NaN || x === ''){
  document.getElementById("demo").innerHTML = `Error`;
  arr.push(`Error`);
}
else { 
  let y = x.toPrecision(12);
  let z = parseInt(y);
  let a = y - z;
  if(a == 0.0){
    document.getElementById("demo").innerHTML = `${str} = ${z}`;
    arr.push(x);
  }
 
  else{
    document.getElementById("demo").innerHTML = `${str} = ${y}`;
    arr.push(x);
  }

}


// document.getElementById("txt").innerHTML = strcal;

acClass.innerHTML = 'AC';
  acCount = 1;
  document.getElementById("input").focus();
  


}
 /*
####################################################################
click events
####################################################################
*/ 
// factor@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const factorClass = document.querySelector('.factorInput');
factorClass.addEventListener('click',factorInput);

// exp@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const expClass = document.querySelector('.expInput');
expClass.addEventListener('click',expInput);

// calculate@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const calculateClass = document.querySelector('.calculate');
calculateClass.addEventListener('click',calculate);

// acc@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const acClass = document.querySelector('.ac');
acClass.addEventListener('click', ()=> {
  ac();
});
const ansClass = document.querySelector('.ans');
ansClass.addEventListener('click', ansInput);

// inv@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let inv = 0;
const invClass = document.querySelector('.inv');
invClass.addEventListener('click', () => {
  invClass.classList.toggle('chcolor');

  if(invClass.className.includes('chcolor')){
  inv = 1;
  sinch.innerHTML = "sin<sup>-1</sup>";
  cosch.innerHTML = "cos<sup>-1</sup>";
  tanch.innerHTML = "tan<sup>-1</sup>";
  lnch.innerHTML = "e<sup>x</sup>";
  logch.innerHTML = "10<sup>x</sup>";
  rootch.innerHTML = "x<sup>2</sup>";
  powerch.innerHTML = "<sup>y</sup>&#8730;x";
  }else{ 
    inv = 0;
    sinch.innerHTML = 'sin';
    cosch.innerHTML = "cos";
    tanch.innerHTML = "tan";
    lnch.innerHTML = "ln";
    logch.innerHTML = "log";
    rootch.innerHTML = "&#8730;";
    powerch.innerHTML = "x <sup>&#8743; <sup>y</sup>  </sup>";
  }
});

// sinch@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const sinch =  document.querySelector('.sinch');
sinch.addEventListener('click',()=> { 
  if(inv == 0){
   sinInput();
  }
  else if(inv == 1){
    sinInvInput();
   }
}
  );
   // cosch@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const cosch =  document.querySelector('.cosch');
  cosch.addEventListener('click',()=> { 
    if(inv == 0){
     cosInput();
    }
    else if(inv == 1){
      cosInvInput();
     }
  }
    );
      // tanch@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const tanch =  document.querySelector('.tanch');
    tanch.addEventListener('click',()=> { 
      if(inv == 0){
       tanInput();
      }
      else if(inv == 1){
       tanInvInput();
       }
    }
      );
      // lnch@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      const lnch =  document.querySelector('.lnch');
      lnch.addEventListener('click',()=> { 
        if(inv == 0){
         lnInput();
        }
        else if(inv == 1){
          lnInvInput();
         }
      }
        );
        
        // logch@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const logch =  document.querySelector('.logch');
        logch.addEventListener('click',()=> { 
          if(inv == 0){
           logInput();
          }
          else if(inv == 1){
            logInvInput();
           }
        }
          );
          // rootch@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          const rootch =  document.querySelector('.rootch');
          rootch.addEventListener('click',()=> { 
            if(inv == 0){
             rootInput();
            }
            else if(inv == 1){
              rootInvInput();
             }
          }
            );
            // powerch@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            const powerch =  document.querySelector('.powerch');
            powerch.addEventListener('click',()=> { 
              if(inv == 0){
               powerInput();
              }
              else if(inv == 1){
                powerInvInput();
               }
            }
              );
              // common@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
              const commonClass = document.querySelectorAll('.cc');
commonClass.forEach(el => {
   el.addEventListener('click',() => {
     
    let str = document.getElementById("input").value;
    let cc = el.innerHTML;
    document.getElementById("input").value = str.concat(cc);
    document.getElementById("input").focus();
    ceInput();

   });

});



 





 
/*
####################################################################
Keyboard events
####################################################################
*/ 

const removeLast = () =>{
  let str = document.getElementById("input").value;
  let str2 = str.slice(0, -1);
  document.getElementById("input").value = str2;
}
const  key = (event) => {
  let x = event.which || event.keyCode;
 if(x == 13 || x == 61 ){
   return calculate();
   
 }

 else if(x == 113 || x == 81){
rootInput();
event.preventDefault();
 }
 else if(x == 114){
  powerInvInput();
  event.preventDefault();
   }
  else if(x == 82){
   Rinput(); 
   event.preventDefault();
     }
   else if(x == 116 ){
    tanInput();
    event.preventDefault();
     }
     else if(x == 84){
      tanInvInput();
      event.preventDefault();
       }
     else if(x == 112|| x == 80){
      piInput();
      event.preventDefault();
       }
  else if(x == 97|| x == 65){
  ansInput();
  event.preventDefault();
    }
    else if(x == 115){
      sinInput();
      event.preventDefault();
        }
        else if( x == 83){
          sinInvInput();
          event.preventDefault();
            }
        else if(x == 103|| x == 71){
          logInput();
          event.preventDefault();
            }
            else if(x == 108|| x == 76){
              lnInput();
              event.preventDefault();
                }
                else if(x == 99){
                  cosInput();
                  event.preventDefault();
                    }
                    else if(x == 67){
                      cosInvInput();
                      event.preventDefault();
               }
               else if(x == 101){
                eInput();
                event.preventDefault();
         }
         
         else if(x == 40||x == 41||x == 48 || x == 49 || x == 50 || x == 51 || x == 52 || x == 53 || x == 54 || x == 55 || x == 56 || x == 57 || x == 43 || x == 45 || x == 47 || x == 42 || x == 37 || x == 46 ){
         ceInput();
            }
            else{
              event.preventDefault();
            }
       
         
               

 
}




document.getElementById("input").addEventListener("keypress", key);

/*
####################################################################
window load
####################################################################
*/ 
window.addEventListener('load', () => {
  acCount = 1;
  document.getElementById("input").value = '';
});
/*
####################################################################
window key
####################################################################
*/ 
const  key3 = (event) => {
  
  document.getElementById("input").focus();
   
}

window.addEventListener("keypress", key3);



