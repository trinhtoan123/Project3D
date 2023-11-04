import { _decorator, AnimationClip, Camera, Component, EventKeyboard, find, Input, input, KeyCode, Node, RigidBody, SkeletalAnimation } from 'cc';
import { EasyController, EasyControllerEvent } from './Controler/EasyController';
const { ccclass, property } = _decorator;

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

    @property(AnimationClip)
    jumpBeginAnimClip: AnimationClip;

    @property(AnimationClip)
    jumpLoopAnimClip: AnimationClip;

    @property(AnimationClip)
    jumpLandAnimClip: AnimationClip;
    
    _rigidBody: RigidBody;
    _isMoving: boolean = false;
    _velocityScale: number = 1.0;

    _isInTheAir: boolean = false;
    _currentVerticalVelocity: number = 0.0;
    private _anim: SkeletalAnimation;

  protected start(): void {
      if(!this.mainCamera){
        this.mainCamera = find("Main Camera")?.getComponent(Camera);
      }
      this._rigidBody = this.node.getComponent(RigidBody);
      this._anim = this.node.getComponent(SkeletalAnimation);

      EasyController.on(EasyControllerEvent.MOVEMENT,this.onMovement,this);
      EasyController.on(EasyControllerEvent.MOVEMENT_STOP,this.onMovementRelease,this);
      EasyController.on(EasyControllerEvent.BUTTON,this.onJump,this);
      EasyController.on(EasyControllerEvent.ATTACK,this.onAttack,this);

  }
  protected onDestroy(): void {
    EasyController.off(EasyControllerEvent.MOVEMENT,this.onMovement,this);
    EasyController.off(EasyControllerEvent.MOVEMENT_STOP,this.onMovementRelease,this);
    EasyController.off(EasyControllerEvent.BUTTON,this.onJump,this);
    EasyController.off(EasyControllerEvent.ATTACK,this.onAttack,this);
  }
  onMovement(){

  }
  onJump(){

  }
  onAttack(){

  }
  onMovementRelease(){

  }
}


