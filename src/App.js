import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignUpForm from './components/Header'
import SuccessPage from './components/SuccessPage'

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/">
          <SignUpForm />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
