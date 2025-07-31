export const FIXTURES = {
  common: () => {
    document.body.innerHTML = `
      <div class="test-div" style="color: red">Test div</div>
      <div id="test-id-div">
          <ul id="test-ul">
              <li data-item='1' class="test-li" disabled="disabled">Test item 1</li>
              <li data-item='2' class="test-li">Test item 2</li>
              <li data-item='3' class="test-li">Test item 3</li>
              <li data-item='4' class="test-li">Test item 4</li>
          </ul>
      </div>
      <div class="test-div"></div>
      <div class="test-div"></div>
    `;
  },
  innerHTML: () => {
    document.body.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('test-div');
    div.innerHTML = '<p>Test inner HTML in UnitJS</p>';
    document.body.appendChild(div);
  },
  xpend: () => {
    // append & prepend tests
    document.body.innerHTML = `
      <div class="test-div"><p>Test [ap|pre]pend in UnitJS</p></div>
    `;
  },
  value: () => {
    document.body.innerHTML = `
      <input type="text" class="test-input" value="This is a test value" />
      <input type="text" class="test-input" value="This is a second test value" />
    `;
  },
};
