import React from 'react'
import {connect} from 'react-redux'

const Favorites = ({favorites,remove}) =>(
  <div className="favorites">
        <h2 style={{margin:'20px'}}>Favorites</h2>

        <div className="container-cards">
             { favorites.map(img=>(


                <div className="card" style={{background:img.colorBack}}key={img.id} >
                    <h3>{img.name}</h3>
                    <div className="card-body">
                          <img src={img.url} alt={img.name}/>
                    </div>  
                    <div className="card-footer">
                      <button type="button" onClick={e => remove(img)}>Remove</button>
                    </div>
               </div>

             	))
             	
             }
      </div>

                         
</div>
	)

const mapStateToProps = state =>({
	favorites:state.favorites
})

const mapDispatchToProps = dispatch =>({
          
          remove(img){
          	dispatch({
          		type:'REMOVE',
          		img
          	})
          }

})

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)