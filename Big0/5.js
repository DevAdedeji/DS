function printAllNumbersThenAllPairsSums(numbers){
    console.log("These are the numbers");
    numbers.forEach((number)=>{ // O(n)
        console.log(number);
    })

    console.log("And these are their sums");
    numbers.forEach((i)=>{ // O(n)
        numbers.forEach((j)=>{ // O(n)
            console.log(i+j);
        })
    })
}

printAllNumbersThenAllPairsSums([1,2,3,4,5])

// Big O(n^2)