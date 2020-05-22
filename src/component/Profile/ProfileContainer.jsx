import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus, updatePhoto, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {
    const {match,history} = props
    const profile = useSelector(state => state.profilePage.profile)
    const autorizaionedUserId = useSelector(state => state.authPage.userId)
    const status = useSelector(state => state.profilePage.status)
    const posts = useSelector(state => state.profilePage.posts)
    const dispatch = useDispatch();

    let userId = match.params.userId
    if (!userId) {
        userId = autorizaionedUserId
        if (!userId){
            userId = history.push("/login")
        }
 }

    const refreshProfile = () => {
      
     dispatch(getProfile(userId))
     dispatch(getStatus(userId))
    }

      

    useEffect(() => {
        refreshProfile()
    },[userId])

   

    const handleUpdateStatus = (status) => {
           dispatch(updateStatus(status))
    }

       const handleUploadPhoto = (photo) => {
          dispatch( updatePhoto(photo))
       }




    return <>
        <Profile profile={profile} handleUpdateStatus={handleUpdateStatus}
                 status={status} isOwner={!match.params.userId} handleUploadPhoto={handleUploadPhoto} posts={posts}/>
        </>
}

export default compose(withRouter)(ProfileContainer);