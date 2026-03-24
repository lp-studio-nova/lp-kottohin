document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var icon = this.querySelector('.faq-icon');
      if (item.classList.contains('is-open')) {
        item.classList.remove('is-open');
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        item.classList.add('is-open');
        answer.style.display = 'block';
        icon.textContent = '−';
      }
    });
  });
});
