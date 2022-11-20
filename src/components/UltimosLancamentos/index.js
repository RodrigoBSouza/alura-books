import { livros } from './dadosUltimosLancamentos';
import imagemLivro from '../../imgs/livro2.png';
import { Titulo } from '../Titulo';
import cardRecomenda from '../CardRecomenda';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentos>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px">ULTIMOS LANCAMENTOS
                </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <cardRecomenda
                titulo="Talve você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />

        </UltimosLancamentos>
    )
}

export default UltimosLancamentos;