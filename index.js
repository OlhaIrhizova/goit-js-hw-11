import{S as l,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();new l(".gallery a");function u(o){return o.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src = "${e.webformatURL}"
            alt = "${e.tags}"
            loading = "lazy"
            width = "360"
            />
        </a>

        <div class="info">
                    <p class="info-item"><b>Likes ${e.likes}</b></p>
                    <p class="info-item"><b>Views ${e.views}</b></p>
                    <p class="info-item"><b>Comments ${e.comments}</b></p>
                    <p class="info-item"><b>Downloads ${e.downloads}</b></p>
                </div>

      </li> `).join("")}const d=()=>{const o=document.querySelector(".loader");o.style.display="block"},f=()=>{const o=document.querySelector(".loader");o.style.display="none"},m="47417442-8de2b86208b2757b72fdcd518";function h(o){const e=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${e}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>t.hits).catch(t=>(console.log(t),[]))}const y=document.querySelector(".search-form");document.querySelector(".search-button");const p=document.querySelector(".search-input"),a=document.querySelector(".gallery");function g(o){a.innerHTML="",a.innerHTML=u(o),lightbox.refresh()}y.addEventListener("submit",b);function b(o){o.preventDefault();const e=p.value.trim();if(!e){c.error({title:"Error",message:"Please enter a search term."});return}d(),a.innerHTML="",h(e).then(t=>{t.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(t)}).catch(t=>{console.error(t)}).finally(()=>{f()})}
//# sourceMappingURL=index.js.map
