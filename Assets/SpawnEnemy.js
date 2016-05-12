#pragma strict

var enemy : GameObject;
static var target : Transform;
var i : float;
var numEnem : float;
var spawnRange : Vector3;
var deleteRange : Vector3;

function Start () {
    
    
    //deleteRange = Vector3(Random.Range(23, 222), 121, Random.Range(158, 190));
    Spawn();

    target = GameObject.FindWithTag("Player").transform;
}

function Spawn() {

    for(i = 0; i < numEnem; i ++){

        yield WaitForSeconds(1);
        Instantiate(enemy, Vector3(Random.Range(25,223), 121, Random.Range(25,223)) , Quaternion.identity);
        	
    }
}