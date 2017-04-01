import { Component } from '@angular/core';

declare var moment: any;
declare var $: any;
@Component({
  selector: 'my-app',
  template: `
                

                  <div style="display: inline-block;">
                    <datepicker [(ngModel)]="currentDate"  (update)="onUpdate($event)"></datepicker>
                  </div>
                  <div id="output"></div>

                `,
  styles: [`                  
  
                  .full button span {
                    background-color: limegreen;
                    border-radius: 32px;
                    color: black;
                  }
                  .partially button span {
                    background-color: orange;
                    border-radius: 32px;
                    color: black;
                  }
`]
})
export class AppComponent { 

    public currentDate: Date = new Date();//current date object

    onUpdate(value : any){
        console.log(value);
        
        // $.each(value, function( index:any, value:any ) {
        //    $("#output").append(value+" , ");
        // });

        $("#output").append(value+"<hr>");
       
    }

 }
