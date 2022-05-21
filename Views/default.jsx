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
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }

  module.exports = Def
  