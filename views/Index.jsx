const React = require('react');


 class Index extends React.Component{
    render(){
       const { treats } = this.props
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }
       return(
        <html>
                <head>
                    <link rel='stylesheet' href='/css/design.css'></link>
                </head>
        <body className='indexbackground'>
        <div>      
            <h1>Welcome to the Shop, We have a variety of selections for you to choose from </h1>  
            
                {treats.map((cake) => {
                    return(
                        <div>
                            {caps(cake.name)}
                            <a href = {`/bakery/main/${cake.id}`}>
                            {(`${cake.img}`)}
                            </a>
                            <nav> <form action = {`/bakery/main/${cake.id}?_method=DELETE`} method='POST'><button type='submit'>Remove item </button></form></nav>
                                <a href = {`/bakery/main/${cake.id}/edit`}>Change order</a>
                        </div>
                    )

                })}
                 


        </div>
        </body>
        </html>
       )
    }
 }



 module.exports = Index