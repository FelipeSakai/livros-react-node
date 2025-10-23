import './estilo.css'

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MEUS LIVROS']

function OptionsHeader() {
    return (
        <ul className='options'>
            {textOptions.map((texto) => (
                <li className='option'><p>{texto}</p></li>
            ))}
        </ul>
    )

}

export default OptionsHeader