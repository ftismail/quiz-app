import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    quastion_category:'',
    quastion_difficulty:'',
    question_type:'',
    amount_of_quastion:10,
    score:0
}

export const infoSlice = createSlice({
    name:'info',
    initialState,
    reducers:{
        categoriesAction:(state,actions)=>{
            state.quastion_category = actions.payload
        },
        difficultyAction:(state,actions)=>{
            state.quastion_difficulty = actions.payload
        },
        
        typeAction:(state,actions)=>{
            state.question_type = actions.payload
        },
        amountAction:(state,actions)=>{
            state.amount_of_quastion = actions.payload
        },
        scoreAction:(state,actions)=>{
            state.score = actions.payload
        }
    }
})
export const {scoreAction,difficultyAction,categoriesAction,amountAction,typeAction} = infoSlice.actions
export default infoSlice.reducer