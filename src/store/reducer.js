let intialState={
	admin:require("./data").admin,
	student:require("./data").student,
	faculty:require("./data").faculty,
	courses:require("./data").courses,
	slots:require("./data").slots,
	batch:require("./data").batch,
	fid:'',
	sid:"",
	cid:"",
	slot_id:"",
	dt:"2020-10-04",
	currentUser:{},
	studentlog:false,
	adminlog:false
}
if(localStorage.getItem("sms"))
{
	intialState=JSON.parse(localStorage.getItem("sms"))	
}

const reducer=function(state=intialState,action){
	switch(action.type)
	{
		case "add admin":
				return {
					...state,
					admin:[...state.admin,action.payload]
				}
		case "delete admin":
				return {
					...state,
					admin:state.admin.filter(x=>x.id!==action.payload)
				}
		case "add faculty":
				return {
					...state,
					faculty:[...state.faculty,action.payload]
				}
		case "delete faculty":
				return {
					...state,
					faculty:state.faculty.filter(x=>x.id!==action.payload)
				}
				
		case "add student":
				return {
					...state,
					student:[...state.student,action.payload]
				}
		case "delete student":
				return {
					...state,
					student:state.student.filter(x=>x.id!==action.payload)
				}
				
		case "add courses":
				return {
					...state,
					courses:[...state.courses,action.payload]
				}
		case "delete courses":
				return {
					...state,
					courses:state.courses.filter(x=>x.id!==action.payload)
				}
				
		case "add slots":
				return {
					...state,
					slots:[...state.slots,action.payload]
				}
		case "delete slots":
				return {
					...state,
					slots:state.slots.filter(x=>x.id!==action.payload)
				}
		case "setFid":
				return {
					...state,
					fid:action.payload
				}
		case "setSid":
				return {
					...state,
					sid:action.payload.name,
					cid:action.payload.course,
				}
		case "setSlot_id":
				return {
					...state,
					slot_id:action.payload
				}
		case "setDT":
				return {
					...state,
					dt:action.payload
				}
		case "createBatch":
				return {
					...state,
					batch:[...state.batch,{fid:state.fid,sid:state.sid,cid:state.cid,slot_id:state.slot_id,dt:state.dt,id:state.batch.length+1}]
				}
				
				
		case "saveBatch":
			localStorage.setItem("sms",JSON.stringify(state))
			return {
				...state
			}

		case "admin login":
				return {
					...state,
					adminlog:true,
					currentUser:action.payload
				}	
		case "student login":
				return {
					...state,
					studentlog:true,
					currentUser:action.payload
				}	
				
		default:
			return {
				...state
			}
			
	}
}

export default reducer;