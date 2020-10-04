import React from 'react';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
let Footer=function(){
	return <div className="footer">
		Scheduling System and react redux <span>crafted by hari bondalpati</span>
	</div>	
}

export default connect(s=>s,f2)(Footer);