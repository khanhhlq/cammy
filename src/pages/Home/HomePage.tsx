import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config'

const HomePage = () => {
  const logout = async () => {
    try{
      await signOut(auth)
    } catch (error) {
      console.log('ERROR LOGGING OUT', error)
    }
  }
  
  return (
    <div className='home'>
      <h1>trang chủ</h1>
      <button onClick={logout}>log out</button>
    </div>
  )
}

export default HomePage