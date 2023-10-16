
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a','b','c');
let address3 = address1;


function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
areEqual(address1,address2);
areSame(address1,address2)
areSame(address1,address3)

function areEqual(address1, address2){
    let isDuplicate = false;
    for(let key in address1){

        if (address1[key]!==address2[key]){
            isDuplicate=true;
        }
    }

    if (isDuplicate === false){
        console.log("Elements of Both objects are equal");
    }else{
        console.log("Elements of objects are different.")
    }

}



function areSame(address1, address2){
    if(address1 === address2){
        console.log("Both Objects are same.")
    }else{
        console.log("Objects are identical.")
    }
}

