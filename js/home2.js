let number = prompt("Enter the number","");
number = Number(number);


  for(let i = 2; i<=number; i++ ){
        let isSimple=true;
        for(let j=2; j<i; j++){
            if(i%j==0){
                isSimple=false;
                break;
            }            
        }
        if(isSimple){
            console.log(i);            
        }
    }
    


