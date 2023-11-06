import { _decorator, Component, Node } from 'cc';
import { CameraControler } from './Controler/CameraControler';
import { EasyController, EasyControllerEvent } from './Controler/EasyController';
const { ccclass, property } = _decorator;

@ccclass('ThirdPersonCameraCtrl')
export class ThirdPersonCameraCtrl extends CameraControler {
    start() {
        EasyController.on(EasyControllerEvent.CAMERA_ROTATE, this.onCameraRotate, this);
        EasyController.on(EasyControllerEvent.CAMERA_ZOOM, this.onCameraZoom, this);

        this._targetLen = this.len;
        this._targetAngles.set(this.node.eulerAngles);
    }

    onDestroy() {
        EasyController.off(EasyControllerEvent.CAMERA_ROTATE, this.onCameraRotate, this);
        EasyController.off(EasyControllerEvent.CAMERA_ZOOM, this.onCameraZoom, this);
    }
}


