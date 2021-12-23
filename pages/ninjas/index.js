
import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';


export const getStaticProps= async () =>{           //runs at build time 
                                                    //dont write any code that you want to run in browser
    const res=await fetch('https://jsonplaceholder.typicode.com/users');

    const  data=await res.json();

    return {
      props: { ninjas : data }        //inside the props pass values and porperties that you want to make accessible inside ur components as a prop

    }
}


const Ninjas = ({ ninjas }) => {      //ninjas is destructured prop that we get above
    return (
      <div>
        <h1>All Ninjas</h1>

        
          {ninjas.map(ninja=> (      //use parenthesis cuz we are just returning template this this

            <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
              <a className={styles.single}>
                <h3>{ ninja.name }</h3>
              </a>
              </Link>
          ))}
        
      </div>
    );
  }
   
  export default Ninjas;