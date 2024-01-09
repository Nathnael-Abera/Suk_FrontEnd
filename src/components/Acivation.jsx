import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Acivation() {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activateUser = async () => {
        try {
          await axios.post(`http://localhost:3000/api/user/activate`, {
            activation_token,
          });
          console.log("User activated successfully");
        } catch (error) {
          console.log(error);
          setError(true);
        }
      };
      activateUser();
    }
  }, [activation_token]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {error ? (
        <p>Your Token Is Expired</p>
      ) : (
        <p>Your Account Has Been Activated</p>
      )}
    </div>
  );
}

export default Acivation;
