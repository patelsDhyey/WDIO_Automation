import { $ } from '@wdio/globals'
import Page from './page.js';
import utility from '../utils/utility.js';
// import utility from '../utils/utility.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class openCart extends Page {
    /**
     * define selectors using getter methods
     */

    public get inputEmail () {
        return $(`//*[@name='email']`);
    }

    public get inputPassword () {
        return $(`//*[@name='password']`);
    }
    
    public get btnSubmit () {
        return $(`//input[@type='submit']`);
    }

    public get loginLink () {
        return $(`//a[.='Login' and @class='list-group-item']`);
    }

    public get navigateDropDown_1 () {
        return $(`//a[@class='dropdown-toggle']//span[.='My Account']`);
    }

    public get navigateDropDown_2 () {
        return $(`//a[@class='dropdown-toggle']//span[.='My Account']`);
    }

    public get HeaderMenuMyAccount () {
        return $(`//span[contains(.,'My Account')]`);
    }

    public get HeaderSubMenuAccount () {
        return $(`//a[contains(.,'Logout')]`);
    }

    

    
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        
        await (await this.loginLink).click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async logout (){
        await this.HeaderMenuMyAccount.click()
        console.log("Expand logout menu bar");
        
        await this.HeaderSubMenuAccount.click();
        console.log("Clicked on Logout");

    }
        
    public async navigate (dataMap: { [key: string]: any } ) {
        if(dataMap.Menu){
            (await $(`//a[.='`+ dataMap.Menu +`']`)).click()
            console.log("Menu Selected"+ dataMap.Menu);
        }
        if(dataMap.SubMenu){
            (await $(`//a[.='`+ dataMap.SubMenu +`']`)).click()
            console.log("Menu Selected"+ dataMap.SubMenu);
            await this.think(4000);
        }
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('https://awesomeqa.com/ui/index.php?route=account/register');
    }

}

export default new openCart();
