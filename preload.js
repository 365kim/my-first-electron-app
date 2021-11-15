const DEPENDENCIES = ['chrome', 'node', 'electron'];

const replaceText = (selector, text) => {
  const element = document.getElementById(selector);

  if (element) {
    element.innerText = text;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  for (const dependency of DEPENDENCIES) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
