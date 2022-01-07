import Layout from './hoc/layout';
import PrivateRoute from './hoc/auth';
import Home from './pages/Home';
import SearchTutors from './pages/SearchTutor';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ChatList from './components/ChatList';
import ChatScreen from './components/ChatScreen';
import PendingRequest from './pages/moderator/PendingRequest';
import ChangeRequests from './pages/moderator/ChangeRequests';
import ViewTutor from './components/ViewTutor';
import ViewMessageRequest from './pages/tutor/ViewMessageRequest';
import Login from './pages/Login';
import Logout from './components/Logout';
import StudentSignUp from './pages/StudentSignUp';
import SignUpChoice from './pages/SignUpChoice';
import ErrorPage from './pages/ErrorPage';

import { LoginStateProvider } from './context/LoginContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <LoginStateProvider>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/searchTutors" exact element={<SearchTutors />} />
            <Route path="/aboutus" exact element={<PrivateRoute component={AboutUs} role="student" />} />
            <Route path="/contactus" exact element={<ContactUs />} />
            <Route path="/chats" exact element={<ChatList />} />
            <Route path="/chat/:id" exact element={<ChatScreen />} />

            <Route path="/viewmessagerequest" exact element={<ViewMessageRequest />} />

            <Route path="/pendingrequests" exact element={<PrivateRoute component={PendingRequest} role="moderator" />} />
            <Route path="/changerequests" exact element={<PrivateRoute component={ChangeRequests} role="moderator" />} />

            <Route path="/signupchoice" exact element={<SignUpChoice />} />
            <Route path="/viewtutor/:id" exact element={<ViewTutor />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/logout" exact element={<Logout />} />
            <Route path="/errorpage" exact element={<ErrorPage />} />
            <Route path="/signUp/student" exact element={<StudentSignUp />} />

          </Routes>
        </Layout>
      </LoginStateProvider>
    </BrowserRouter>

  );
}

export default App;
