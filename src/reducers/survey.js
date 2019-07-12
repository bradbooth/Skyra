import surveyOptions from '../components/survey/surveyOptions.json'

const NONE = "None"

const SurveyDefaultState = {
    active: false,
    skintype: surveyOptions[0].options[0].title,
    sensitive: surveyOptions[1].options[0].title,
    actiontype: surveyOptions[2].options[0].title,
    fragrancetype: NONE,
    exfoliatortype: NONE    
};

export default (state = SurveyDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SURVEY_SKINTYPE':
            return {
                ...state,
                skintype: action.skintype
            }
        case 'UPDATE_SURVEY_SENSITIVE':
            return {
                ...state,
                sensitive: action.sensitive
            }
        case 'UPDATE_SURVEY_ACTIONTYPE':
            return {
                ...state,
                actiontype: action.actiontype
            }
        case 'UPDATE_SURVEY_FRAGRANCETYPE':
            return {
                ...state,
                fragrancetype: action.fragrancetype
            }
        case 'UPDATE_SURVEY_EXFOLIATORTYPE':
            return {
                ...state,
                exfoliatortype: action.exfoliatortype
            }
        case 'UPDATE_SURVEY_ACTIVE':
            return {
                ...state,
                active: action.active
            }
        default:
            return state
    }
}

