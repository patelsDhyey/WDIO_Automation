import { $ } from '@wdio/globals'
import Page from './page.js';
import reporter from '../utils/reporter.js';
// import utility from '../utils/utility.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class eGov extends Page {
    /**
     * define selectors using getter methods
     */

    public get inputEmail () {
        return $(`//input[@id='txtUserName']`);
    }

    public get inputPassword () {
        return $(`//input[@id='txtPassword']`);
    }

    public get btnSubmit () {
        return $(`//a[@id='btnLogin']`);
    }

    public get serverIcon () {
        return $(`//*[@class='fa fa-tasks']`)
    }

    public get modules() {
        return $(`//*[@class='col-sm-12 div_hover']`)
    }

    public get hemBurger () {
        return $(`//*[@class='fa fa-bars']`)
    }

    public get hemBurgerAction () {
        return $(`//*[@id='ctl00_rptMainMenu_ctl01_pnlMainMenu']`)
    }

    public get indoor_Sports_Games () {
        return $(`//*[@id='ctl00_ContentPlaceHolder1_txtIndoorSport']`)
    }

    public get btnUpdate (){
        return $(`//input[@class='btn btn-primary']`)
    }
    
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
       
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async verify ( actualText: string, expectedCondition: boolean, ignoreSpace? : boolean) : Promise<boolean>{
       
        console.log("Validating actual value" + actualText);

        console.log('Xpath:-  //*[.="' + actualText + '"]');
        let xpath;
        if(ignoreSpace){
            xpath=`//*[normalize-space()="${actualText}"]`;
        }else{
            xpath=`//*[.="${actualText}"]`;
        }
        

        let elementLength:number=await $$(xpath).length;
        
        if(elementLength>0 && expectedCondition){
            await browser.pause(1000);
            await browser.executeScript("arguments[0].style='background-color:yellow;'",[await $(xpath)]);
            await browser.pause(1000);
            await browser.executeScript("arguments[0].style='background-color:unset;'",[await $(xpath)]);
            await browser.pause(1000);
            return true;
        }
        else if(elementLength==0 && !expectedCondition){
            return true;
        }
        else{
            return false;
        }
        
    }

    public async navigation (dataMap: { [key: string]: any } ): Promise<void> {

        await this.serverIcon.click();
        await this.modules.click();
        
        await (await this.hemBurger).click();
        // await (await this.hemBurger).elementHover('fa fa-bars');
       
        await this.hemBurgerAction.click();
        
        await browser.pause(2000);
        await (await $(`//span[.='`+dataMap.SubAction+`']`)).waitForClickable();
        await (await $(`//span[.='`+dataMap.SubAction+`']`)).click();
    }

    public async enterStudentCounsellingDetail (dataMap: { [key: string]: any } ): Promise<void>{
        await browser.pause(2000);
        await (await this.indoor_Sports_Games).waitForExist();
        await (await this.indoor_Sports_Games).setValue(dataMap.Indoor_Sports_Games);
       
        await browser.pause(2000);
        await (await this.btnUpdate).waitForClickable();
        await (await this.btnUpdate).click();
    }
   

    public async handleAlert (msgToVerify: string){
        const isAlertOpen = await browser.isAlertOpen(); //get the status of alert open or not
        if (isAlertOpen) {
            const alertText = await browser.getAlertText(); //get the alert text
            console.log("The alert text is: ", alertText) //logs the text to console
            await expect(msgToVerify).toBe(alertText); //chai lib
            await browser.acceptAlert(); //accepts the alert popup
        }
    }
   

    public async think(milliseconds: number) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log("Wait for " + milliseconds);
                resolve();
            }, milliseconds);
        });
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('https://charusat.edu.in:912/eGovernance/');
    }
}

export default new eGov();
