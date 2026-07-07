function renderCards(containerEl, items, cardTemplateFn, emptyMessage) {
  if (!items.length) {
    containerEl.innerHTML = `<p class="empty-state">${emptyMessage}</p>`;
    return;
  }
  containerEl.innerHTML = items.map(cardTemplateFn).join("");
}
