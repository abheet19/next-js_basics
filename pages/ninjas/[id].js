// id is around bracket because its a wrap parameter and it can be changable

//below fxn runs at build time and generate all possible values for our route parameter


export const getStaticPaths= async () => {  //fetch all data in this fxn so we get all id's and we return those id's to next and based on those
                                            //it can generate all routes and and HTML pages for us

    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    
    const data=await res.json();     //data is array of objects

    const paths= data.map(ninja=>{

        return {
            params: { id : ninja.id.toString() }
        }
    })

    return {
      paths,
      fallback:false
    }
}

export const getStaticProps = async (context) =>{           //this runs 10 times automatically

    const id=context.params.id;

    const res=await fetch('https://jsonplaceholder.typicode.com/users/'+ id);        //at a single call only 1 object is fetched and returned in end

    const data= await res.json();
    return {
        props:{ ninja: data}
    }
}

const Details = ({ ninja }) => {
    return ( 
        
        <div>
        <h1>{ ninja.name }</h1>
        <p>{ ninja.email }</p>
        <p>{ ninja.website }</p>
        <p>{ ninja.address.city }</p>
        </div>

     );
}
 
export default Details;

