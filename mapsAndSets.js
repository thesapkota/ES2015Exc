new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

[...new Set("referee")].join("") // ref

let m = new Map();
m.set([1,2,3], true); // {[1,2,3] => true}
m.set([1,2,3], false); // {[1,2,3] => false}

function hasDuplicate(arr){
    const noDupe = new Set(arr);
    if((arr.length) === (noDupe.size)){
        return false;
    }
    return true;
}

// function vowelCount(str) {
//     let splitArr = str.split("");
//     let obj = {};
//     const vowels = "aeiou";
  
//     splitArr.forEach(function(letter) {
//       let lowerCasedLetter = letter.toLowerCase()
//       if (vowels.indexOf(lowerCasedLetter) !== -1) {
//         if (obj[lowerCasedLetter]) {
//           obj[lowerCasedLetter]++;
//         } else {
//           obj[lowerCasedLetter] = 1;
//         }
//       }
//     });
//     return new Map(Object.entries(obj));
//   }

function vowelCount(str){
    let splitArr = str.split("");
    const vowelCountMap = new Map();
    const vowels = "aeiou";
    splitArr.forEach(function(v) {
        let lowerCased = v.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            if(vowelCountMap.has(lowerCased)){
                vowelCountMap.set(lowerCased,vowelCountMap.get(lowerCased)+1);
            }
            else{
                vowelCountMap.set(lowerCased, 1);
            }
        }
});
return vowelCountMap;
}