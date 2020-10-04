module.exports={
	admin:[{id:1,name:"admin1",email:"admin1@gmail.com",password:"admin1"}, {id:2,name:"admin2",email:"admin2@gmail.com",password:"admin2"}, {id:3,name:"admin3",email:"admin3@gmail.com",password:"admin3"}, {id:4,name:"admin4",email:"admin4@gmail.com",password:"admin4"} ] ,
	student:[{id:1,name:"student1",email:"student1@gmail.com",password:"student1",course:"mean stack"}, {id:2,name:"student2",email:"student2@gmail.com",password:"student2",course:"mern stack"}, {id:3,name:"student3",email:"student3@gmail.com",password:"student3",course:"php"}, {id:4,name:"student4",email:"student4@gmail.com",password:"student4",course:"java"}, {id:5,name:"student5",email:"student5@gmail.com",password:"student5",course:"c++"}, {id:6,name:"student6",email:"student6@gmail.com",password:"student6",course:"c++"}, {id:7,name:"student7",email:"student7@gmail.com",password:"student7",course:"c++"}, {id:8,name:"student8",email:"student8@gmail.com",password:"student8",course:"c++"}, {id:9,name:"student9",email:"student9@gmail.com",password:"student9",course:"c++"} ],
	courses:[{id:1,name:"mean stack",duration:"20 days",price:"12000"}, {id:2,name:"mern stack",duration:"20 days",price:"22000"}, {id:3,name:"java",duration:"40 days",price:"50000"}, {id:4,name:"c++",duration:"18 days",price:"5000"} ],
	slots:[{id:1,name:"5-6am"}, {id:2,name:"6-7am"}, {id:3,name:"7-8am"}, {id:4,name:"8-9am"}, {id:5,name:"9-10am"}, {id:6,name:"10-11am"}, {id:7,name:"11-12.30noon"}, {id:8,name:"12:30-1pm"}, {id:9,name:"1-3pm"}, {id:10,name:"3-4pm"}, {id:11,name:"4-5pm"}, {id:12,name:"5-6pm"}, {id:13,name:"6-7pm"}, {id:14,name:"7-8pm"}, {id:15,name:"8-9pm"}, {id:16,name:"9-10pm"}, {id:17,name:"10-11pm"}, {id:18,name:"11-12pm"}, {id:19,name:"12-1pm"} ],
	faculty:[{id:1,name:"faculty1",email:"faculty1@gmail.com",title:"it faculty"}, {id:2,name:"faculty2",email:"faculty2@gmail.com",title:"sap faculty"}, {id:3,name:"faculty3",email:"faculty3@gmail.com",title:"finance faculty"}, {id:4,name:"faculty4",email:"faculty4@gmail.com",title:"cyber security faculty"} ],
	batch:[
		{id:1,sid:"student1",slot_id:"7-8am",dt:"2020-10-04",fid:"faculty1",cid:"mean stack"},
		{id:2,sid:"student1",slot_id:"10-11pm",dt:"2020-10-04",fid:"faculty1",cid:"mean stack"},
		{id:3,sid:"student1",slot_id:"7-8am",dt:"2020-10-05",fid:"faculty1",cid:"mean stack"},
		{id:4,sid:"student2",slot_id:"7-8am",dt:"2020-10-06",fid:"faculty1",cid:"mern stack"},
		{id:5,sid:"student2",slot_id:"7-8am",dt:"2020-10-07",fid:"faculty1",cid:"mern stack"},
	]
}
