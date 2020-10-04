import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import C1 from './admin/C1';
import C2 from './admin/C2';
import C3 from './admin/C3';
import C4 from './admin/C4';
import C5 from './admin/C5';
import C6 from './admin/C6';
import S1 from './student/Index';
import Errorpage from './Errorpage';
import Login from './Login';

let App=function(){
	return <Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/admin/index" component={C1} />
				<Route exact path="/admin/faculty" component={C2} />
				<Route exact path="/admin/student" component={C3} />
				<Route exact path="/admin/courses" component={C4} />
				<Route exact path="/admin/slots" component={C5} />
				<Route exact path="/admin/batch" component={C6} />
				<Route exact path="/student/index" component={S1} />
				{/*<Route exact path="/user" component={User} />*/}
				<Route  component={Errorpage} />
			</Switch>
	</Router>	
}

export default App;