document.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 800;

    class Game {
        constructor() {
            this.enemies = [];
        }
        draw() {
    
        }
        update() {
        
        }
        #addNewEnemy() {

        }
    }

    class Enemy {
        constructor(){
            this.x = 0;
            this.y = 0;
            this.width = 0;
            this.height = 0;
            this.speed = 0;
        }
        uptade() {
            this.x--;

        }
        draw() {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    let lastTime = 1;
    function animate(timeStamp) {
        ctx.clearRect (0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp
        //code
        requestAnimationFrame(animate);
    };
    animate(0);
});