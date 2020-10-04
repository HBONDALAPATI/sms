import React,{useState} from 'react';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
let C2=function(props){


	let [ob,abc]=useState({name:"",email:"",title:""})

	let insert=e=>{
		e.preventDefault()
		props.addfaculty({...ob,id:props.faculty.length+1})
	}
	let del=id=>props.delfaculty(id)

	return <div>
				<Header />
				<div className="main">
					<p className="title">All faculty {props.faculty.length}</p>

					<form onSubmit={e=>insert(e)}>
						<input onChange={e=>abc({...ob,name:e.target.value})} placeholder="name" value={ob.name} />
						<input onChange={e=>abc({...ob,email:e.target.value})} placeholder="email" value={ob.email} />
						<input onChange={e=>abc({...ob,title:e.target.value})} placeholder="title" value={ob.title} />
						<button>add faculty</button>
					</form>

					<table cellPadding={10} cellSpacing={0}>
							<thead>
								<tr>
									<th>id</th>
									<th>name</th>
									<th>email</th>
									<th>title</th>
									<th>actions</th>
								</tr>
							</thead>
							<tbody>
								{props.faculty.map(x=>
									<tr key={x.id}>
										<td>{x.id}</td>
										<td>{x.name}</td>
										<td>{x.email}</td>
										<td>{x.title}</td>
										<td> <button onClick={e=>del(x.id)}> delete </button> </td>
									</tr>
									
								)}
							</tbody>
						</table>	
					
				</div>
				<Footer />
			</div>	
}

export default connect(state=>state,f2)(C2);