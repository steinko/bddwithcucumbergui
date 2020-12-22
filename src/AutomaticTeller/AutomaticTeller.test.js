import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  AutomaticTeller from './AutomaticTeller';


it ('should exist', async  () => {
 
    let  { getByText} = render(<AutomaticTeller />)
    await  expect(getByText).not.toBeNull()
   
})


it ('should display a lable Amount:',  () => { 

    let { queryByLabelText } = render (<AutomaticTeller />)
    expect(queryByLabelText('Amount:')).toBeInTheDocument()
    
})

it ('should display submit buttom withdraw',  () => { 

    let { queryByText } = render (<AutomaticTeller />)
    expect(queryByText('Withdraw')).toBeInTheDocument()
    
})

it ('should display entered amount',  () => { 

   let { queryByLabelText, queryByText} = render(<AutomaticTeller />)
   let amount = '100'
   let amountLable = queryByLabelText('Amount:')
   fireEvent.change(amountLable, { target: { value:  amount } })
   expect(amountLable.value).toBe(amount) 
   fireEvent.click(queryByText("Withdraw"))
   expect(amountLable.value).toBe(amount)
   
})
