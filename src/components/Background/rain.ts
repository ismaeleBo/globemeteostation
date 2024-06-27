export const makeItRain = () => {
  // Clear out everything
  document.querySelectorAll(".rain").forEach((element) => {
    element.innerHTML = "";
  });

  let increment = 0;
  let drops = "";
  let backDrops = "";

  while (increment < 100) {
    // Couple random numbers to use for various randomizations
    const randoHundo = Math.floor(Math.random() * 98) + 1;
    const randoFiver = Math.floor(Math.random() * 4) + 2;
    // Increment
    increment += randoFiver;

    // Add in a new raindrop with various randomizations to certain CSS properties
    drops += `<div class="drop" style="left: ${increment}%; bottom: ${
      randoFiver + randoFiver - 1 + 100
    }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
              </div>`;
    backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
      randoFiver + randoFiver - 1 + 100
    }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                    <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                    <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                  </div>`;
  }

  const frontRow = document.querySelector(".rain.front-row");
  const backRow = document.querySelector(".rain.back-row");

  if (frontRow) {
    frontRow.innerHTML = drops;
  }

  if (backRow) {
    backRow.innerHTML = backDrops;
  }

  const background = document.querySelector(".background");

  background?.classList.toggle("splat-toggle");
};
