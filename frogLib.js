function Frog() {
    frog = new Sprite(scene, "./boataa.png", 100, 100);
    frog.setSpeed(10);
    frog.setSpeed(0);
    frog.setAngle(0);
    frog.setPosition(400, 270)

    frog.moveKey = function () {
        if (keysDown[K_LEFT]) {
            frog.changeAngleBy(-5)
        } else if (keysDown[K_RIGHT]) {
            frog.changeAngleBy(5)
        } if (keysDown[K_UP]) {
            if (frog.speed < 10) {
                frog.changeSpeedBy(1)
            }
        } else if (keysDown[K_DOWN]) {
            if (frog.speed > -10) {
                frog.changeSpeedBy(-1)
            }
        } else {
            if (frog.speed > 0) {
                frog.changeSpeedBy(-1)
            } else if (frog.speed < 0) {
                frog.changeSpeedBy(1)
            } else {
                frog.setSpeed(0)
            }
        }
    }
    return frog;
}

function Fly() {
    tFly = new Sprite(scene, "./humanwithring.png", 60, 60);
    tFly.setSpeed(5);
    tFly.wriggle = function () {
        newDir = ((Math.random() * 90) - 45)
        this.changeAngleBy(newDir);
    }

    tFly.reset = function () {
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY)
    }
    tFly.reset();
    return tFly;
}



