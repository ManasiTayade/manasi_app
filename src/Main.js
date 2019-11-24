import React from 'react';
import logo from './5.jpg';
import logo2 from './6.jpg';
import logo3 from './7.jpg';
import './Main.css';


function Main() {
  return (
    <div className="Main">
      <table className="table">

      <td> 
      <div className="Blog">
         <h4><a href="http://kaka-miracle.blogspot.com"> Kaka Feels Brazilian Pressure </a>
         </h4>
         <h6>OCTOBER 9, 2008</h6>
         <img src={logo} className= "Img"/>


         <p>AC Milan attacking midfielder Kaka has made it clear that he does not want to be seen as his national team's saviour.
            Golden Ball winner Kaka has been selected for the Brazilian national team following a lengthy injury layoff and a few club related commitments, which have prevented him from taking part in a great deal of Brazil's friendly and qualifying commitments.
             </p>
      </div>
      </td>
      <td>
      <div className="Blog2">
         <h4><a href="https://www.soccerblog.com/2018/01/ronaldinho-says-goodbye.htm"> Ronaldinho says goodbye </a>
         </h4>
         <h6>JANUARY 19, 2018 </h6>
         <img src={logo2} className= "Img"/>


         <p>The Brazilian legend Tostão claimed: “Ronaldinho has the dribbling skills of Rivelino, the vision of Gerson, the spirit and happiness of Garrincha, the pace, skill and power of Jairzinho and Ronaldo, the technical ability of Zico and the creativity of Romário.Above all he had one, very special ability: he made you smile.”
             Magic with his feet..
             </p>
      </div>
      </td>



      <td>

      
      <div className="Blog3">
         <h4><a href="https://blogs.timesofisrael.com/messi-is-still-the-best/"> Messi is still the best </a>
         </h4>
         <h6>SEPTEMBER 24, 2019 </h6>
         <img src={logo3} className= "Img"/>


         <p>FIFA’S (Fédération Internationale de Football Association) designation of Messi as the best soccer player in the world for 2019 only confirms what everybody knows. He beat Liverpool’s Virgil van Dijk and Juventus’ Cristiano Ronaldo, two remarkable players, but Messi continues to surprise with his achievements.
         </p>
      </div>
      </td>
      </table>
    </div>
  );
}

export default Main;