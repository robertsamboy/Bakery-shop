const React = require('react');
class Show extends React.Component {
    
    render(){
      
        
        const cake = this.props.cake
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }

        return(
            <body>
             <div>      
            <h1>Welcome to the Shop, We have a variety of selections for you to choose from </h1>  
            <ul>
                {treats.map((cake) => {
                    return(
                        <li>
                            {caps(cake.name)}

                            <nav> <form action = {`/bakery/x/${mon.id}?_method=DELETE`} method='POST'><button type='submit'>Remove item </button></form></nav>
                                <a href = {`/bakery/x/${mon.id}/edit`}>Change order</a>
                        </li>
                    )

                })}
                </ul>  


        </div>

       
    
 
            </body>
        )
    }
 }
 module.exports = Show