import React, { Component } from 'react'
import Header from './Header'
import { getAuthUserData } from './../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer)