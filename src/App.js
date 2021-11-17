import Card from './components/Card';
import Access from './components/Access';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Stay from './components/Stay';

import './Sass/App.scss'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Header />
      <div className="body">
        <Stay />
        <Access />
        <Footer />
      </div>

    </div>
  );
}

export default App;
