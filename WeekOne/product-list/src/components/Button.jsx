import PropTypes from 'prop-types'
import "./Button.css"

const Button = ({clickHandler,label}) => {
    return(
        <div className='btn-list'>
            <button className='btn' onClick={clickHandler}>
                {label}
            </button>
        </div>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    clickHandler: PropTypes.func
};

export default Button