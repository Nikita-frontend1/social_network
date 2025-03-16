import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsNavigate = (state) => ({
    isAuth: state.auth.isAuth
  })


const withAuthNavigate = (Component) => {

    class NavigateComponent extends React.Component {
        render () {

            if (!this.props.isAuth) return <Navigate to = {'/login'} />

            return <Component {...this.props}/>
            
        }
    }
 
    let ConnectedAuthNavigateComponent = connect (mapStateToPropsNavigate) (NavigateComponent)
      
    return ConnectedAuthNavigateComponent
}

export default withAuthNavigate
