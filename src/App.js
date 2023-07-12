
import './App.css';
import ProductList from './controllers/ProductList';
import Workers from './controllers/Workers';


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}




function App() {
  return (
    <div className="App">
      <div className='adminBio'>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of '+user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
          />
      </div>
     
      <div className='content'>
        <ProductList />

        <Workers/>
      </div>
     
    </div>
  );
}

export default App;
