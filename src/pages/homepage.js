import React, { Component } from 'react';
import MenuBar from '../components/menuBar'
import { Container,Typography } from '@material-ui/core';
import InviteCard from '../components/inviteCard'
import data from '../components/data'
import Tabs from '../components/tabs'


class Account extends Component {
    render() { 
        return ( 
            <div className="account" style={{color:'#000'}}>
                <MenuBar title="Home"/>
           <center> <Tabs /></center>
            </div>
         );
    }
}
 
export default Account;