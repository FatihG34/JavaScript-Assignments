const bracketValidator = (bracket) => {

    if (bracket.includes('()') || bracket.includes('[]') || bracket.includes('{}')) {

        while (bracket.includes('()') || bracket.includes('[]') || bracket.includes('{}')) {

            bracket = bracket.replace('()', '').replace('[]', '').replace('{}', '');

        }
        return bracket === '';
        
    } else {
        return false;
    }
}

let oldumu = '{([])}';
console.log(bracketValidator(oldumu));
