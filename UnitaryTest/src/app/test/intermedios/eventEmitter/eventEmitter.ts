import { EventEmitter } from '@angular/core';

export class Player{

    private hp:number;
    public hpchange:EventEmitter<number> = new EventEmitter();
    
    constructor(){
        this.hp = 100;
    }

    damageRecived(damage:number){
        if( damage >= this.hp)
            this.hp = 0;
        else
            this.hp = this.hp - damage;

        this.hpchange.emit(this.hp);
    }
}