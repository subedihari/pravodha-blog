
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminCreatePostPage from './pages/AdminCreatePostPage';
import AdminEditPostPage from './pages/AdminEditPostPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/post/:id" element={<BlogPostPage />} />
        <Route path="/admin/new-post" element={<AdminCreatePostPage />} />
        <Route path="/admin/edit-post/:id" element={<AdminEditPostPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;