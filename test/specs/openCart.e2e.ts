// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'
// import eGovLoginPage from '../pageobjects/eGov.page.js'
// import utility from '../utils/utility.js'
import openCartPage from '../pageobjects/openCart.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

describe('Open Cart Login',async ()=>{
    it('Script should not log into openCart', async () => {
        await openCartPage.open();
        await openCartPage.think(4000);
        await openCartPage.login("hetvisonitest@gmail.com","Welcome1");
    }) 
    it('Navigation and logout ', async () => {
    
        const dataMap: { [key: string]: any } = {
            Menu: "Desktops",
            SubMenu: "PC (0)",
        };
        await openCartPage.think(4000);
        await openCartPage.navigate(dataMap);
        await openCartPage.logout();
    })
})



