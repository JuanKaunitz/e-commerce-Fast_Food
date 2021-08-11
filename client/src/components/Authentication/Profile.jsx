import React, { useEffect } from "react";
import { authUser } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';

 const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUser(user))
    //eslint-disable-next-line react-hooks/exhaustive-deps         
  }, [dispatch])
 


  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
 console.log('USER: ', user)
  return (
    isAuthenticated && (
      <div className = "Log"> 
        <img className = "img-log" src={user.picture} alt={user.name} />
      </div>
    )
  );
};

export default Profile;