import { _decorator, AnimationClip, Camera, Component, EventKeyboard, find, Input, input, KeyCode, Node, RigidBody, SkeletalAnimation, v3, Vec3 } from 'cc';
import { EasyController, EasyControllerEvent } from './Controler/EasyController';
const { ccclass, property } = _decorator;

const v3_1 = v3();
@ccclass('CharacterControler')
export class CharacterControler extends Component {

  @property(Camera)
  mainCamera: Camera;
  @property
  velocity = 1.0;

  @property
  jumpVelocity = 1.0;

  @property
  maxJumpTimes: number = 0;
  private _curJumpTimes: number = 0;
  @property(AnimationClip)
  idleAnimClip: AnimationClip;

  @property(AnimationClip)
  moveAnimClip: AnimationClip;

  @property([AnimationClip])
  attackAnimationClip: AnimationClip[] = [];

  indexAnimClip: number =0;
  
  _rigidBody: RigidBody;
  _isMoving: boolean = false;
  _isAttack:boolean = false;
  _velocityScale: number = 1.0;

  _isInTheAir: boolean = false;
  _currentVerticalVelocity: number = 0.0;
  private _tmp = v3();
  private _anim: SkeletalAnimation;

  protected start(): void {
    if (!this.mainCamera) {
      this.mainCamera = find("Main Camera")?.getComponent(Camera);
    }
    this._rigidBody = this.node.getComponent(RigidBody);
    this._anim = this.node.getComponent(SkeletalAnimation);

    EasyController.on(EasyControllerEvent.MOVEMENT, this.onMovement, this);
    EasyController.on(EasyControllerEvent.MOVEMENT_STOP, this.onMovementRelease, this);
    EasyController.on(EasyControllerEvent.BUTTON, this.onAttack, this);

  }
  protected onDestroy(): void {
    EasyController.off(EasyControllerEvent.MOVEMENT, this.onMovement, this);
    EasyController.off(EasyControllerEvent.MOVEMENT_STOP, this.onMovementRelease, this);
    EasyController.off(EasyControllerEvent.MOVEMENT_STOP, this.onAttack, this);
  }
  protected update(dt: number): void {
    if (this._isMoving) {
      this._tmp.set(this.node.forward);
      this._tmp.multiplyScalar(-1.0);
      this._tmp.multiplyScalar(this.velocity * this._velocityScale);
      if (this._rigidBody) {
        this._rigidBody.getLinearVelocity(v3_1);
        this._tmp.y = v3_1.y;
        this._rigidBody.setLinearVelocity(this._tmp);
      }
      else {
        this._tmp.multiplyScalar(dt);
        this._tmp.add(this.node.position);
        this.node.setPosition(this._tmp);
      }
    }
  }
  onMovement(degree: number, offset: number) {

    let cameraRotationY = 0;
    if (this.mainCamera) {
      cameraRotationY = this.mainCamera.node.eulerAngles.y;
    }
    this._velocityScale = offset;
    this._tmp.set(0, cameraRotationY + degree - 90 + 180, 0);
    this.node.setRotationFromEuler(this._tmp);
    if (this._anim) {
      if (!this._isMoving && !this._isInTheAir) {
        if (this.moveAnimClip) {
          this._anim.crossFade(this.moveAnimClip.name);
        }
      }
      if (this.moveAnimClip) {
        this._anim.getState(this.moveAnimClip.name).speed = this._velocityScale;
      }
    }
    this._isMoving = true;


  }
  onMovementRelease() {
    if(this._isAttack){
      return;
    }
    if (!this._isInTheAir && this.idleAnimClip) {
      this._anim?.crossFade(this.idleAnimClip.name);
    }
    this._isMoving = false;
    if (this._rigidBody) {
      this._rigidBody.setLinearVelocity(Vec3.ZERO);
    }

  }
  onAttack(btnName:string) {
    if (btnName != 'btn_slot_0' || this._isAttack) {
      return;
    }

    this._anim?.crossFade(this.attackAnimationClip[0].name);
    this._isAttack = true;

  }
  onCompleteanimation(param:boolean) {
    if (param){
      this._isAttack = false;

      if (this._isMoving) {
        this._anim.crossFade(this.moveAnimClip.name);
      }
      else {
        this._anim.crossFade(this.idleAnimClip.name);
      }
    }
    
  }

}


