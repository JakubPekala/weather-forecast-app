import PropTypes from 'prop-types'

// component for "get back" button, used in navigation between main view and forecast view
const Button = ({text , onBack }) => {

    return (
        <button onClick={onBack} className='btn back'>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onBack: PropTypes.func.isRequired
}

Button.defaultProps = {
    text: "Go back"
}

export default Button

