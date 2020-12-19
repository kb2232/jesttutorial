import React, { useState, useCallback } from 'react';

import Input, {TextArea} from './Input';
import './App.scss';

const JestTutorial = () => {
	const [textval, setTextVal] = useState('');
	const [textareaval, setTextAreaVal] = useState('');
	const [emailval, setEmailVal] = useState('');
	const [phonenum, setPhoneVal] = useState('');
	const handleSubmit = useCallback((event) => {
    event.preventDefault()
    const data = {
      textval,
      textareaval,
      emailval,
      phonenum
    }
    console.log({data})
  }, [emailval, phonenum, textareaval, textval])
	const renderForm = () => {
    return(
      <form onSubmit={event => handleSubmit(event)}>
			<fieldset>
				<legend>Complete the form below</legend>
				<div>
					<Input
						inputId="textinputid"
						textLabel="Name of the victim"
						inputName="nameofvictim"
						inputType="text"
						inputValue={textval}
						Action={setTextVal}
					/>
					<Input
						inputId="phoneinputid"
						textLabel="Phone number"
						inputName="phonenumber"
            inputType="tel"
						inputValue={phonenum}
						Action={setPhoneVal}
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					/>
					<Input
						inputId="emailinputid"
						textLabel="Email number"
						inputName="emailnumber"
						inputType="email"
						inputValue={emailval}
						Action={setEmailVal}
					/>
					<TextArea
						inputId="textareasummary"
						textLabel="Summarize observations"
						inputName="textareasummary"
						inputValue={textareaval}
						Action={setTextAreaVal}
					/>
				</div>
			</fieldset>
			<input type="submit" />
		</form>
    )
	};
	return (
		<main className="f_c_fs_c">
			<h1>This is a jest demo</h1>
			{renderForm()}
		</main>
	);
};
export default JestTutorial;
