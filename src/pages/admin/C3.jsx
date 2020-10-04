import React,{useState} from 'react';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
let C3=function(props){


	let [ob,abc]=useState({name:"",email:"",password:"",course:""})

	let insert=e=>{
		e.preventDefault()
		props.addstudent({...ob,id:props.student.length+1})
	}
	let del=id=>props.delstudent(id)

	return <div>
				<Header />
				<div className="main">
					<p className="title">All student {props.student.length}</p>

					<form onSubmit={e=>insert(e)}>
						<input onChange={e=>abc({...ob,name:e.target.value})} placeholder="name" value={ob.name} />
						<input onChange={e=>abc({...ob,email:e.target.value})} placeholder="email" value={ob.email} />
						<input onChange={e=>abc({...ob,password:e.target.value})} placeholder="password" value={ob.password} />
						<input onChange={e=>abc({...ob,course:e.target.value})} placeholder="course" list="mylist" value={ob.course} />
						
						<datalist id="mylist">
							{props.courses.map(x=><option key={x.name}>{x.name}</option>)}
						</datalist>	

						<button>add student</button>
					</form>

					<table cellPadding={10} cellSpacing={0}>
							<thead>
								<tr>
									<th>id</th>
									<th>name</th>
									<th>email</th>
									<th>password</th>
									<th>course</th>
									<th>actions</th>
								</tr>
							</thead>
							<tbody>
								{props.student.map(x=>
									<tr key={x.id}>
										<td>{x.id}</td>
										<td>{x.name}</td>
										<td>{x.email}</td>
										<td>{x.password}</td>
										<td>{x.course}</td>
										<td> <button onClick={e=>del(x.id)}> delete </button> </td>
									</tr>
									
								)}
							</tbody>
						</table>	
					
				</div>
				<Footer />
			</div>	
}

export default connect(state=>state,f2)(C3);