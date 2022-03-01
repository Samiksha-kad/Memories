export default (posts=[],action)=>{
    switch(action.type){

        case 'FETCH_POST':
            return action.payload;
        case 'CREATE_POST':
            return [...posts,action.payload];
        case 'UPDATE_POSTS':
            return posts.map(post=> post._id === action.payload._id? action.payload:post)
        default:
            return posts
    }
}