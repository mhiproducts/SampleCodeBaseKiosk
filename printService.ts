// File: printService.ts

// Interface to define the structure of a PrintJob
interface PrintJob {
    userId: string;
    fileName: string;
    filePath: string;
    status: 'pending' | 'printing' | 'completed' | 'failed';
  }
  
// Class to manage print jobs
  class PrintService {
    private printJobs: PrintJob[] = [];
  
// Method to add a new print job
    addPrintJob(userId: string, fileName: string, filePath: string): void {
      const newPrintJob: PrintJob = {
        userId,
        fileName,
        filePath,
        status: 'pending',
      };
  
      this.printJobs.push(newPrintJob);
      this.processPrintJob(newPrintJob);
    }
  
// Private method to simulate processing and printing a job
    private processPrintJob(printJob: PrintJob): void {
// Simulate processing and printing
      printJob.status = 'printing';
  
// Simulate printing completion after 5 seconds
      setTimeout(() => {
        printJob.status = 'completed';
        this.notifyUser(printJob);
      }, 5000);
    }
  
// Private method to notify the user when a print job is completed
    private notifyUser(printJob: PrintJob): void {
      console.log(`Print job for ${printJob.fileName} completed. Ready for pickup.`);
    }
  
// Method to retrieve the list of print jobs
    getPrintJobs(): PrintJob[] {
      return this.printJobs;
    }
  }
  
  export default PrintService;
