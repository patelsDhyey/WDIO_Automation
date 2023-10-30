import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import eGovLoginPage from '../pageobjects/eGov.page.js'
import Page from '../pageobjects/page.js'
import utility from '../utils/utility.js'
import eGovPage from '../pageobjects/eGov.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

//npm run wdio

describe('Egovernance Login',async ()=>{
    it('Script should log into e-governance ; Positive Testing ', async () => {
        await eGovLoginPage.open();
        await eGovLoginPage.login("D21IT169","050902");
    })
    it('Land to home page and navigating to different functionality', async () => {   
        await eGovLoginPage.verify(" Dashboard", true);
        await browser.pause(2000);

// --------
        const timeSpanMilliseconds = new Date().getTime();
        
        const dataMap_nav1: { [key: string]: any } = {

            SubAction: "Student Counselling Detail",
            Indoor_Sports_Games: "THIS IS AUTOMATION TESTING, AND UPDATED ON : " + timeSpanMilliseconds
        };

        await browser.pause(2000);
        await eGovLoginPage.navigation(dataMap_nav1);
        await browser.pause(2000);
        await eGovLoginPage.enterStudentCounsellingDetail(dataMap_nav1);
        await eGovLoginPage.handleAlert("Operation Performed Successfully")

        await (await $(`//a[@title='Dashboard']`)).click();

// --------
        const dataMap_nav2: { [key: string]: any } = {
            SubAction: "Fee Receipt",
            Semester: "7"
        };

        await browser.pause(2000);
        await eGovLoginPage.navigation(dataMap_nav2);
        await browser.pause(2000)
        await (await $(`//*[.='College Fees - Semester ${dataMap_nav2.Semester}']/parent::td/following-sibling::td//a`)).click();

        await (await $(`//a[@title='Dashboard']`)).click();

// --------
        const dataMap_nav3: { [key: string]: any } = {
            SubAction: "Exam Hall Ticket",
        };

        await browser.pause(2000);
        await eGovLoginPage.navigation(dataMap_nav3);
        await browser.pause(2000)
        await eGovPage.verify("Print", true);
        await (await $(`//a[.='Print']`)).click();

    })
    
})


    


