import charusatPage from '../pageobjects/charusat.page.js'
import eGovPage from '../pageobjects/eGov.page.js';

describe('Charusat Login',async ()=>{
    it('Land to expected page and fill the details and validate the marksheet', async () => {
        await charusatPage.open();
        await charusatPage.waitForPage();
        

        const dataMap: { [key: string]: any } = {
            institute: "CSPIT",
            degree: "BTECH(IT)",
            semester: "6",
            exam: "APRIL 2023",
            studentID: "D21IT169",
            studentName: "SONI HETVI MANISHKUMAR"

        };
        await charusatPage.setData(dataMap);
        await (await charusatPage.getMarksheetBtn).click();
        await eGovPage.verify("SEMESTER GRADE REPORT", true, true)
        await eGovPage.verify(dataMap.studentName, true, true)
    })
   
})


    


