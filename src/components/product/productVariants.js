import surveyOptions from '../survey/surveyOptions.json'


export const productVariants = {
    "base" :
    {
        "default": "Kaolin",
        "options": [
            "Kaolin"
        ]
    },
    "oil" :
    {
        "default": "None",
        "options": [
            "Teatree", "None"
        ]
    },
    "fragrance" :
    {
        "default": "None",
        "options": surveyOptions[3].options.map((item) => (item.title))
    },
    "exfoliator" :
    {
        "default": "None",
        "options": surveyOptions[4].options.map((item) => (item.title))
    },
    "colour" :
    {
        "default": "None",
        "options": surveyOptions[5].options.map((item) => (item.title))
    }
}