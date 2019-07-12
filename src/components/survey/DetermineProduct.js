

const categories = ["Base", "Essential Oil", "Fragrance", "Exfoliator"]

const NONE = "None"

//Clays
const KAOLIN = "Kaolin Clay"
const bases = [KAOLIN]

//Fragrances
const ORANGE = "Orange"
const fragrances = [ORANGE, NONE]

//Exfoliators
const CHESTNUT = "Chestnut"
const exfoliators = [CHESTNUT, NONE]

//Essential Oils
const TEATREE = "Teatree"
const essentialOils = [TEATREE, NONE]

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
