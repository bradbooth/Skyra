import surveyOptions from '../components/survey/surveyOptions.json'


const SurveyDefaultState = {
    active: false,
    skintype: surveyOptions.skintype.options[0].title,
    actiontype: surveyOptions.actiontype.options[0].title,
    fragrancetype: surveyOptions.fragrancetype.options[0].title  
};

export default (state = SurveyDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SURVEY_SKINTYPE':
            return {
                ...state,
                skintype: action.skintype
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
        case 'UPDATE_SURVEY_ACTIVE':
            return {
                ...state,
                active: action.active
            }
        default:
            return state
    }
}

