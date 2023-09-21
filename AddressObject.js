function showAddressInfo(address){
    for (let data in address){
        console.log(`${data}: ${address[data]}`);
    }
}

const address = {
    Street : "1 Downing street",
    PostOffice: "New town",
    ZIP: 163050,
    County:"Here and There",
    Country:"United Kingdom"
}

showAddressInfo(address);