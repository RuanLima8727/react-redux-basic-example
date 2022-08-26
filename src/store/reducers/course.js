
const INITIAL_STATE = {
    activeLesson: 'Não Informado',
    activeModule: 'Não Informado',
    modules: [
        {
            id: 1, description: 'Primeiro Módulo', lessons:[
                {id: 1, title: 'Primeira Lição'},
                {id: 2, title: 'Segunda Lição'}
            ]
        },
        {
            id: 2, description: 'Segundo Módulo', lessons:[
                {id: 3, title: 'Terceira Lição'},
                {id: 4, title: 'Quarta Lição'},
            ]
        }
    ]
}
export const course = (state = INITIAL_STATE, action)=>{
    if(action.type === 'TOGGLE_LESSON'){
        return {
            ...state,
            activeLesson: action.lesson.title,
            activeModule: action.module.description
        }
    }
    return state
}