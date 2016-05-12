#pragma strict

function OnTriggerEnter(Bullet : Collider){

    Destroy(gameObject);
    Debug.Log("Ded");
}