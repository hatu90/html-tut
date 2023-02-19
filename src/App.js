import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar desktop">
        Navbar
      </div>
      <div className='root'>
        <div className='header'>
          Header
        </div>
        <div className="navbar mobile">
          Navbar
        </div>
        <div className='main'>
          <div className='group-1'>
            <div className='item'>
              Analytics
            </div>
            <div className='item map'>
              Global heatmap
            </div>
          </div>
          <div className='group-2'>
            <div className='group-2-1'>
              <div className='group-2-1-1'>
                <div className='item chart'>
                  customer growth
                </div>
                <div className='item'>
                  sale data
                </div>
                <div className='item revenue mobile'>
                  Revenue
                </div>
              </div>
              <div className='item leads'>
                New leads
              </div>
            </div>
            <div className='group-2-2'>
              <div className='item trending'>
                Trending locations
              </div>
              <div className='item revenue desktop'>
                Revenue
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
