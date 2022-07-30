const nemo = ['nemo'];
const everyone = ['Adedeji', 'Demilade', 'Wale', 'Tunde', 'nemo', 'Ijaya'];
const large = new Array(10000).fill('nemo')

function findNemo(array){
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log("Nemo Found");
            // Big O Rule 1
            break;
        }
    }
    
}

findNemo(everyone); // O(n)

