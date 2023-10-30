import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`${path}`)
    }
    
    public async think(milliseconds: number) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log("Wait for " + milliseconds);
                resolve();
            }, milliseconds);
        });
    }

}
