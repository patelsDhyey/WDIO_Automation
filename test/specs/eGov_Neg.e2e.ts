import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import eGovLoginPage from '../pageobjects/eGov.page.js'
import utility from '../utils/utility.js'
import charusatPage from '../pageobjects/charusat.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

describe('Egovernance Login',async ()=>{
    it('Script should not log into e-governance ; Negative testing', async () => {
        await eGovLoginPage.open();
        await eGovLoginPage.login("111D21IT169111","050902111");
    })
    it('Should fail the login', async () => {
        await eGovLoginPage.verify(" Dashboard", false);
        // await eGovLoginPage.navigation();
    })
})


    


