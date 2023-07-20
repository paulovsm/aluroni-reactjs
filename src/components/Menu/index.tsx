import { ReactComponent as Logo } from 'assets/logo.svg';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
    const rotas = [{
        nome: 'Início',
        url: '/'
    }, {
        nome: 'Cardápio',
        url: '/cardapio'
    }, {
        nome: 'Contato',
        url: '/contato'
    }];
    return (
        <nav className={style.menu}>
            <Logo />
            <ul className={style.menu__list}>

                {rotas.map(rota => (
                    <li key={rota.url} className={style.menu__link}>
                        <Link to={rota.url}>{
                            rota.nome
                        }</Link>
                    </li>
                ))}

            </ul>

        </nav>
    );
}