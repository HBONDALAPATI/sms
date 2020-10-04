
export function login1(payload)
{
	return dispatch=>{
		dispatch({type:"admin login",payload})
	}
}
export function login2(payload)
{
	return dispatch=>{
		dispatch({type:"student login",payload})
	}
}


export function createBatch()
{
	return dispatch=>{
		dispatch({type:"createBatch"})
	}
}

export function saveBatch()
{
	return dispatch=>{
		dispatch({type:"saveBatch"})
	}
}

export function setFid(payload)
{
	return dispatch=>{
		dispatch({type:"setFid",payload})
	}
}
export function setSid(payload)
{
	return dispatch=>{
		dispatch({type:"setSid",payload})
	}
}

export function setSlot_id(payload)
{
	return dispatch=>{
		dispatch({type:"setSlot_id",payload})
	}
}
export function setDT(payload)
{
	return dispatch=>{
		dispatch({type:"setDT",payload})
	}
}


export function addAdmin(payload)
{
	return dispatch=>{
		dispatch({type:"add admin",payload})
	}
}

export function delAdmin(payload)
{
	return dispatch=>{
		dispatch({type:"delete admin",payload})
	}
}

export function addfaculty(payload)
{
	return dispatch=>{
		dispatch({type:"add faculty",payload})
	}
}

export function delfaculty(payload)
{
	return dispatch=>{
		dispatch({type:"delete faculty",payload})
	}
}

export function addstudent(payload)
{
	return dispatch=>{
		dispatch({type:"add student",payload})
	}
}

export function delstudent(payload)
{
	return dispatch=>{
		dispatch({type:"delete student",payload})
	}
}


export function addcourses(payload)
{
	return dispatch=>{
		dispatch({type:"add courses",payload})
	}
}

export function delcourses(payload)
{
	return dispatch=>{
		dispatch({type:"delete courses",payload})
	}
}


export function addslots(payload)
{
	return dispatch=>{
		dispatch({type:"add slots",payload})
	}
}

export function delslots(payload)
{
	return dispatch=>{
		dispatch({type:"delete slots",payload})
	}
}

