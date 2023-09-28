let pattern = "pw";

let regExone = new RegExp(pattern);

let flag = "gi";

let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skilss based pwcontent"


//Return ans in boolen in regular expression
const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult)

const oneMoreResult = strToCheck.replace(regExThree,"p-w")
console.log(oneMoreResult)


//Replace process
const webUrl = "https://pwskills.com/hitesh%20choudhary"
// const useableUrl = webUrl.replace(/%20/, '-')
const useableUrl = webUrl.replace( /%\d\d/,'-')
console.log(useableUrl)



