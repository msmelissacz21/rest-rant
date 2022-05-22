const React = require('react')
const Def = require('../default')

function edit (data) {
    return (
        <Def>
          <main>
            Edit Page
            <h2>Current place name:</h2>
            <h2>{data.place.name}</h2>
          </main>
        </Def>
    )
}

module.exports = edit