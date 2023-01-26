import { createContext, useState } from "react";

export const UserContext  = createContext({});

//context
function UserContextProvider(props) {
    const [userEmail, setUserEmail] = useState('');
    const [userPreference, setUserPrefernce] = useState('');
    //NOTE:- jwt token should be saved into local storage.
    const [authToken, setAuthToken] = useState(null);

    return (
      <UserContext.Provider
          value={{
            userEmail,
            setUserEmail,
            userPreference,
            setUserPrefernce,
            authToken,
            setAuthToken
          }}
      >
          {props.children}
      </UserContext.Provider>
    )
}

export default UserContextProvider;