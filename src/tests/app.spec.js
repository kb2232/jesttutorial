import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';

// import the App component
import FormInput from '../components/App';

describe('jest test tutorial', () => {
  const setup = () => {
    const utils = render(<FormInput />);
    const input = utils.getByTestId('formid');
    return{
      input,
      ...utils
    }
  }
  // basic test
  test('check for text content', ()=>{
    const {input} = setup();
    screen.debug(input)
    expect(input).toHaveTextContent('Name of the victim')
  });
});