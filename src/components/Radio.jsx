import React from 'react';


const Radio = (props) => {
	return( <div className="form-group">
    <label for={props.name} className="form-label">{props.title}</label>
    <div className="checkbox">
      {props.options.map(option => {
        return (
          <label key={option} className="checkbox-inline">
            <input
             
              id = {props.name}
              name={props.name}
              onChange={props.handleChange}
              value={option}
              checked={ props.selectedOptions.indexOf(option) > -2 }
              type="radio" /> {option}
          </label>
        );
      })}
    </div>
  </div>
);

}

export default Radio;