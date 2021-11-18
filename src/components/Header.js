import PropTypes from 'prop-types';
import { FiSun } from 'react-icons/fi';

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1><FiSun size={50} className='react-icons logo' /> {title} </h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

Header.defaultProps = {
    title: 'Weather Forecast',
}

export default Header
