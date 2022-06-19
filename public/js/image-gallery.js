;(() => {
  'use strict';

  class ImageGallery {
    constructor() {
      this.init();
    };

    init() {
      this.toggleMainImageByClickOnThumbnail();
    };

    getImageGalleryElements() {
      return {
        mainImage: document.getElementById('main-image'),
        thumbnails: document.getElementsByClassName('thumbnail')
      };
    };

    toggleMainImageByClickOnThumbnail() {
      const { mainImage, thumbnails } = this.getImageGalleryElements();
      
      for (let thumbnail of thumbnails) {
        thumbnail.addEventListener('click', () => {
          for (let thumbnail of thumbnails) {
            thumbnail.classList.remove('active');
          }

          thumbnail.classList.add('active');
          mainImage.setAttribute('src', thumbnail.childNodes[1].src);
        });
      }
    }
  };

  new ImageGallery();
})();