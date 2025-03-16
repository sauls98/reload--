onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
  
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
        // Reproducir la canción
        const audio = document.getElementById("audio");
        audio.play();
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });
  