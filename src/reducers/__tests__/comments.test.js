import commentsReducer from '../comments';

it('handles actions of type SAVE_COMMENT', () =>{
    const action = {
        type: 'SAVE_COMMENT',
        payload: 'New Comment'
    }
    // Mannualy invoking the reducer
    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);

});

it('handles actions of unknown types', () =>{
    const action = {
        type: 'Unkown',
        payload: 'New Comment'
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
})