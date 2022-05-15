import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './layout';
import RouterContainer from './router';
import { ThemeMode, useThemeMode } from "@/hooks"
import { darkTheme, lightTheme } from './styled/theme';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = ()=>{
  const {theme, toggleTheme} = useThemeMode();
  const themeMode = theme === ThemeMode.LIGHT ? lightTheme : darkTheme;


  return (
    <Provider store={store}>
      <Router>
        <Layout/>
        <RouterContainer/>
      </Router>
    </Provider>
  );
}

export default App;
