import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Button, Dropdown, Form, Header, Icon, Segment } from 'semantic-ui-react';
import { push } from 'react-router-redux';

import PageHeader from './PageHeader';
import UserList from './UserList';

const pageHeaderTitleStyle= {
    fontWeight: 300,
};

const highlightStyle = {
    fontWeight: 700
};

const marginButtonStyle = {
    marginBottom: '2rem'
};

const DashboardPage = ({users}) => {
    return (
        <div>
            <div style={marginButtonStyle}>
                <PageHeader >
                    <h1 style={pageHeaderTitleStyle}>Who has more stars?</h1>
                </PageHeader>
            </div>
            <UserList users={users} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps)(DashboardPage);