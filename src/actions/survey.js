
export const startUpdateSkintype = (skintype) => ({
    type: 'UPDATE_SURVEY_SKINTYPE',
    skintype
})

export const startUpdateSensitive = (value) => ({
    type: 'UPDATE_SURVEY_SENSITIVE',
    sensitive: value
})

export const startUpdateActiontype = (actiontype) => ({
    type: 'UPDATE_SURVEY_ACTIONTYPE',
    actiontype
})

export const startUpdateFragrancetype = (fragrancetype) => ({
    type: 'UPDATE_SURVEY_FRAGRANCETYPE',
    fragrancetype: fragrancetype
})

export const startShowSurvey = (bool) => ({
    type: 'UPDATE_SURVEY_ACTIVE',
    active: bool
})
