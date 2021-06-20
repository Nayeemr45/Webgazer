import {useEffect} from 'react';

import axios from 'axios';
import { useHistory } from "react-router-dom";

const GrazerTest = ({time}) => {
    const dataArray = [];
    let dataobj = {};
    let ispause = false;
    const history = useHistory();
  
    const goHome = () => history.push("/thankyou");
   
  
    useEffect(() => {
      const webgazer = window.webgazer;
      webgazer
        .setGazeListener((data, clock) => {
          data
            ? (dataobj = {x: data.all[0].x, y: data.all[0].y, clock: clock})
            : (dataobj = '');
          dataobj == '' ? console.log('error') : dataArray.push(dataobj);
        })
        .begin();
      setTimeout(() => {
        webgazer.pause();
        ispause = true;
        if (ispause) {
          //axios.post()
          let finalUserDataJSON = dataArray ? JSON.stringify(dataArray) : "";
          
            axios
              .post(`http://localhost:5000/data`,  {finalUserDataJSON})
              .then((res) => {
                console.log(res);
                console.log(res.data);
                goHome();
              });
        }
        console.log(dataArray);
      }, time);
      
    });
    return (
      <div className="GrazerTest">
      <div className="GrazerTest-2">
      <div className="box"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
      </div>
    );
  }

export default GrazerTest
