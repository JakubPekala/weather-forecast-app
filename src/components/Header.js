import PropTypes from 'prop-types';
import { FiSun } from 'react-icons/fi';




function Header({ title }) {
    return (
        <header className='header'>
        <h1><FiSun size={50} className='react-icons logo' /> {title}</h1>

        </header>
    )
}

Header.defaultProps = {
    title: 'Weather Forecast',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header