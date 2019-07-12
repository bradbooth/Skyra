const NONE = "None"

//Clays
const KAOLIN = "Kaolin Clay"


export function getCorrespondingProductIngredient (title, survey){
    var ingredient;

    switch(title){
        case "base":
            switch (survey.skintype){
                case "Normal":
                case "Dry":
                    ingredient = KAOLIN
                    break;
                default:
                    ingredient = KAOLIN
            }
            break;
        case "fragrance":
            ingredient = survey.fragrancetype
            break; 
        case "exfoliator":
            ingredient = survey.exfoliatortype
            break;
        case "oil":
            ingredient = NONE
            break;
    }

    return ingredient

}
