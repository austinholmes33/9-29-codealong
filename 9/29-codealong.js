let backpack = [];

backpack.push('sword', 'shield', 'food')

// backpack.splice(0, 1) also to remove
let externalItems = []

let furCoat = "fur coat"

backpack.push(furCoat)

backpack.pop()

let sword = backpack.shift()

externalItems.push(furCoat)

externalItems.push(sword)

// console.log(externalItems)

// console.log(backpack)

let itemCount = backpack.length

backpack.push('flint', 'blanket', 'knife', 'toothbrush')

let saddlebags = backpack.splice(2, 4,)

//console.log(saddlebags)

for(let i = 0; i<saddlebags.length; i++) {
    console.log(saddlebags[i])
}

if(backpack.length > 3) {
for(let i = 0; i<3; i++) {
console.log('backpack item: ' + backpack[i])
} 
} else {
    for (let i=0; i<backpack.length; i++) {
        console.log('backpack items: ' + backpack[i])
    }
}


let guessMe = 54
let timeRan = 0

while(guessMe < 100) {
    console.log(guessMe)
    if(guessMe % 4 === 0 || guessMe % 5 === 0) {
         console.log('guessMe is divisible by 4 or 5, added 25')
         guessMe += 25
    } else if(guessMe % 3 === 0) {
        console.log('guessMe is divisible by 3, subtracted 27')
        guessMe -= 27
    } else {
        console.log('added 3')
        guessMe += 3
    }

    guessMe += 22
    console.log(`guessMe is now ${guessMe}`)
}

console.log(timeRan)