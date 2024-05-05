class Robot {
    True = true
    x = 0
    y = 0
    angle = 0
    while (True) {
        True = true
        if (angle >= 360) {
            angle -= 360
        }
    } 
    constructor(name) {
        this.name = name
    }

    move(self, xmove, ymove) {
        if (ymove = undefined) {
            self.x += xmove
        }
        else {
            self.x += xmove
            self.y += ymove
        }
    }
    turn(self, turnangle) {
        if (turnangle > 360) {
            turnangle = 360
        }
        self.angle += turnangle
    }

}

