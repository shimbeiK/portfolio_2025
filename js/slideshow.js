const scrollContainer = document.getElementById('scrollContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 最初のworks-box-frontの幅（余白も含む）を取得
const item = document.querySelector('.works-box-front');
const itemStyle = getComputedStyle(item);
const itemWidth = item.offsetWidth + parseInt(itemStyle.marginRight);

// 左にスクロール
prevBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -itemWidth,
    behavior: 'smooth'
  });
});