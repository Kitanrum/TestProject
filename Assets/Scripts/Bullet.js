#pragma strict

import System.Collections.Generic;

public var lifetime : float = 2.0;
public var speed : float = 5.0;
public var damage : int = 1;

function Start () {

	Destroy(gameObject,lifetime);

}

function Update () {
	transform.Translate(Vector3.forward * Time.deltaTime * speed);

}