import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModals from './components/Modals/AddRoomModals';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AppProvider>
            <Routes>
              <Route path='/' element={<WelcomeScreen />} />
              <Route path='home' element={<HomePage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='chat' element={<ChatRoom />} />
            </Routes>
            <AddRoomModals />
          </AppProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;