import React from "react";
import '../App.css';
// import { useState, useEffect } from 'react';


const ProDetails = ({ match }) => {
    // const [projData, setProjData] = useState(null);
//   useEffect(() => {
//     fetch(`../data.${match.params.id}.jsx`)
//       .then(response => response.json())
//       .then(data => setProjData(data));
//   }, [match.params.id]);


  return (
    <div className="container">
      {/* {cardData && <Card card={cardData} />} */}
      <h1>Helloworld</h1>
    </div>
  );
};

export default ProDetails;
