let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let choice = prompt("Do you want to sort the list? (Y/N)")
if(choice === 'Y' || choice==='Yes' || choice ==="yes"){
    let sortByChoice = prompt(`
    1. Sort by name
    2. Sort by phone
    3. Sort by email
    `)
    switch (sortByChoice){
        case 1:
            sortByName(contacts);
            break;
        case 2:
            sortByPhone(contacts);
            break;
        case 3:
            sortByEmail(contacts);
            break;
    }
}

function sortByName(contacts){

}

function sortByPhone(contacts){

}

function sortByEmail(contacts){

}