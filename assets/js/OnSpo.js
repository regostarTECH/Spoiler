    document.querySelectorAll(".spoiler").forEach(spo => {
      const rect = spo.getBoundingClientRect();
      const idleCanvas = document.createElement("canvas");
      idleCanvas.width = rect.width;
      idleCanvas.height = rect.height;
      idleCanvas.className = "particles";
      spo.appendChild(idleCanvas);

      const ictx = idleCanvas.getContext("2d");
      const idleParticles = [];
      for (let i = 0; i < 60; i++) {
        idleParticles.push({
          x: Math.random() * idleCanvas.width,
          y: Math.random() * idleCanvas.height,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
          size: 0.4 + Math.random() * 0.6 
        });
      }

      function idleAnim() {
        ictx.clearRect(0, 0, idleCanvas.width, idleCanvas.height);
        idleParticles.forEach(p => {
          ictx.fillStyle = "#fff";
          ictx.fillRect(p.x, p.y, p.size, p.size);
          p.x += p.dx;
          p.y += p.dy;
          if (p.x < 0) p.x = idleCanvas.width;
          if (p.x > idleCanvas.width) p.x = 0;
          if (p.y < 0) p.y = idleCanvas.height;
          if (p.y > idleCanvas.height) p.y = 0;
        });
        if (!spo.classList.contains("open")) {
          requestAnimationFrame(idleAnim);
        }
      }
      idleAnim();

      spo.addEventListener("click", () => {
        if (spo.classList.contains("open")) return;
        spo.classList.add("open");
        idleCanvas.remove();

        const openCanvas = document.createElement("canvas");
        openCanvas.width = rect.width;
        openCanvas.height = rect.height;
        openCanvas.className = "particles";
        spo.appendChild(openCanvas);

        const ctx = openCanvas.getContext("2d");
        const particles = [];
        for (let i = 0; i < 80; i++) {
          particles.push({
            x: Math.random() * openCanvas.width,
            y: Math.random() * openCanvas.height,
            dx: (Math.random() - 0.5) * 3,
            dy: (Math.random() - 0.5) * 3,
            size: 0.6 + Math.random() * 0.8,
            life: 50 + Math.random() * 25
          });
        }

        function animate() {
          ctx.clearRect(0, 0, openCanvas.width, openCanvas.height);
          particles.forEach(p => {
            ctx.fillStyle = "#fff";
            ctx.fillRect(p.x, p.y, p.size, p.size);
            p.x += p.dx;
            p.y += p.dy;
            p.life--;
          });
          for (let i = particles.length - 1; i >= 0; i--) {
            if (particles[i].life <= 0) particles.splice(i, 1);
          }
          if (particles.length > 0) {
            requestAnimationFrame(animate);
          } else {
            openCanvas.remove();
          }
        }
        animate();
      });
    });
