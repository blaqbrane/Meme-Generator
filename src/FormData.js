import React from 'react'

const FormData = ({toptext,bottomtext,handleChange}) => {
  return (
    <form>
          <div className="form--input">
            <input
              className="input-text"
              onChange={handleChange}
              type="text"
              placeholder="Enter first word"
              name="toptext"
              value={toptext}
            />
          </div>
          <div className="form--input2">
            <input
              className="input-text"
              onChange={handleChange}
              type="text"
              placeholder="Enter first word"
              name="bottomtext"
              value={bottomtext}
            />
          </div>
        </form>
  )
}

export default FormData