const canvas = document.querySelector('#canvas');

canvas.width = 700; canvas.height = 700;
const ctx = canvas.getContext('2d');
const maxPartikul = 10;
class partikul {

    constructor(width, height) {
        this.size = Math.random()*100+ 40;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() - 0.5;
        this.vy = Math.random() - 0.5;
        this.width = width;
        this.height = height;
        this.speed=2
    }
    update() {
        this.x += this.vx * this.speed
        this.y += this.vy* this.speed
        if (this.x < 0 || this.x > this.width) this.vx*=-1 

        if (this.y < 0 || this.y > this.height) this.vy *= -1 

    }
    draw(context) {
        /*        context.fillRect(this.x, this.y, this.size, this.size);*/

        context.beginPath();
        context.arc(this.x, this.y, this.size,0,Math.PI*2)

        context.fill();
    }
}
let kupler = [];
for (var i = 0; i < maxPartikul; i++) {
    kupler.push(new partikul(canvas.width, canvas.height))
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    kupler.forEach(kup => {
        kup.update();
        kup.draw(ctx);
    })


   

    requestAnimationFrame(animate);

}
animate();