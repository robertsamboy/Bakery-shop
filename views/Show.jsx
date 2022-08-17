const React = require('react');
class Show extends React.Component {
    
    render(){
      
        
        const treats = this.props.treats
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }

        return(
            <body>
             <div>      
            <h1>Welcome to the Shop, We have a variety of selections for you to choose from </h1>  
            <ul>
                
                        <li>
                            {caps(treats.name)}

                            <nav> <form action = {`/bakery/x/${treats.id}?_method=DELETE`} method='POST'><button type='submit'>Remove item </button></form></nav>
                                <a href = {`/bakery/x/${treats.id}/edit`}>Change order</a>
                        </li>
                    

                
                </ul>  


        </div>

       
    
 
            </body>
        )
    }
 }
 module.exports = Show