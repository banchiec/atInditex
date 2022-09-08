import { useParams } from "react-router-dom";

const DetailsProductScreen = () => {
  const id = useParams()
  console.log("object");
  return (
    <div>DetailsProductScreen</div>
  )
}

export default DetailsProductScreen