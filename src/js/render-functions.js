import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


   export function createGallery(array) {
    return array.map(item =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${item.largeImageURL}">
          <img
            class="gallery-image"
            src = "${item.webformatURL}"
            data-source = "${item.largeImageURL}"
            alt="${item.tags}"
            width = "360"
            />
        </a>

        <div class="image-stats">
                    <span class="stats">Likes: ${item.likes}</span>
                    <span class="stats">Views: ${item.views}</span>
                    <span class="stats">Comments: ${item.comments}</span>
                    <span class="stats">Downloads: ${item.downloads}</span>
                </div>

      </li> `
    ).join('');

}
export function renderGallery(images) {
const gallery = document.querySelector('.gallery'); 
  gallery.innerHTML = createGallery(images);
  

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}




export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

   export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};
    
