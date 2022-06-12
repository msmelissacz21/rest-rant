const React = require('react')
const Def = require('../default')

function comment_form (data) {
    return (
        <Def>
            <main>
                <h1>Add a Comment</h1>

                <form method='POST' action ={`/p-comment/${data.id}?_method=PUT`}>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Author</label>
                            <input className='form-control' id='name' name='author' required/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='content-field'>Content</label>
                            <input className='form-control' type='text' id='content-field' name='content'/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='star-rating'>Star Rating</label>
                            <select name="stars" id="stars-rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>Rant</label>
                            <input className='' type='checkbox' name='rant'/>
                        </div>
                        <input className='btn btn-primary col-sm-3 container d-flex align-items-center justify-content-center' type='submit' value='Add a comment' />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = comment_form