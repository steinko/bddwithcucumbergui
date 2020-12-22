import { render, screen } from '@testing-library/react';
import App from './App';

it ('should exist', async  () => { 
    let  { getByText} = render(<App />)
   await  expect(getByText).not.toBeNull()
})

