var waitingToRefresh;
var waitingToSet = [];

export const setScroll = (section) => {
  clearTimeout(waitingToRefresh);
  for (const timers of waitingToSet) {
    clearTimeout(timers);
  }

  waitingToRefresh = setTimeout(() => {
    let containers = document.querySelectorAll(".sections-img");
    for (const el of containers) {
      if (
        el !== containers[section] &&
        containers[section].scrollHeight < window.screen.height
      ) {
        waitingToSet.push(
          setTimeout(() => {
            el.style.height = `${containers[section].scrollHeight}px`;
          }, 800)
        );
      } else {
        if (el.scrollHeight > containers[section].scrollHeight) {
          el.style.height = `${containers[section].scrollHeight}px`;
        } else {
          waitingToSet.push(
            setTimeout(() => {
              el.style.height = `fit-content`;
            }, 20)
          );
        }
      }
    }
  }, 10);
};
