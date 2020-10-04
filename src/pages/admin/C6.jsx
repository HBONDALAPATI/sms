import React from 'react';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';

let C6=function(props){
	let {fid,sid,cid,slot_id}=props
	let	setFid=id=>props.setFid(id)
	let	p1=function(e,ob){
			props.setSid(ob)
	}	
	let	p2=function(e,id){
		e.preventDefault()
		props.setSlot_id(id)
	}
	let p3=e=>{
		props.createBatch()
		props.saveBatch()
	}
	// let	setDT=id=>props.setDT(id)
	return <div className="">
						<Header />
							<div className="main">
								<div className="flex">
									<div className="item i1">
										<p className="l-t">slots {props.slots.length}</p>
										{props.slots.map(x=>
											<p
											key={x.name} 
											onDragOver={e=>p2(e,x.name)}
											onDrop={e=>p3(e,x.name)}
											className={x.name===slot_id?"li a":"li"}>
											{x.name}	
											</p>
										)}
									</div>
									<div className="item i2">
										<p className="l-t">student {props.student.length}</p>
										{props.student.map(x=>
											<p 
											key={x.name} 
											draggable={true}
											onDragStart={e=>p1(e,x)}
											className={x.name===sid?"li a":"li"}>
											{x.name}	
											</p>
										)}
									</div>
									
									<div className="item i3">
										<p className="l-t">courses {props.courses.length}</p>
										{props.courses.map(x=>
											<p 
											key={x.name} 
											className={x.name===cid?"li a":"li"}>
											{x.name}	
											</p>
										)}
									</div>
									<div className="item i4">
										<p className="l-t">faculty {props.faculty.length}</p>
										{props.faculty.map(x=>
											<p 
											key={x.name} 
											onClick={e=>setFid(x.name)}
											className={x.name===fid?"li a":"li"}>
											{x.name}	
											</p>
										)}
									</div>
									<div className="item item2 i5">
										<p className="l-t">batch {props.batch.length}</p>
										<table cellPadding={5} cellSpacing={0}>
											<thead>
												<tr>
													<th>time</th>
													<th>student</th>
													<th>course</th>
													<th>faculty</th>
													<th>date</th>
												</tr>
											</thead>
											<tbody>
												{props.batch.map(x=>
													<tr key={x.id}>
														<td>{x.slot_id}</td>
														<td>{x.sid}</td>
														<td>{x.cid}</td>
														<td>{x.fid}</td>
														<td>{x.dt}</td>
													</tr>
												)}
											</tbody>
										</table>
									</div>
									
									

								</div>
							</div>
						<Footer />
			</div>	
}

export default connect(s=>s,f2)(C6);