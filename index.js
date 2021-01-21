class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(array){
    let newArray = []
    let split = array.split(" ")
   
    split.forEach(word => {
      if (word !== "the" && word !== "a" &&  word !== "an" &&  word !== "but" &&  word !== "of" && word !== "and" &&  word !== "for" &&  word !== "at" && word !== "by" &&  word !== "from") {
        newArray.push(Formatter.capitalize(word))
      } else {
        newArray.push(word)
      }
    });
    newArray.push(split[0].charAt(0).toUpperCase() + split[0].slice(1))
     return newArray.join(" ")
  }
// static titleize(string) {
//   let newArray = []
//   let array = string.split(' ')
//   newArray.push(array[0].charAt(0).toUpperCase() + array[0].slice(1))
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] !== 'the' && array[i] !== 'a' && array[i] !== 'an' && array[i] !== 'but' && array[i] !== 'of' && array[i] !== 'and' && array[i] !== 'for' && array[i] !== 'at' && array[i] !== 'by' && array[i] !== 'from') {
//       newArray.push(Formatter.capitalize(array[i]))
//     } else {
//       newArray.push(array[i])
//     }
//   }
//   return newArray.join(' ')
// }
// }
}
