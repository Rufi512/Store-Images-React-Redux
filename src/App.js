import React from 'react';
import {Provider} from 'react-redux';
import store from './store'
import Bar from './components/Bar'
import Cards from './components/Cards'
import Favorites from './components/Favorites'
import {saveFavoriteToLocalStorage,saveLikeToLocalStorage} from './components/localStorage'
function App() {

  store.subscribe(() => {
  saveFavoriteToLocalStorage({
    favorites: store.getState().favorites
  })

   saveLikeToLocalStorage({
    likes: store.getState().likes
  })

})

  return (
  	<Provider store={store}>
    <div className="container">
    <Bar/>
      <Cards/>
      <Favorites/>
      </div>
    </Provider>
  );

}
export default App;
