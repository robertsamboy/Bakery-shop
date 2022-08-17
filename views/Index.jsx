const React = require('react');


 class Index extends React.Component{
    render(){
       const { treats } = this.props
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }
       return(
        <div>      
            <h1>Welcome to the Shop, We have a variety of selections for you to choose from </h1>    


        </div>

       )
    }
 }



 module.exports = Index