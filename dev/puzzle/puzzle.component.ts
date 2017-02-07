import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';


@Component({
    selector:"my-puzzle",
    template: `
       <section class="setup">
       git add
       <h2>Game Setup</h2>
       Enter your name please :
       <input type="text" #name (keyup)="0">
        </section>
        <section 
        [ngClass]="{puzzle: true,
         solved: switch1.value == switch1Number &&
                 switch2.value == switch2Number &&
                 switch3.value == switch3Number &&
                 switch4.value == switch4Number }"
        [ngStyle]="{display: name.value === '' ? 'none' : 'block'}">
        <h2>The Puzzle</h2>
        <p>Ok Welcome<span class="name"> {{name.value}}</span></p>
        <br>
        SWITCH 1:
        <input type="text" #switch1 (keyup)="0"><br>
        SWITCH 2:
        <input type="text" #switch2 (keyup)="0"><br>
        SWITCH 3:
        <input type="text" #switch3 (keyup)="0"><br>
        SWITCH 4:
        <input type="text" #switch4 (keyup)="0"><br>
        </section>
        <h2>Congratulatins {{name.value}}, you did it!</h2>
`
})
export class PuzzleComponent implements OnInit {

    switch1Number: number;
    switch2Number:number;
    switch3Number:number;
    switch4Number:number;


    ngOnInit() {
        this.switch1Number = Math.round(Math.random());
        this.switch2Number = Math.round(Math.random());
        this.switch3Number = Math.round(Math.random());
        this.switch4Number = Math.round(Math.random());
        console.log(this.switch1Number);
        console.log(this.switch2Number);
        console.log(this.switch3Number);
        console.log(this.switch4Number);
    }
}