import  {withdraw} from './WithdrawalService';
jest.mock( './WithdrawalService')

it ('should exist', async  () => {
      let respons = await withdraw("100")
      expect(respons.ok).toBeTruthy()
   
})