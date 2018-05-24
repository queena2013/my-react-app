
//创建reduce
export function counter(state, action){
	switch(action.type){
		case '加机关枪':
			return state+1;
		case '减机关枪':
			return state-1;
		default:
			return 10;
	}
}

export function addGun(){
	return {type:'加机关枪'}
}

export function removeGun(){
	return {type:'减机关枪'}
}

export function addGunAsync(){
	return dispatch=>{
		setTimeout(()=>{
			dispatch(addGun())
		}, 2000)
	}
}