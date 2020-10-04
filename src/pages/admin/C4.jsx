import React,{useState} from 'react';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
let C4=function(props){


	let [ob,abc]=useState({name:"",duration:"",price:""})

	let insert=e=>{
		e.preventDefault()
		props.addcourses({...ob,id:props.courses.length+1})
	}
	let del=id=>props.delcourses(id)

	return <div>
				<Header />
				<div className="main">
					<p className="title">All courses {props.courses.length}</p>

					<form onSubmit={e=>insert(e)}>
						<input onChange={e=>abc({...ob,name:e.target.value})} placeholder="name" value={ob.name} />
						<input onChange={e=>abc({...ob,duration:e.target.value})} placeholder="duration" value={ob.duration} />
						<input onChange={e=>abc({...ob,price:e.target.value})} placeholder="price" value={ob.price} />
						<button>add courses</button>
					</form>

					<table cellPadding={10} cellSpacing={0}>
							<thead>
								<tr>
									<th>id</th>
									<th>name</th>
									<th>duration</th>
									<th>price</th>
									<th>actions</th>
								</tr>
							</thead>
							<tbody>
								{props.courses.map(x=>
									<tr key={x.id}>
										<td>{x.id}</td>
										<td>{x.name}</td>
										<td>{x.duration}</td>
										<td>{x.price}</td>
										<td> <button onClick={e=>del(x.id)}> delete </button> </td>
									</tr>
									
								)}
							</tbody>
						</table>	
					
				</div>
				<Footer />
			</div>	
}

export default connect(state=>state,f2)(C4);