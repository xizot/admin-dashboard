import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { toggleThemeMode } from '../../store/reducers/theme.reducer'

const Home = () => {
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleThemeMode())
  }
  return (
    <div>
      <Button type='primary' onClick={handleToggleTheme}>Toggle theme</Button>
      <h2 className='text-primary' >Toggle theme</h2>
    </div>
  )
}

export default Home