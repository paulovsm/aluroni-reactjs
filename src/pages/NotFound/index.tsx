import style from './NotFound.module.scss';
import styleTema from 'styles/Tema.module.scss';
import { ReactComponent as NotFoundSvg } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={classNames({
            [styleTema.container]: true,
            [style.container]: true
        })}>
            <div className={style.voltar}>
                <button onClick={ () => navigate(-1) }>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundSvg />
        </div>
    );
}