import { useState } from 'react'
import './App.css'
import axios from 'axios'
import RecipeMap from './RecipeMap'

function App() {
  const [text, setText] = useState('')
  const [recipes, setRecipes] = useState([])
  const [varieties, setVarieties] = useState('vegetarian')

  // ab4f2f74f6364208a483fc84a7f8c693
  // f670fe4d
  // const YOUR_APP_KEY = '18f4f03248ff4b68a7de48f9c5963b80'
  // const YOUR_APP_ID = 'e67f58f2'

  const url = `https://api.edamam.com/search?q=${text}&app_id=e67f58f2&app_key=18f4f03248ff4b68a7de48f9c5963b80&calories=591-722&health=${varieties}`

  const getRecipe = async () => {
    try {
      const fetch = await axios.get(url);
      setRecipes(fetch.data.hits)
      console.log(fetch.data.hits)
    } catch (error) {
      console.log(error)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    getRecipe()
  }

  return (
    <div className='app'>
      <h1 onClick={getRecipe}>Food Recipe🍕🥘</h1>
      <form className='class_form' onSubmit={submit}>
        <input
          type='text'
          className='input_holder'
          placeholder='Enter Ingredient'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input className='input_submit' type='Submit' value='Search' />
        <select className='drop_down'>
          <option onClick={() => setVarieties('vegetarian')}>vegetarian</option>
          <option onClick={() => setVarieties('vegan')}>vegan</option>
          <option onClick={() => setVarieties('paleo')}>paleo</option>
          <option onClick={() => setVarieties('dairy-free')}>dairy-free</option>
          <option onClick={() => setVarieties('gluten-free')}>
            gluten-free
          </option>
          <option onClick={() => setVarieties('wheat-free')}>wheat-free</option>
          <option onClick={() => setVarieties('fat-free')}>fat-free</option>
          <option onClick={() => setVarieties('low-sugar')}>low-sugar</option>
          <option onClick={() => setVarieties('egg-free')}>egg-free</option>
          <option onClick={() => setVarieties('peanut-free')}>peanut-free</option>
          <option onClick={() => setVarieties('tree-nut-free')}>tree-nut-free</option>
          <option onClick={() => setVarieties('soy-free')}>soy-free</option>
          <option onClick={() => setVarieties('fish-free')}>fish-free</option>
          <option onClick={() => setVarieties('shellfish-free')}>shellfish-free</option>
        </select>
      </form>
      <div className='recipe_map'>
        {recipes.map((recipe) => (
          <RecipeMap recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
export default App
