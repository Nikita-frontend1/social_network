import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import withAuthNavigate from '../../hoc/AuthNavigate';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount () {

      let userId = this.props.match.params.userId

      if(!userId) {
        userId = 32107;
       }
       this.props.getProfile (userId)
    }

    render() {
        return (
          <Profile {...this.props} profile={this.props.profile} /> // К нам пришли все пропсы - раскукожили и передали в дочернюю компоненту атрибутами
        )
    }

}


let mapStateToProps = (state) => ({
  profile: state.profileObj.profile,
})


 export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

 

export default compose (
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthNavigate
) (ProfileContainer)