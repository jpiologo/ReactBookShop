import Logo from '../../components/Logo/index'
import OpcoesHeader from '../../components/OpcoesHeader';
import IconesHeader from '../../components/IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    background-color: #ffff;
    justify-content: space-between;
    padding: 0 15px;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;