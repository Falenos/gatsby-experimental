import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ strings }) => {
  const isTheSame = strings[0] && strings.every((string) => string === strings[0])
  return (
    <h2 className='alert-text'>{isTheSame ? 'Congrats its the same' : 'Keep working on it'}</h2>
  )
}

Alert.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string),
}

Alert.defaultProp = {
  strings: [],
}

export default Alert