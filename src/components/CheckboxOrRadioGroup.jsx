import React from 'react';

const CheckboxOrRadioGroup = (props) => (  
  <div>
    <label className="form-label">{props.title}</label>
    <div className="checkbox-group">
      {props.options.map(opt => {
        return (
          <label key={opt} className="form-label capitalize">
            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={ props.selectedOptions.indexOf(opt) > -1 }
              type={props.type} /> {opt}
          </label>
        );
      })}
    </div>
  </div>
);

/*CheckboxOrRadioGroup.proptypes = {  
  title: React.proptypes.string.isRequired,
  type: React.proptypes.oneOf(['checkbox', 'radio']).isRequired,
  setName: React.proptypes.string.isRequired,
  options: React.proptypes.array.isRequired,
  selectedOptions: React.proptypes.array,
  controlFunc: React.proptypes.func.isRequired
};*/

export default CheckboxOrRadioGroup; 