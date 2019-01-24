import React,{Component} from "react";
import Jihyo from "./photo/Jihyo.jpg";


//1) Pure Function
export const About = () => {
  return(
  <div>
      <div style = {{textAlign: "center", fontSize: "100px", fontFamily: "Comic Sans"}}>
      About Us
      </div>

      <div style = {{textAlign: "center", fontSize: "50px", fontFamily: "New Times Roman"}}>
      Stacia Tay Hui Wen is <strong>NOT</strong> hot
      </div>

      <div style={{display: "flex", justifyContent: "center"}}>
      <img src={Jihyo} style={{height: "10%", width: "10%", paddingTop: "50px"}}/>
      </div>

  </div>
  )
}





//2) Class
/*export class About extends Component
{
  //Attributes

  render()
  {
      return (
        <div>
          About Us
        </div>
      );
  }

}*/
