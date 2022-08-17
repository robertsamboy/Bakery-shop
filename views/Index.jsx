const React = require('react');


 class Index extends React.Component{
    render(){
       const { treats } = this.props
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }
       return(
        <div>      
            <h1> </h1>    


        </div>

       )
    }
 }