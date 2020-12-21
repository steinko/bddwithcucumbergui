import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  AutomaticTeller from './AutomaticTeller';


it ('should exist', async  () => { 
    let  { getByText} = render(<AutomaticTeller />)
   await  expect(getByText).not.toBeNull()
})