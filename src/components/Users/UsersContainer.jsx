import React from 'react';
import { connect } from "react-redux";
import { follow,  unfollow, 
  getUsersThunkCreator} from "../../redux/users-reducer";
import UsersFunc from './UsersFunc';
import Preloader from "../Common/Preloader/Preloader";
import { compose } from 'redux';
import withAuthNavigate from '../../hoc/AuthNavigate';


class UsersAPI extends React.Component{
    //  constructor(props) {
    //    super (props);
    // } // не нужен constructor, если мы ничего не передаем(делегируем) в своей компоненте, а берем всю инкапсулированные параметры из родительской React
     
    componentDidMount () {

      this.props.getUsersThunkCreator (this.props.currentPage, this.props.pageSize) 

    } 

    onPageChanged = (currentPage) => { 

      this.props.getUsersThunkCreator (currentPage, this.props.pageSize) 

    }

    render () {
        
        // let curP = this.props.currentPage;
        // let curPF = ((curP - 5) < 0) ?  0  : curP - 5;
        // let curPL = curP + 5;
        // let slicedPages = pages.slice( curPF, curPL);
           
        return <> 
        
        {this.props.isFetching ? <Preloader />:  <UsersFunc totalUsersCount = {this.props.totalUsersCount}  // <> - фрагмент (типо root)
        pageSize={this.props.pageSize} currentPage={this.props.currentPage}
        onPageChanged = {this.onPageChanged} users = {this.props.users}
        follow={this.props.follow} unfollow = {this.props.unfollow} 
        followingInProgress={this.props.followingInProgress}/> }
        
        </>
        
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersObj.users,
        pageSize: state.usersObj.pageSize,
        totalUsersCount: state.usersObj.totalUsersCount,
        currentPage: state.usersObj.currentPage,
        isFetching: state.usersObj.isFetching,
        followingInProgress: state.usersObj.followingInProgress
 
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//       follow: (userId) => {
//         dispatch (followActionCreator(userId))
//       },
//       unfollow: (userId) => {
//         dispatch (unfollowActionCreator(userId))
//       },
//       setUsers: (users) => {
//         dispatch (setUserActionCreator(users))
//       },
//       setCurrentPage: (pageNumber) => {
//         dispatch (setCurrentPageActionCreator(pageNumber))
//       },
//       setTotalUsersCount: (totalCount) => {
//         dispatch (setUsersTotalCountActionCreator(totalCount))
//       },
//       toggleIsFetching: (isFetching) => {
//         dispatch (toggleIsFetchingActionCreator(isFetching))
//       }
//     }
// }

export default compose (
  withAuthNavigate,
  connect (mapStateToProps, //connect - это hoc(higher-order component) в библиотеке react-redu
    {follow,unfollow, 
      getUsersThunkCreator //обертка через connect (dispatch (AC)) и делает автоматом callback функции (вызывает там AC и action)
    })
) (UsersAPI)  