import Menu from 'components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from 'pages/Footer';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Inicio = lazy(() => import('pages/Inicio'));
const Sobre = lazy(() => import('pages/Sobre'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Admin = lazy(() => import('pages/Admin'));

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Suspense fallback={<div>Carregando...</div>}>
                    <Routes>
                        <Route path="/" element={<PaginaPadrao />} >
                            <Route index element={<Inicio />} />
                            <Route path="cardapio" element={<Cardapio />} />
                            <Route path="contato" element={<Sobre />} />
                            <Route path="admin" element={<Admin />} />
                        </Route>
                        <Route path="prato/:id" element={<Prato />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </main>
    );
}