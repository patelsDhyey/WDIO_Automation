import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class charusat extends Page {
    /**
     * define selectors using getter methods
     */

    public get InstituteSelectInput () {
        return $(`//select[@name='ddlInst']`);
    }
    public get DegreeSelectInput () {
        return $(`//select[@name='ddlDegree']`);
    }
    public get SemesterSelectInput () {
        return $(`//select[@name='ddlSem']`);
    }
    public get ExamSelectInput () {
        return $(`//select[@name='ddlScheduleExam']`);
    }
    public get studentIdInput () {
        return $(`//input[@name='txtEnrNo']`);
    }
    public get getMarksheetBtn () {
        return $(`//*[@value='Show Marksheet']`);
    }

    public async selectFromDropDown(element: ChainablePromiseElement,valueToSelect:string): Promise<void>{
        await element.click();
        console.log(`Xpath: //option[text()='${valueToSelect}']`)
        await (await $(`//option[text()='${valueToSelect}']`)).waitForDisplayed({timeout:3000,timeoutMsg:"Option not clickable"});
        await (await $(`//option[text()='${valueToSelect}']`)).click();
        await (await $(`//option[text()='${valueToSelect}' and @selected='selected']`)).waitForDisplayed({timeoutMsg:"Option not selected",timeout:3000});
    }

    public async setData (dataMap: { [key: string]: any } ) {
        if(dataMap.institute){
           await this.selectFromDropDown(this.InstituteSelectInput,dataMap.institute);
           await this.selectFromDropDown(this.DegreeSelectInput,dataMap.degree);
           await this.selectFromDropDown(this.SemesterSelectInput,dataMap.semester);   
           await (await $(`//option[text()='${dataMap.exam}']`)).click();
           await (await this.studentIdInput).setValue(dataMap.studentID);

        //    await browser.pause(15000);
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('https://charusat.edu.in:912/UniExamResult/');
    }
    public async waitForPage (): Promise <void>{
        
        await this.InstituteSelectInput.waitForDisplayed({timeout:4000})
        
    }
}

export default new charusat();
