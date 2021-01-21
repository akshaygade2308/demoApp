import './App.css';
import PostsTable from './Components/PostsTable';
import ErrorPage from './Components/ErrorPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <div>
        Welcome
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tableContents">Posts</Link></li>
              <li><Link to="/form"></Link>Form</li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/tableContents">
              <PostsTable />
            </Route>
            {/* <Route path="/form">
              <Form />
            </Route> */}
            <Route path="/error">
              <ErrorPage />
            </Route>
            <Redirect from="*" to="/error" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
