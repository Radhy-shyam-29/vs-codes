// q2





function findSomething(arr){
    // arr  = ["ramesh", "mamdam", "raju"]
    let obj = {}

    for(let t of arr){
       let arr =  getPallindromeSubstring(t)
       obj[t] = arr
    }
    console.log(obj)
}

findSomething(["ramesh", "mamdam", "raju"])




function getPallindromeSubstring(str){ 
    //"madam" 
    let arr = []

    for(let i = 0; i<=str.length-1; i++){
      
        let sub = ""
        let rsub = ""
        for(let j = i; j<=str.length-1; j++) {
            sub = sub + str[j]
            // console.log(sub)
            rsub = str[j] + rsub

            if(sub == rsub){
                // console.log(sub)
                let set = new Set(sub)
                if(sub.length == set.size){
                    arr.push(sub)
                }
            }
        }
        
    }
    return arr


}

getPallindromeSubstring("madam")