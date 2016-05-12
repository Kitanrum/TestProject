#pragma strict

public var bullet : Rigidbody;
public var player : Transform;
public var playerCanon : Transform;

public var shootSound : AudioClip;
public var hitSound : AudioClip;

public var laserDistance : float = .02;
public var fireDelay : float = 0.3;
private var nextFire : float = 0.0;
public var health : int = 5.0;

public var dead : boolean;

public var shootButton : List.<KeyCode>;

function Start () {

	playerCanon = transform.FindChild("BulletSpawnPoint");
}

function Update () {

	for(KeyCode in shootButton){
		if(Input.GetKey(KeyCode) && nextFire < 0){
			nextFire = fireDelay;
			Shoot();
			break;
		}
	}

	nextFire -= Time.deltaTime;

}

public function Shoot(){

var instance : Rigidbody = Instantiate(bullet, playerCanon.transform.position, playerCanon.transform.rotation);
var fwd : Vector3 = playerCanon.TransformDirection(Vector3.forward);

instance.AddForce(fwd * 1500);
}