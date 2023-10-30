

/**
 * Common reporter for extending the failure, pass, debug trace.
 */
class reporter {
    
    public async failAndContinue(msg: string) {
        // Timespan code
        console.log("Failed and Continue: "+ msg);
        
    }

    public async fail(msg: string) {
        // Timespan code
        // console.log("Failed: "+ msg);
        console.log("Failed: "+ msg)
        
    }

    public async pass(msg: string) {
        // Timespan code
        console.log("Passed: "+ msg);
    }
    
    public async debug(debug: string){
         // Timespan code
        console.log("Debug Comments: "+ debug)
    }
}
// npm run wdio
export default new reporter();
