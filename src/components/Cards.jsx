import React from 'react'
import {connect} from 'react-redux'


const Cards = ({imgs,favs,likes,addFavorite,addLike}) =>(
      <div className="explore  sections-img">
       <h2 style={{margin:'20px'}}>Explore</h2>
      <div className="container-cards">
             { imgs.map((img)=>{
                   const fav = favs.find(favs => favs.id === img.id)
                   const like = likes.find(likes => likes.id === img.id)
                 
                  return(
                <div className="card" style={{background:img.colorBack}}key={img.id} >
                    <h3>{img.name}</h3>
                    <div className="card-body">
                          <img src={img.url} alt={img.name}/>
                    </div>	
                    <div className="card-after">
                    <div className="container-icon" onClick={e => {addLike(e,img)}}>   <i className={like ? "fas fa-heart fa-heart-after" :  "fas fa-heart"}></i> </div>
                    <div className="container-icon" onClick={e => {addFavorite(e,img)}}>  <div className="fill"><i className="fas fa-star"><div className={fav ? "fill-after fill-after-add":"fill-after"}></div></i> </div> </div>
                    </div>
             	</div>
             	)
            })
             	
             }
      </div>
      </div>

	)

const mapStateToProps = state =>({
	imgs:state.imgs,
  favs:state.favorites,
  likes:state.likes
})

const mapDispatchToProps = dispatch =>({
addFavorite(e,img){
  dispatch({
    type: 'ADD_FAVORITE',
    e,img
  })
},

addLike(e,like){
  dispatch({
    type: 'ADD_LIKE',
    e,like
  })




}
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
