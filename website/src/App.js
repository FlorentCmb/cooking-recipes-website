// Librairies
import { Switch, Route } from 'react-router-dom'
// Screens and components
import HomePage from './screens/HomePage'
import AddRecipe from './screens/AddRecipe'
import Header from './components/Header'
// Style
import './App.css'

const App = () => {

  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route to="/nouvelle-recette">
          <AddRecipe />
        </Route>
      </Switch>
    </main>
  )
}

export default App
