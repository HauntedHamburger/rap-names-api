const express = require('express')
const app = express()
const cors = requires('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancellor',
        'birthLocation': 'Chicago, Illinois'
    },
    'soulja slim': {
        'age': 26,
        'birthName': 'James Adarryl Tapp Jr',
        'birthLocation': 'New Orleans, Louisiana'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}


// NETWORK REQUEST
app.get('/', (request, response) => {
    // tell network where to find file, 
    response.sendFile(__dirname + '/index.html')
})

// API GET REQUEST, RESPOND WITH JSON
app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    // if rapperName is a property of wrappers
    if(rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})

// NETWORK PORT
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`THe server is now running on ${PORT}! Better go catch it!`)
})