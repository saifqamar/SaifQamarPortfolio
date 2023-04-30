import React from "react";
import '../App.css';
import { useParams } from "react-router-dom";
// import { useParams } from 'react';
import ProjectDetailsData from "../ProjectDetailsData";



const ProDetails = ({ match }) => {
  let {cat, id} = useParams()
  console.log(cat)
  console.log(id)
  console.log(ProjectDetailsData[cat][id - 1])
    // const [projData, setProjData] = useState(null);

//   useEffect(() => {
//     fetch(`../data.${match.params.id}.json`)
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
