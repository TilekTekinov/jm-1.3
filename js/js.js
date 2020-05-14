function readMore(elem) {
  var text = elem.previousElementSibling;
  var textStyle = getComputedStyle(text);
  var textH = textStyle.height;

  if (textStyle.overflow === 'hidden') {
    text.style.overflow = 'visible';
    text.style.height = 'auto';
    elem.classList.add('article__read-more--full')
    elem.classList.remove('article__read-more')
  } else if (textStyle.overflow === 'visible') {
    text.removeAttribute('style');
    elem.classList.add('article__read-more')
    elem.classList.remove('article__read-more--full')
  }
}
