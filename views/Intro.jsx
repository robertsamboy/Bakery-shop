const React = require('react');


 class Intro extends React.Component{
    render() {
        const design = {
            color: 'white',
            backgroundColor: 'black'
        }
        return(
            <body style = {design}>
            <div>
                <h1>Welcome to the Bakery!</h1>
                <nav><h2><a href = {`/bakery/`}>CLICK HERE TO BEGIN</a></h2></nav>
                </div></body>
        )
 }
 }


 module.exports = Intro;