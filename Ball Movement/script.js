const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')
const width = cnv.width = window.innerWidth
const height = cnv.height = window.innerHeight - 4

function rand(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x
    this.y = y
    this.velX = velX
    this.velY = velY
    this.color = color
    this.size = size
}

Ball.prototype.draw = function () {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
}

Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
    
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

Ball.prototype.collusionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if((this === balls[j])) return

        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + rand(0, 255) + ',' + rand(0, 255) + ',' + rand(0, 255) +')';
        }
    }
}

let balls = []

while (balls.length < 25) {
    let size = rand(10, 20)
    let ball = new Ball(
        rand(size, width - size),
        rand(size, height - size),
        rand(-7, 7),
        rand(-7, 7),
        'rgb(' + rand(0, 255) + ', ' + rand(0, 255) + ', ' +rand(0, 255) + ')',
        size
    )
    balls.push(ball)
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'
    ctx.fillRect(0, 0, width, height)

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw()
        balls[i].update()
        balls[i].collusionDetect()
    }
    requestAnimationFrame(loop);
}
loop()