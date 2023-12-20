import styles from '../card/card.module.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


function Card(props) {
   const{name,image,teams,id}=props
   


   return (
      
      <div className={styles.DivCard}>
         
         <Link to={`/detail/${id}`}>
          <div className={styles.Divimg}>
            <img src={image.url===''?'www....':image.url} alt='driver'/> 
          </div>       
         <div className={styles.Divtext} > 
           <h1 >{`${name.forename}`}</h1>
           <h1 >{`${name.surname}`}</h1>
           <h2>TEAMS</h2>
           <h3 >{teams}</h3> 
         </div>
         </Link>
         
      </div>
      
   );
}

function mapDispatchToProps(dispatch) {
   return {
   }
}

function mapStateToProps(state) {
   return {
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)

