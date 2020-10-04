import React,{useState} from 'react';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
let C5=function(props){


	let [ob,abc]=useState({name:""})

	let insert=e=>{
		e.preventDefault()
		props.addslots({...ob,id:props.slots.length+1})
	}
	let del=id=>props.delslots(id)

	return <div>
				<Header />
				<div className="main">
					<p className="title">All slots {props.slots.length}</p>

					<form onSubmit={e=>insert(e)}>
						<input onChange={e=>abc({...ob,name:e.target.value})} placeholder="name" value={ob.name} />
						<button>add slots</button>
					</form>

					<table cellPadding={10} cellSpacing={0}>
							<thead>
								<tr>
									<th>id</th>
									<th>name</th>
									<th>actions</th>
								</tr>
							</thead>
							<tbody>
								{props.slots.map(x=>
									<tr key={x.id}>
										<td>{x.id}</td>
										<td>{x.name}</td>
										<td> <button onClick={e=>del(x.id)}> delete </button> </td>
									</tr>
									
								)}
							</tbody>
						</table>	
					
				</div>
				<Footer />
			</div>	
}

export default connect(state=>state,f2)(C5);