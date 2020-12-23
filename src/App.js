import './App.scss';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/layout/layout.jsx';

import menu from './config/router/menu';
import PageNotFound from './pages/404';

function App() {

  const getMenuList = () => {
    let menuList = [];
    menu.forEach(item => {
      if (item.subMenu?.length) {
        item.subMenu.forEach(subMenu => {
          menuList.push(subMenu);
        })
      } else {
        menuList.push(item);
      }
    })
    return menuList;
  }

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Layout>
            <Route path="/" render={() => {
              return <Redirect to='/home'></Redirect>
            }}></Route>
            {getMenuList().map(item => {
              return <Route key={item.id} path={item.path} component={item.component}></Route>
            })}
            <Route component={PageNotFound}></Route>
          </Layout>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
