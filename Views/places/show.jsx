const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
              <div className='showPageFormat'>
                <h2>{data.place.name}</h2>
                <img className='img-fluid showPicStyle' src={data.place.pic} alt={data.place.name}></img>
                <h2>{data.place.cuisines}</h2>
                <h4>{data.place.city}</h4>
                <h4>{data.place.state}</h4>
                <h2>Rating</h2>
                <h5>Currently Unrated</h5>
                <h2>Comments</h2>
                <h6>No comments yet</h6>
                
                <div className='row container-fluid'>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning col-sm-3'>
                        Edit
                    </a>
                </div>
                <form className='row container-fluid' method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger col-sm-3'>
                        Delete
                    </button>
                </form>



            </div>
          </main>
        </Def>
    )
}

module.exports = show
