import { createStore } from 'redux'
import pictures from './components/data/Pictures.json'
import { loadStorageLike, loadStorageFavorites } from './components/localStorage'


const initialState = {

    imgs: pictures,

    likes: loadStorageLike().likes,

    favorites: loadStorageFavorites().favorites

}

const reducerImages = (state = initialState, action) => {

    const favorites = state.favorites

    if (action.type === 'ADD_FAVORITE') {

        const elm = action.e.target
        const fill = elm.querySelector('.fill-after')

        if (favorites.find((favorites) => favorites.id === action.img.id)) {
            fill.classList.remove('fill-after-add')

            return {
                ...state,
                favorites: state.favorites.filter(img => img.id !== action.img.id)
            }
        } else {

            fill.classList.add('fill-after-add')
            return {
                ...state,
                favorites: state.favorites.concat(action.img)

            }

        }
    }

    if (action.type === 'REMOVE') {
        return {
            ...state,
            favorites: state.favorites.filter(img => img.id !== action.img.id)
        }
    }


    if (action.type === 'ADD_LIKE') {
        const likeButton = action.e.target
        const likes = state.likes

        if (likes.find((like) => like.id === action.like.id)) {
            likeButton.classList.remove('fa-heart-after')
            likeButton.style.animation = ''
            return {
                ...state,
                likes: state.likes.filter(img => img.id !== action.like.id)
            }


        } else {

            likeButton.style.animation = 'jump-heart 0.5s linear'
            setTimeout(() => { likeButton.classList.add('fa-heart-after') }, 500)
            return {
                ...state,
                likes: state.likes.concat(action.like)
            }
        }


    }



    return state

}





export default createStore(reducerImages)