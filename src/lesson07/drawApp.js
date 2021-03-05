export function drawApp(el) {
  const newEl = el;
  newEl.innerHTML = `
  <input />
  <button>add</button>
  <div>
    <p>test 1</p>
    <p>test 2</p>
    <p>test 3</p>
  </div>
  `;

  return newEl;
}

export function isNotEmpty(content) {
  const regex = new RegExp(/^\s+$/g);
  if (!regex.test(content) && content !== "") {
    return true;
  }
  return false;
}
