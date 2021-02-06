import { drawApp, showHideButton, addItem, isNotEmpty } from "./drawApp";

const div = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");
const p = document.createElement("p");
div.appendChild(input);
div.appendChild(button);
div.appendChild(p);
div.appendChild(p);
div.appendChild(p);

describe("drawApp returns div", () => {
  it("returns true if div exists", () => {
    expect(drawApp(div)).not.toBeNull();
  });
});

describe("showHideButton", () => {
  it("returns true if button is hidden for input value '' ", () => {
    input.value = "";
    const {value} = input;
    showHideButton(button, value);
    expect(button.hidden).toBeTruthy();
  });

  it("returns false if button is not hidden for value 'abcd' ", () => {
    input.value = "abcd";
    const {value} = input;
    showHideButton(button, value);
    expect(button.hidden).toBeFalsy();
  });
});

describe("addItem", () => {
  it("adds new p element and returns 'milk'", () => {
    input.value = "milk";
    addItem(input, div);
    const pNodesList = div.querySelectorAll("p");
    const pp = pNodesList[3];
    expect(pp.textContent).toEqual("milk");
  });
});

describe("addItem", () => {
  it("first element of NodeList is 'test 2', last 'some text' ", () => {
    input.value = "some text";
    const div2 = div.querySelector("div");
    div2.innerHTML = `
    <p>test 1</p>
    <p>test 2</p>
    <p>test 3</p>
    <p>test 4</p>
    <p>test 5</p>
    `;
    addItem(input, div);
    const pList = div.querySelectorAll("p");

    expect(pList[0].textContent).toEqual("test 2");
    expect(pList[4].textContent).toEqual("some text");
  });
});

describe("isNotEmpty", () => {
  it("returns true for 'abcde' ", () => {
    const content = "abcde";
    expect(isNotEmpty(content)).toBeTruthy();
  });

  it("returns false for empty line '' ", () => {
    const content = "";
    expect(isNotEmpty(content)).toBeFalsy();
  });

  it("returns false for whitespace line ", () => {
    const content = "   ";
    expect(isNotEmpty(content)).toBeFalsy();
  });
});
