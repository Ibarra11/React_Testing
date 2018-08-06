import {saveComment} from '../../reducers/comments';
import {SAVE_COMMENT} from '../../reducers/comments';

// WE have mulitple test, so it might be useful to group the test toghether in a describe
describe('saveComment', () =>{
    it('has the correct type', () =>{
        let type = saveComment().type;
        expect(type).toEqual(SAVE_COMMENT);
    });
    it('has the correct payload', () =>{
        let payload = saveComment('payload').payload;
        expect(payload).toEqual('payload');
    })
    
})