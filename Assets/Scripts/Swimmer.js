#pragma strict

public var _rb : Rigidbody;

public var isSwimming: boolean;

function Start () {

	_rb = GetComponent.<Rigidbody>();
	isSwimming = false;

}

function FixedUpdate(){

	if(isSwimming == true){
		_rb.constraints = RigidbodyConstraints.FreezePositionY;
		_rb.useGravity = false;
		_rb.mass = 0;
	}
	else{
		_rb.constraints = RigidbodyConstraints.None;
		_rb.useGravity = true;
		_rb.mass = 1;
	}
}

function OnTriggerEnter(Water : Collider){
	
	isSwimming = true;

}

function OnTriggerStay(Water : Collider){

	isSwimming = true;

}

function OnTriggerExit(Water : Collider){

	isSwimming = false;
}