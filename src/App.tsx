import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMember';

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
            <AddRoomModal />
            <InviteMemberModal />
          </AppProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;