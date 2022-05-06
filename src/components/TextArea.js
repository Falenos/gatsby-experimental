import React, { useState } from 'react'
import PropTypes from 'prop-types'
import WordCount from './WordCount'

const TextArea = ({ onChange }) => {
  const [inputVal, setInputVal] = useState('')
  const handleChange = (event) => {
    const newVal = event.target.value;
    setInputVal(newVal)
    onChange(newVal)
  }
  return (
    <div className='textarea'>
      <label>
        <span className='input-label'>Enter Value :</span>
        <textarea
          name='textarea'
          onChange={handleChange}
          rows={5}
          cols={60}
        />
      </label>
      <WordCount text={inputVal} />
    </div>
  );
}

TextArea.propTypes = {
  onChange: PropTypes.func
}

TextArea.defaultProps = {
  onChange: () => null
}

export default TextArea