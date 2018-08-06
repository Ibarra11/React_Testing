
// You have to initialize your reducer with some inital state becuase when you pass the reducer to the store
// it is going to invoke the reducer and the default case is going to be selected and you dont want to return 
// undefined

export const SAVE_COMMENT = 'SAVE_COMMENT';

export default function (state = [], action) {
    switch (action.type) {
       case SAVE_COMMENT:
            return [...state, action.payload]
        default: 
            return state;
        
    }
}

export function saveComment(comment){
    return{
        type: SAVE_COMMENT,
        payload: comment
    }
}