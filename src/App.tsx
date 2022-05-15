import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import RouterContainer from './router';


function App() {
  return (
    <Router>
      <Layout/>
      <RouterContainer/>
    </Router>
  );
}

export default App;
