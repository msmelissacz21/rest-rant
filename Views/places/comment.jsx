const React = require('react')
const Def = require('../default')

function comment_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit a Place</h1>

                <form method='POST' action ={`/places/${data.id}?_method=PUT`}>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' value={data.place.name} required/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' type='url' id='pic' name='pic' value={data.place.pic} />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city' value={data.place.city} />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' id='cuisines' name='cuisines' value={data.place.cuisines} required/>
                        </div>
                        <input className='btn btn-primary col-sm-3 container d-flex align-items-center justify-content-center' type='submit' value='Add Place' />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = comment_form