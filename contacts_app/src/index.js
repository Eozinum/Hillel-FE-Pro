import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactsTable } from './components/ContactsTable';
import { ContactCreateForm } from './components/ContactCreateForm';
import { ContactEditForm } from './components/ContactEditFrom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contacts" element={<ContactsTable />} />
        <Route path="contact/create" element={<ContactCreateForm />} />
        <Route path="contact/:id" element={<ContactEditForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
