import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './Routes.module.scss'
import Main from './MovieSearch/Main'
import Favorite from './MovieSearch/Favorite'

// import Weather from './Weathers'

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
