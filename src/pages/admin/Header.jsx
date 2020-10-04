import React from 'react';
import {Link} from 'react-router-dom';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
let Header=function({user,loggedin,role}){
	return <div className="header">
				<Link to="/admin/index">home</Link>
				<Link to="/admin/index">admins</Link>
				<Link to="/admin/faculty">faculty</Link>
				<Link to="/admin/student">student</Link>
				<Link to="/admin/courses">courses</Link>
				<Link to="/admin/slots">slots</Link>
				<Link to="/admin/batch">batch</Link>
				<Link to="/">logout</Link>
			</div>	
}

export default connect(s=>s,f2)(Header);