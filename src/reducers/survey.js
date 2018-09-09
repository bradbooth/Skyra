const SurveyDefaultState = {
    skintype: ''
};

export default (state = SurveyDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SURVEY_CHOICES':
            return {
                ...state,
                ...action.surveyChoices
            }
        default:
            return state
    }
}