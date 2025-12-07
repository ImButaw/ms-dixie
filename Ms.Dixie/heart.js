
        // Heart functions (converted from Python)
        function heartA(k) {
            return 15 * Math.sin(k) ** 3;
        }

        function heartB(k) {
            return 12 * Math.cos(k)
                 - 5 * Math.cos(2 * k)
                 - 2 * Math.cos(3 * k)
                 - Math.cos(4 * k);
        }

        // Derivatives for tangent angle
        function dHeartA(k) {
            return 45 * Math.sin(k) ** 2 * Math.cos(k);
        }

        function dHeartB(k) {
            return -12 * Math.sin(k) + 10 * Math.sin(2 * k) + 6 * Math.sin(3 * k) + 4 * Math.sin(4 * k);
        }

        // Setup canvas
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.strokeStyle = "#F55AA2";
        ctx.lineWidth = 2;

        let exploded = false;
        let particles = [];

        // Animate heart drawing
        let i = 0;
        function drawHeartAnimation() {
            if (i > 1100) {
                startTextAnimation();  // Start text only AFTER heart is drawn
                return;
            }

            let x = heartA(i) * 20;
            let y = -heartB(i) * 20;

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(x, y);
            ctx.stroke();

            i++;
            requestAnimationFrame(drawHeartAnimation);
        }

        drawHeartAnimation(); // Start drawing heart

        // Function to draw full static heart
        function drawHeart() {
            for (let k = 0; k <= 1100; k++) {
                let x = heartA(k) * 20;
                let y = -heartB(k) * 20;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(x, y);
                ctx.stroke();
            }
        }

        // Text animation
        const text = "Ashly Torrelino ❤️";
        const step = 0.05;
        let start = 0;

        function startTextAnimation() {
            ctx.fillStyle = "#ADD2E4";
            ctx.font = "20px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Make clickable only after heart is completed
            canvas.style.cursor = "pointer";
            canvas.addEventListener('click', explode);

            function drawText() {
                // Clear canvas then redraw heart
                ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
                
                if (!exploded) {
                    drawHeart();

                    // Draw text along heart
                    for (let j = 0; j < text.length; j++) {
                        let k = start + j * step;
                        let x = heartA(k) * 20;
                        let y = -heartB(k) * 20;
                        let dx = dHeartA(k) * 20;
                        let dy = -dHeartB(k) * 20;
                        let angle = Math.atan2(dy, dx);

                        ctx.save();
                        ctx.translate(x, y);
                        ctx.rotate(angle);
                        ctx.fillText(text.charAt(j), 0, 0);
                        ctx.restore();
                    }

                    start += 0.01;
                } else {
                    // Update and draw particles
                    for (let p of particles) {
                        p.x += p.vx;
                        p.y += p.vy;
                        p.life--;
                        if (p.life > 0) {
                            ctx.fillStyle = `rgba(255, 165, 0, ${p.life / 100})`; // Orange color fading
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
                            ctx.fill();
                        }
                    }
                    particles = particles.filter(p => p.life > 0);
                    // Hide canvas after explosion completes
                    if (particles.length === 0) {
                        canvas.style.opacity = "0";
                        setTimeout(() => canvas.style.display = "none", 2000); // Hide after fade
                    }
                }

                requestAnimationFrame(drawText);
            }

            drawText(); // Start text animation
        }

        // Explosion function - particles from heart path
        function explode() {
            if (exploded) return; // Prevent multiple explosions
            exploded = true;
                const sound = document.getElementById("pearl");
    sound.currentTime = 0; 
    sound.play();
            particles = [];
            // Create particles from sampled points on the heart
            for (let k = 0; k <= 1100; k += 10) { // Sample every 10 for ~100 particles
                let x = heartA(k) * 20;
                let y = -heartB(k) * 20;
                let angle = Math.random() * 2 * Math.PI; // Random outward direction
                let speed = Math.random() * 8 + 2;
                particles.push({
                    x: x,
                    y: y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 120
                });
            }
            // Remove clickability after explosion
            canvas.removeEventListener('click', explode);
            canvas.style.cursor = "default";
        }
