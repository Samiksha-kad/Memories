import * as api from '../api'
// Action Creators == returns action always
export const getPosts = () => async (dispatch) => {
    console.log(api.fetchPosts())
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_POST', payload: data });

    }
    catch (error) {
        console.log(error, "error in getposts")
    }

}
export const createPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post)
        dispatch({ type: 'CREATE_POST', payload: data });
    }
    catch (error) {
        console.log(error.message)
    }

}
export const updatePosts = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePosts(id, post)
        dispatch({ type: 'UPDATE_POSTS', payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}