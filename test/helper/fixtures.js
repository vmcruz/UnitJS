const __FIXTURES__ = {
  forLength: () => {
    document.body.innerHTML = `
        <div class="test-div"></div>
        <div id="test-id-div">
            <ul id="test-ul">
                <li class="test-li">Test item 1</li>
                <li>Test item 2</li>
                <li class="test-li">Test item 3</li>
                <li class="test-li">Test item 4</li>
            </ul>
        </div>
        <div class="test-div"></div>
        <div class="test-div"></div>
    `;
  },
};
