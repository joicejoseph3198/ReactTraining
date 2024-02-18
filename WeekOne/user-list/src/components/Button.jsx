import PropTypes from 'prop-types'

const Button = ({style,clickHandler,label}) => {

    return(
        <>
        <button style={style} onClick={clickHandler}>
            {label}
        </button>
        </>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object,
    clickHandler: PropTypes.func
  };

export default Button