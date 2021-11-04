// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
       return driver.toLowerCase() === string.toLowerCase()
    })
 }

 function fuzzyMatch(driver, string) {
    let correctLetters = driver.filter(beginningLetters => beginningLetters.substring(0,2) === string)
return correctLetters
}
 
//  function matchName(drivers, string) {
//      return drivers.filter(function(driver){
//              return drivers.name && drivers.hometown;
//      }
//     }

//  matchName(drivers, 'Bobby');