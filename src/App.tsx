import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Guide from './pages/Guide';
import Travel from './pages/Travel';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="guia" element={<Guide />} />
          <Route path="viagens" element={<Travel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
