const SurveyDefaultState = {
    skintype: '',
    colour: ''
};

export default (state = SurveyDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SURVEY_SKINTYPE':
            return {
                ...state,
                skintype: action.skintype
            }
        default:
            return state
    }
}