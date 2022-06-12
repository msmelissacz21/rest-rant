const React = require('react')
const Def = require('../default')

function show (data) {
    console.log(data.place.id)
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
        )   
        let rating = (
            <h3 className="inactive">
                Not yet rated
            </h3>
        )

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length) 
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }

        rating = (
            <h3>
                Average star rating: {stars}
            </h3>
        )


        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave! '}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4> {c.author}'s Rating: {c.stars}</h4>
                    <h4>{rating}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>

              <div className='showPageFormat'>
                <h2>{data.place.name}</h2>
                <img className='img-fluid showPicStyle' src={data.place.pic} alt={data.place.name}></img>

                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>

                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
  
                <h2>Comments</h2>
                {comments}

                <div className='row container-fluid'>
                    <a href={`/p-comment/create/${data.place.id}`} className='btn btn-primary col-sm-3'>
                        Add a comment
                    </a>
                </div>

                
                <div className='row container-fluid'>
                    <a href={`/places/${data.place.id}/edit`} className='btn btn-warning col-sm-3'>
                        Edit
                    </a>
                </div>
                <form className='row container-fluid' method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
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
