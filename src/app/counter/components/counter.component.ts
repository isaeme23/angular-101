import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <p>
        Counter es: {{counter}}
    </p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="reset()">Reset</button>
    
    `
})

export class CounterComponent {
    public counter:number = 10
    constructor() { }
    
    public increaseBy(value:number){
        this.counter += value;
    }

    public decreaseBy(value:number){
        this.counter -= value;
    }

    public reset(){
        this.counter = 10;
    }
}