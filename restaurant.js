
let restaurant = {
    name: 'Barbeque',
    guestCapacity: 100,
    guestCount: 0,
    checkSeatingAvailability: function(partySize){
        if (partySize >= 100){
            console.log(this.guestCapacity)
            return false
        }    
        else{
            console.log(this.guestCapacity)
            return true
            
        }
    }
}

let status = restaurant.checkSeatingAvailability(64)
console.log(status)