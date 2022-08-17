const React = require('react');


 class Intro extends React.Component{
    render() {
        return(
            <html>
                <head>
                    <link rel='stylesheet' href='/css/design.css'></link>
                </head>
            <body className='intro'>
            <div>
                <h1 className='h1'>Welcome to the Bakery!</h1>
                <ul>
                    <li>
                <nav><h2><a href = {`/bakery/`}>Click here to start ordering from our selections of deserts</a></h2></nav>
                <h1> Category of sweets</h1>
                </li>
                <li><h2><a>Cupcakes</a></h2></li>
                <li><h2><a>Cakes</a></h2></li>
                <li><h2><a>Cookies</a></h2></li>
                </ul>

                </div></body></html>
        )
 }
 }


 module.exports = Intro;