const React = require('react')


function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'></link>
                <link rel='stylesheet' href='/style.css'></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand:wght@300&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <body>
                <div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Rest-Rant</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/places">Places</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/places/new">Add a new place</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                            <form className="form-inline">
                                <div className='input-group'>
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </div>
                            </form>

                        </div>
                    </nav>

                    {html.children}
                </div>

                <footer className="bg-dark text-center text-white">
                    {/* Grid container */}
                    <div className="container p-4">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-facebook-f" /></a>
                        {/* Twitter */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-twitter" /></a>
                        {/* Google */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-google" /></a>
                        {/* Instagram */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram" /></a>
                        {/* Linkedin */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-linkedin" /></a>
                        {/* Github */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-github" /></a>
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Form */}
                    <section className>
                        <form action>
                        {/*Grid row*/}
                        <div className="row d-flex justify-content-center">
                            {/*Grid column*/}
                            <div className="col-auto">
                            <p className="pt-2">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-md-5 col-12">
                            {/* Email input */}
                            <div className="form-outline form-white mb-4">
                                <input type="email" id="form5Example21" className="form-control" />
                                <label className="form-label" htmlFor="form5Example21">Email address</label>
                            </div>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-auto">
                            {/* Submit button */}
                            <button type="submit" className="btn btn-outline-light mb-4">
                                Subscribe
                            </button>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                        </form>
                    </section>
                    {/* Section: Form */}
                    {/* Section: Text */}
                    <section className="mb-4">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>
                    {/* Section: Text */}
                    {/* Section: Links */}
                    <section className>
                        {/*Grid row*/}
                        <div className="row">
                        {/*Grid column*/}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </section>
                    {/* Section: Links */}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    ?? 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"> Rest-Rant.com</a>
                    </div>
                    {/* Copyright */}
                </footer>

            </body>


        </html>
    )
  }

  module.exports = Def
  