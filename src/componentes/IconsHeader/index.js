import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [perfil, sacola]

function IconsHeader() {
    return (
        <Icones>
            {icons.map((icon,index) => (
                <Icone key={index}>
                    <img src={icon}
                        alt='icon'>
                    </img>
                </Icone>
            ))}
        </Icones>
    )
}

export default IconsHeader