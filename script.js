function sortNumber(){
    const min =  Math.ceil(document.querySelector(".number-min").value);
    const max =  Math.floor(document.querySelector(".number-max").value);
    const h2 = document.querySelector(".h2");
    const result = Math.floor(Math.random() * (max - min + 1) + min); 
  
    if(max > min){
        h2.innerHTML = `Número Sorteado ${result}`;
    }else{
        h2.innerHTML = "O valor MIN precisa ser MENOR que o valor MAX";
    }

}
    
