export function incrementNumber( number: number ){
    if( number > 100 )
        return 100;
    else
        return number + 1;
}

export function divideNumbers( numberA:number, numberB:number ){
    if(numberB != 0)
        return numberA / numberB;
    else
        return "ERROR!!!";
}