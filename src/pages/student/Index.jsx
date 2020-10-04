import React from 'react';
import * as f2 from '../../store/actions';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';

let Index=function(props){
	let a=props.batch.filter(x=>x.sid===props.currentUser.name)
	return <div>
			<Header />
				<div className="main">
					<h1 className="title">My Batches</h1>
					<table cellPadding={10} cellSpacing={0}>
						<thead>
							<tr>
								<th>time</th>
								<th>date</th>
								<th>course</th>
								<th>faculty</th>
							</tr>
						</thead>
						<tbody>
							{a.map(x=>
								<tr key={x.id}>
									<td>{x.slot_id}</td>
									<td>{x.dt}</td>
									<td>{x.cid}</td>
									<td>{x.fid}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			<Footer />
	</div>
}

export default connect(state=>state,f2)(Index);