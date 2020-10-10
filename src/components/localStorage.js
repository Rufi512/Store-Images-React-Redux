export function loadStorageFavorites (){
	const serializedState = localStorage.getItem('favorites')
	if(serializedState === null){
		return{favorites:[]};
	}else{
		return JSON.parse(serializedState)
	}
}

export function loadStorageLike(){
	const serializedState = localStorage.getItem('likes')
	if(serializedState === null){
		return{likes:[]};
	}else{
		return JSON.parse(serializedState)
	}
}



export const saveFavoriteToLocalStorage = (img)=>{
const initialSave = JSON.stringify(img)
localStorage.setItem('favorites',initialSave)
}

export const saveLikeToLocalStorage = (img)=>{
const initialSave = JSON.stringify(img)
localStorage.setItem('likes',initialSave)
}