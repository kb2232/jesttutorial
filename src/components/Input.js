import React from 'react';

const Input = ({inputId, textLabel, inputType, inputName, inputValue, Action, pattern}) => {
	return (
		<div className="f_c_fs_fs">
			<label htmlFor={inputId}>{textLabel}</label>
			<input
				type={inputType}
        name={inputName}
        placeholder={inputType==="tel"?'[0-9]{3}-[0-9]{3}-[0-9]{4}':''}
				value={inputValue}
				onChange={(event) => Action(event.target.value)}
				id={inputId}
				required
        data-testid={inputId}
        pattern={pattern}
			/>
		</div>
	);
};

export const TextArea = ({inputId, textLabel, inputName, inputValue, Action, pattern}) => {
  return (
		<div className="f_c_fs_fs">
			<label htmlFor={inputId}>{textLabel}</label>
			<textarea
				type="text"
				name={inputName}
				value={inputValue}
				onChange={(event) => Action(event.target.value)}
				id={inputId}
				required
        data-testid={inputId}
			/>
		</div>
	);
}
export default Input;
