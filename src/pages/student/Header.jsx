import React from 'react';
import {Link} from 'react-router-dom';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
let Header=function(props){
	return <div className="header">
				<Link to="/student/index">welcome {props.currentUser.name}</Link>
				<Link to="/">logout</Link>
			</div>	
}

export default connect(s=>s,f2)(Header);