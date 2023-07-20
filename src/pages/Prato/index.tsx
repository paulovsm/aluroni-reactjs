import style from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import { lazy } from 'react';

const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function Prato() {
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));
    const navigate = useNavigate();

    if (!prato) {
        return <NotFound />;
    }

    return (
        <PaginaPadrao>
            <button className={style.voltar} onClick={() => navigate(-1)}>{'< Voltar'}</button>
            <section className={style.container}>
                <h1 className={style.titulo}>{prato.title}</h1>
                <div className={style.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={style.conteudo}>
                    <p className={style.conteudo__descricao}>{prato.description}</p>
                    <TagsPrato {...prato} />
                </div>
            </section>
        </PaginaPadrao>
    );
}