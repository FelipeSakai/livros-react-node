import styled from 'styled-components'

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MEUS LIVROS']

const Option = styled.li`
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 16px;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const Options = styled.ul`
display: flex;
`

function OptionsHeader() {
    return (
        <Options>
            {textOptions.map((texto) => (
                <Option><p>{texto}</p></Option>
            ))}
        </Options>
    )

}

export default OptionsHeader