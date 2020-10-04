import React,{useState} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
let Login=function(props){

	let [ob,abc]=useState({email:"",password:""})

	let login1=e=>{
		alert("working")
		let users=props.admin
		if(users.some(x=>x.email===ob.email && x.password===ob.password))
		{
			props.login1(users.find(x=>x.email===ob.email && x.password===ob.password))
			props.history.push("/admin/index")
		}
		else
		{
			alert("failed to login as admin")
		}

	}	
	let login2=e=>{
		alert("working")
		let users=props.student

		if(users.some(x=>x.email===ob.email && x.password===ob.password))
		{
			props.login2(users.find(x=>x.email===ob.email && x.password===ob.password))
			props.history.push("/student/index")

		}
		else
		{
			alert("failed to login as student")
		}

	}	
	
	return <div className="">
		<div className="form">
			<h1>Login to Scheduling System</h1>
			<p>username</p>
			<input onChange={e=>abc({...ob,email:e.target.value})} value={ob.email} placeholder="email or username" />	
			<p>password</p>
			<input onChange={e=>abc({...ob,password:e.target.value})} value={ob.password} placeholder="your password" />	
			<br/>
			<br/>
			<button onClick={e=>login1()}>admin</button>
			<button onClick={e=>login2()}>student</button>
		</div>
	</div>	
}

export default connect(s=>s,f2)(Login);