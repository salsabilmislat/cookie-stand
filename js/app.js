'use strict';
let Seattle = {
    Location: 'Seattle',
    Minmum: 23,
    maxsimum: 65,
    customer: [],
    Avarage: 6.3,
    houers: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    next: [],

    getcustomer: function () {

        for (let j = 0; j < this.houers.length; j++) {
            this.customer.push(randomcustomer(23, 65));

        }
        return this.customer
    },

    getcookies: function () {
        
        let customer = this.getcustomer();
        for (let h = 0; h < customer.length; h++) {
            this.next.push(Math.floor(customer[h] * this.Avarage));

        }



        return this.next;
    },

    getsum: function (SumCookies) {

        let sum;
        
        for (let b = 0; b < SumCookies.length; b++) {

            this.sum = SumCookies.reduce((a, b) => a + b, 0);

        }

        return this.sum;

    }


}
//Seattle.getcustomer();
//Seattle.getcookies();
//console.log(Seattle.next);
let parent = document.getElementById('Seattleprofile');
let header2 = document.createElement('h2');
parent.appendChild(header2);
header2.textContent = Seattle.Location;

let unOrderedList = document.createElement('ul');
parent.appendChild(unOrderedList);
let SumCookies = [];
for (let i = 0; i < Seattle.houers.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = Seattle.houers[i] + ' ' + Seattle.getcookies()[i] + ' cookies';
    SumCookies[i] = Seattle.getcookies()[i]

}

let child0 = document.createElement('li');
unOrderedList.appendChild(child0);
child0.textContent = 'Total: ' + Seattle.getsum(SumCookies) + ' cookies';


console.log(parent);

//console.log(Seattle.getTotal);
//console.log(Seattle.customer);
let Tokyo = {
    Location: 'Tokyo',
    Minmum: 3,
    maxsimum: 24,
    Avarage: 1.2,
    customer: [],
    houers: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    next: [],

    getcustomer: function () {
        for (let j = 0; j < this.houers.length; j++) {
            this.customer.push(randomcustomer(3, 24));

        }
        return this.customer
    },
    getcookies: function () {
        
        let customer = this.getcustomer();
        for (let h = 0; h < customer.length; h++) {
            this.next.push(Math.floor(customer[h] * this.Avarage));

        }



        return this.next;
    },

    getsum: function (SumCookies1) {

        let sum;
        
        for (let b = 0; b < SumCookies1.length; b++) {

            this.sum = SumCookies1.reduce((a, b) => a + b, 0);

        }

        return this.sum;

    }
    
}
//Tokyo.getcustomer();

let parent2 = document.getElementById('Tokyoeprofile');
let header3 = document.createElement('h2');
parent2.appendChild(header3);
header3.textContent = Tokyo.Location;

let unOrderedList1 = document.createElement('ul');
parent2.appendChild(unOrderedList1);
let SumCookies1 = [];
for (let i = 0; i < Tokyo.houers.length; i++) {
    let listItem1 = document.createElement('li');
    unOrderedList1.appendChild(listItem1);
    listItem1.textContent = Tokyo.houers[i] + ' ' + Tokyo.getcookies()[i] + ' cookies';
    SumCookies1[i] = Tokyo.getcookies()[i]

}

let child1 = document.createElement('li');
unOrderedList1.appendChild(child1);
child1.textContent = 'Total: ' + Tokyo.getsum(SumCookies1) + ' cookies';




//console.log(parent);

let Dubai = {
    Location: 'Dubai',
    Minmum: 11,
    maxsimum: 38,
    Avarage: 3.7,
    customer: [],
    houers: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    next: [],

    getcustomer: function () {
        for (let j = 0; j < this.houers.length; j++) {
            this.customer.push(randomcustomer(11, 38));

        }
        return this.customer
    },
    getcookies: function () {
        
        let customer = this.getcustomer();
        for (let h = 0; h < customer.length; h++) {
            this.next.push(Math.floor(customer[h] * this.Avarage));

        }



        return this.next;
    },

    getsum: function (SumCookies2) {

        let sum;
        
        for (let b = 0; b < SumCookies2.length; b++) {

            this.sum = SumCookies2.reduce((a, b) => a + b, 0);

        }

        return this.sum;

    }
    
}

let parent3 = document.getElementById('Dubaiprofile');
let header4 = document.createElement('h2');
parent3.appendChild(header4);
header4.textContent = Dubai.Location;

let unOrderedList2 = document.createElement('ul');
parent3.appendChild(unOrderedList2);
let SumCookies2 = [];
for (let i = 0; i < Dubai.houers.length; i++) {
    let listItem2= document.createElement('li');
    unOrderedList2.appendChild(listItem2);
    listItem2.textContent = Dubai.houers[i] + ' ' + Dubai.getcookies()[i] + ' cookies';
    SumCookies2[i] = Dubai.getcookies()[i]

}

let child2 = document.createElement('li');
unOrderedList2.appendChild(child2);
child2.textContent = 'Total: ' + Dubai.getsum(SumCookies2) + ' cookies';



let Paris = {
    Location: 'Paris',
    Minmum: 20,
    maxsimum: 38,
    Avarage: 2.3,
    customer: [],
    houers: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    next: [],

    getcustomer: function () {
        for (let j = 0; j < this.houers.length; j++) {
            this.customer.push(randomcustomer(20, 38));

        }
        return this.customer
    },
    getcookies: function () {
        
        let customer = this.getcustomer();
        for (let h = 0; h < customer.length; h++) {
            this.next.push(Math.floor(customer[h] * this.Avarage));

        }



        return this.next;
    },

    getsum: function (SumCookies3) {

        let sum;
        
        for (let b = 0; b < SumCookies3.length; b++) {

            this.sum = SumCookies3.reduce((a, b) => a + b, 0);

        }

        return this.sum;

    }
    
}
let parent4 = document.getElementById('Parisprofile');
let header5 = document.createElement('h2');
parent4.appendChild(header5);
header5.textContent = Paris.Location;

let unOrderedList3 = document.createElement('ul');
parent4.appendChild(unOrderedList3);
let SumCookies3 = [];
for (let i = 0; i < Paris.houers.length; i++) {
    let listItem3= document.createElement('li');
    unOrderedList3.appendChild(listItem3);
    listItem3.textContent = Paris.houers[i] + ' ' + Paris.getcookies()[i] + ' cookies';
    SumCookies3[i] = Paris.getcookies()[i]

}

let child3 = document.createElement('li');
unOrderedList3.appendChild(child3);
child3.textContent = 'Total: ' + Paris.getsum(SumCookies3) + ' cookies';

let Lima = {
    Location: 'Lima',
    Minmum: 2,
    maxsimum: 16,
    Avarage: 4.6,
    customer: [],
    houers: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    next: [],

    getcustomer: function () {
        for (let j = 0; j < this.houers.length; j++) {
            this.customer.push(randomcustomer(2, 16));

        }
        return this.customer
    },
    getcookies: function () {
        
        let customer = this.getcustomer();
        for (let h = 0; h < customer.length; h++) {
            this.next.push(Math.floor(customer[h] * this.Avarage));

        }



        return this.next;
    },

    getsum: function (SumCookies4) {

        let sum;
        
        for (let b = 0; b < SumCookies4.length; b++) {

            this.sum = SumCookies4.reduce((a, b) => a + b, 0);

        }

        return this.sum;

    }
    
}

let parent5 = document.getElementById('Limaprofile');
let header6 = document.createElement('h2');
parent5.appendChild(header6);
header6.textContent = Lima.Location;

let unOrderedList4 = document.createElement('ul');
parent5.appendChild(unOrderedList4);
let SumCookies4 = [];
for (let i = 0; i < Lima.houers.length; i++) {
    let listItem4= document.createElement('li');
    unOrderedList4.appendChild(listItem4);
    listItem4.textContent = Lima.houers[i] + ' ' + Lima.getcookies()[i] + ' cookies';
    SumCookies4[i] = Lima.getcookies()[i]

}

let child4 = document.createElement('li');
unOrderedList4.appendChild(child4);
child4.textContent = 'Total: ' + Lima.getsum(SumCookies4) + ' cookies';

function randomcustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//console.log(randomcustomer(10, 55));


