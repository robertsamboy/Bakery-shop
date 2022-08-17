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
                <nav><h2><a href = {`/bakery/`}>CLICK HERE TO BEGIN</a></h2></nav>
                </div></body></html>
        )
 }
 }


 module.exports = Intro;