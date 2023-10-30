import { $ } from '@wdio/globals'
import reporter from './reporter';
// import Page from './page.js';
// import expect from 'expect';
import eGovLoginPage from '../pageobjects/eGov.page';



/**
 * Common utilities for extending the data process.
 */
class utility {

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to assert the value from UI
     */
    // expectedText: string,
   

    public async assert(actual: string, expectedCondition:boolean){

        // const flag: Boolean = await utility.assert( (await (await this.AfterLoginEle).getValue()).toString() , actual) 
        
        const flag: boolean = await eGovLoginPage.verify( actual, expectedCondition) 
        console.log("flag is:" +flag)

        if(expectedCondition){
            if(flag){
                reporter.pass("Value is present");
            }else{
                reporter.fail("Value is not present");
            }
        }else{
            if(!flag){
                reporter.pass("Value is not present");
            }else{
                reporter.fail("Value is present");
            }
        }
        
    }

    public async selectFromDropDown(element: ChainablePromiseElement,valueToSelect:string): Promise<void>{
        await element.click();
        await (await $(`//option[text()='${valueToSelect}']`)).click();
        await (await $(`//option[text()='${valueToSelect}' and @selected='selected']`)).waitForDisplayed({timeoutMsg:"Option not selected",timeout:3000});
    }

}

export default new utility();
