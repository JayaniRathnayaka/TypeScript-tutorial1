//classes
class Invoice{
    client: string;
    details: string;
    amount: number;

    constructor(c:string, d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format(){
        return '${this.client} owes ${this.amount} for ${this.details}'
    }
}

const inOne = new Invoice('mario','work',250);
const inTwo = new Invoice('Luci','Pending',300);

let invoices : any[] = [];
invoices.push(inOne);
invoices.push(inTwo);

invoices.forEach(inv =>{
    console.log(inv.client, inv.amount,inv.format);
    
});

console.log(invoices);


const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

//INPUTS
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit' ,(e: Event) => {
    e.preventDefault();
console.log(
    type.value, 
    tofrom.value,
    details.value,
    amount.value
);
})
