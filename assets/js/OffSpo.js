
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
        requestAnimationFrame(idleAnim);
      }
      idleAnim();
    });
