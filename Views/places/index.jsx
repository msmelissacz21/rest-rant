// const React = require('react')
// const Def = require('../default')

// function places (data) {
//     let placesFormatted = data.places.map((place) => {
//         return (
//             <div className='row justify-content-around cardEdit'>

//                 <h2>{place.name}</h2>
//                 <p>{place.cuisines}</p>
//                 <img className='col placeImages' src={place.pic} alt={place.name}></img>
//                 <p>Located in {place.city}, {place.state}</p>

//             </div>
//         )
//     })
//     return (
//         <Def>
//             <main>
//                 <h1>Places to Rant or Rave About</h1>
//                 <div className="container">{placesFormatted}
//                 </div>
//             </main>
//         </Def>
//     )
//   }
  
//   module.exports = places




// const React = require('react')
// const Def = require('../default')

// function places (data) {
//     let placesFormatted = data.places.map((place) => {
//         return (
//             <div className='row-sm-3 cardEdit'>

//                 <h2>{place.name}</h2>
//                 <p>{place.cuisines}</p>
//                 <img className='col-sm-3 placeImages' src={place.pic} alt={place.name}></img>
//                 <p>Located in {place.city}, {place.state}</p>

//             </div>
//         )
//     })
//     return (
//         <Def>
//             <main>
//                 <h1>Places to Rant or Rave About</h1>
//                 <div className="container">{placesFormatted}
//                 </div>
//             </main>
//         </Def>
//     )
//   }
  
//   module.exports = places





// const React = require('react')
// const Def = require('../default')

// function places (data) {
//     let placesFormatted = data.places.map((place) => {
//         return (

//             <div className='col-sm-3 cardEdit'>

//                 <h2>{place.name}</h2>
//                 <p>{place.cuisines}</p>
//                 <img className='placeImages img-fluid' src={place.pic} alt={place.name}></img>
//                 <p>Located in {place.city}, {place.state}</p>

//             </div>

//         )
//     })
//     return (
//         <Def>
//             <main>
//                 <h1>Places to Rant or Rave About</h1>
//                 <div className="row">{placesFormatted}
//                 </div>
//             </main>
//         </Def>
//     )
//   }
  
//   module.exports = places







const React = require('react')
const Def = require('../default')

function places (data) {
    let placesFormatted = data.places.map((place) => {
        return (

            <div className='col-sm-4 cardEdit'>

                <h2>{place.name}</h2>
                <p>{place.cuisines}</p>
                <img className='placeImages img-fluid' src={place.pic} alt={place.name}></img>
                <p>Located in {place.city}, {place.state}</p>

            </div>

        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row m-0">{placesFormatted}
                </div>
            </main>
        </Def>
    )
  }
  
  module.exports = places

  // m-0 to get rid of side scroll