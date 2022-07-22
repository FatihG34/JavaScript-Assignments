// function bracketValidator(bracket) {
//     while (bracket.includes('()')) {
//         bracket.replace('()', '');
//     }
//     return bracket === ''
// }
function bracketValidator(bracket) {
    if (bracket.includes('()') || bracket.includes('[]') || bracket.includes('{}')) {
        while (bracket.includes('()') || bracket.includes('[]') || bracket.includes('{}')) {
            bracket.replace('()', '').replace('[]', '').replace('{}', '')
        }
        return bracket === ''
    } else {
        return false
    }
}


let oldumu = '{[()]}';
console.log(bracketValidator(oldumu));

// console.log(oldumu.includes('()'));