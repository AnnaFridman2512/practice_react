import React, {useState, useEffect} from "react";


const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

export default function UserData(){
    const [userData, setUserData] = useState({});

    const getUserData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setUserData(jsonData);
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        
        <>
            <h2>User Data</h2>
            <p>
                <strong>Name: </strong>
                {userData.name || "(Need to populate name here)"}
            </p>

            <p>
                <strong>Website: </strong>
                {userData.website || "(Need to populate Website here)"}
            </p>

            <p>
                <strong>email: </strong>
                {userData.Website || "(Need to populate Email here)"}
            </p>
        </>
    )

}