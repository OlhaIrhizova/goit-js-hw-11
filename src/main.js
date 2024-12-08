import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './js/pixabay-api';
import { createGallery ,renderGallery, showLoader, hideLoader } from './js/render-functions';


const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-button");
const input = document.querySelector(".search-input");



searchForm.addEventListener("submit", hendlerSearch);

function hendlerSearch(event) {
    event.preventDefault();
   
    const searchQuery = input.value.trim();
    if (!searchQuery) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term.',
        });
        return;
    }

    showLoader();
    

    fetchImages(searchQuery)
        .then(images => {
            if (images.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                renderGallery(images);
            }
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            hideLoader(); 
        });


}
