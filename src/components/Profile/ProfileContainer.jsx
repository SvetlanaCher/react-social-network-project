import React, { Component } from 'react'
import Profile from './Profile'
import { getUserProfile } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);
        
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);