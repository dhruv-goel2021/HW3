// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Figure out the passenger's name and phone number
  let PassengerFirstName =ride.passengerDetails.first
  let PassengerLastName =ride.passengerDetails.last
  let PassengerPhone = ride.passengerDetails.phoneNumber
  //practice --> console.log(`The passenger's name is ${PassengerFirstName} ${PassengerLastName} and their contact information is ${PassengerPhone}`)

  //Figure out the passenger's pickup location
let pickupAddress = ride.pickupLocation.address 
let pickupCity = ride.pickupLocation.city 
let pickupState = ride.pickupLocation.state 
let pickupZip = ride.pickupLocation.zip 

//practice -->console.log(`Their pickup locattion is ${pickupAddress}, ${pickupCity}, ${pickupState}, ${pickupZip}`)

  //Figure out the passenger's dropoff location
let dropoffAddress = ride.dropoffLocation.address
let dropoffCity = ride.dropoffLocation.city
let dropoffState = ride.dropoffLocation.state
let dropoffZip = ride.dropoffLocation.zip 

//practice -->console.log(`Their dropoff location is ${dropoffAddress}, ${dropoffCity}, ${dropoffState}, ${dropoffZip}`)


  //Figure out if the passenger's level of service (Noober X, Noober XL, or Noober Purple)
let passengerNumber = ride.numberOfPassengers
let purpleride = ride.purpleRequested

let servicelevel = [`Noober Purple`,`Noober XL`, `Noober X` ]
if (purpleride == true) {
  servicelevel = `Noober Purple`
} else if(passengerNumber >= 4 ) {
  servicelevel = `Noober XL`
} else {
  servicelevel = `Noober X`
}

let sentence = `The customer has requested a ${servicelevel} for a total of ${passengerNumber} passengers. The requesting passenger's name is ${PassengerFirstName} ${PassengerLastName} and their contact information is ${PassengerPhone}. Their pickup location is ${pickupAddress}, ${pickupCity}, ${pickupState}, ${pickupZip}. Their dropoff location is ${dropoffAddress}, ${dropoffCity}, ${dropoffState}, ${dropoffZip}.`

// Write your result in one large sentence here
console.log(sentence)

// 🔥 YOUR CODE ENDS HERE 🔥
})
