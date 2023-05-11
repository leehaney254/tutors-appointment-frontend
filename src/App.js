import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import AddTutor from './pages/AddTutor';
import ReserveForm from './pages/ReserveForm';
import Reservation from './pages/Reservation';
import DeleteTutor from './pages/DeleteTutor';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ReserveTutor from './pages/ReserveTutor';
import PrivateRouting from './components/PrivateRouting';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="" element={<PrivateRouting><MainLayout /></PrivateRouting>}>
          <Route index element={<Home />} />
          <Route path="/add-tutor" element={<AddTutor />} />
          <Route path="/reserve-tutor" element={<ReserveForm />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/delete-tutor" element={<DeleteTutor />} />
          <Route path="/type-reserve" element={<ReserveTutor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
