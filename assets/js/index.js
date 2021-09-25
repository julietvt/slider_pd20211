class Slide {
  constructor(src, info) {
    this._src = src;
    this._info = info;
  }
  get src() {
    return this._src;
  }
  get info() {
    return this._info;
  }
}

class Slider {
  constructor(slides, currentIndex) {
    this._slides = slides;
    this._currentIndex = currentIndex;
  }
  set currentIndex(value) {
    if (value > 0 && value < this._slides.length) {
      this._currentIndex = value;
    }
  }
  get currentIndex() {
    return this._currentIndex;
  }
  get prevIndex() {
    return (this._currentIndex - 1 + this._slides.length) % this._slides.length;
  }
  get nextIndex() {
    return (this._currentIndex + 1) % this._slides.length;
  }
  get currentSlide() {
    return this._slides[this._currentIndex];
  }
  get prevSlide() {
    return this._slides[this.prevIndex];
  }
  get nextSlide() {
    return this._slides[this.nextIndex];
  }
}

const carousel = new Slider([
  new Slide('', ''),
  new Slide('', ''),
  new Slide('', ''),
  new Slide('', ''),
  new Slide('', ''),
  new Slide('', ''),
  new Slide('', ''),
]);

const [prevButtonElem, nextButtonElem] = document.querySelectorAll('.btn');

prevButtonElem.addEventListener('click', renderSlider());
nextButtonElem.addEventListener('click', renderSlider());

function renderSlider(direction) {
  const prevImage = document.querySelector('.prevImage');
  const currentImage = document.querySelector('.currentImage');
  const nextImage = document.querySelector('.nextImage');
  const prevSlide = carousel.prevSlide;
  const currentSlide = carousel.currentSlide;
  const nextSlide = carousel.nextSlide;
  prevImage.setAttribute('src', prevSlide.src);
  currentImage.setAttribute('src', currentSlide.src);
  nextImage.setAttribute('src', nextSlide.src);
}

function working(direction = 'next') {
  carousel.currentIndex =
    carousel[direction == 'next' ? 'nextIndex' : 'prevIndex'];
  renderSlider(direction);
}

renderSlider();
