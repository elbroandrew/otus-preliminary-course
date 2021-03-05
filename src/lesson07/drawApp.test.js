import { drawApp, isNotEmpty } from "./drawApp.js";
import * as showButtonModule from "./showHideButton.js";
import * as addItemModule from "./addItem.js";
import { initListeners } from "./initListeners.js";

document.body.innerHTML = `
<div id="app">
  <input />
  <button>add</button>
  <div>
    <p>test 1</p>
    <p>test 2</p>
    <p>test 3</p>
  </div>
</div>
`;

const button = document.body.querySelector("button");
const div = document.body.querySelector("div");
const input = document.body.querySelector("input");
const app = document.querySelector("#app");
initListeners(app);

describe("drawApp returns div", () => {
  it("returns true if div exists", () => {
    expect(drawApp(app)).not.toBeNull();
  });
});

describe("this suit tests event listener", () => {
  it("test showHideButton", () => {
    expect(showButtonModule.showHideButton).toBeInstanceOf(Function);
  });

  it("checks event listener", () => {
    jest.spyOn(showButtonModule, "showHideButton");
    button.click();
    expect(showButtonModule.showHideButton).toHaveBeenCalled();
  });
  it("checks event listener", () => {
    jest.spyOn(addItemModule, "addItem");
    button.click();
    expect(addItemModule.addItem).toHaveBeenCalled();
  });
});

describe("showHideButton", () => {
  it("returns true if button is hidden for input value '' ", () => {
    input.value = "";
    const { value } = input;
    showButtonModule.showHideButton(button, value);
    expect(button.hidden).toBeTruthy();
  });

  it("returns false if button is not hidden for value 'abcd' ", () => {
    input.value = "abcd";
    const { value } = input;
    showButtonModule.showHideButton(button, value);
    expect(button.hidden).toBeFalsy();
  });
});

describe("addItem", () => {
  it("adds new p element and returns 'milk'", () => {
    input.value = "milk";
    addItemModule.addItem(input, div);
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
    addItemModule.addItem(input, div);
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
