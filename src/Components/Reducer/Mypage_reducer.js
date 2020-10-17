const MYPAGE_READ ='ONE';
const MYPAGE_LIST ='LIST';

export const mypage_read =(id) =>({
    type: MYPAGE_READ,
    id: id
});

export const mypage_list =(id) =>({
    type: MYPAGE_LIST,
    id: id
})


const initialState ={
    mypagecard :[
        {
            id : '0',
            description: 'Mypage',
            content : 'content',
        },
        {
            id : '1',
            description:'즐겨찾기',
            content: 'favourite',
        },
        {
            id : '2',
            description:'내가 쓴 글',
            content: 'mypost',
        },
        {
            id : '3',
            description:'내가 쓴 댓글',
            content: 'mycomment',
        }
    ],
    selectcard :{}
}


export default function mypage_reducer(state=initialState, action){
    let mypagecard = state.mypagecard;

    switch(action.type){
        case MYPAGE_READ:
            return{
                ...state,
                selectcard : mypagecard.find(row =>
                    row.id === action.id
                )
            };
        default:
            return state;
    }
}