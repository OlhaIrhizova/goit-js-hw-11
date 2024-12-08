import{S as l,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function i(s){return s.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src = "${e.webformatURL}"
            data-source = "${e.largeImageURL}"
            alt="${e.tags}"
            width = "360"
            />
        </a>

        <div class="image-stats">
                    <span class="stats">Likes: ${e.likes}</span>
                    <span class="stats">Views: ${e.views}</span>
                    <span class="stats">Comments: ${e.comments}</span>
                    <span class="stats">Downloads: ${e.downloads}</span>
                </div>

      </li> `).join("")}function u(s){const e=document.querySelector(".gallery");e.innerHTML=i(s),new l(".gallery a").refresh()}const d=()=>{const s=document.querySelector(".loader");s.style.display="block"},f=()=>{const s=document.querySelector(".loader");s.style.display="none"},h="47417442-8de2b86208b2757b72fdcd518";function m(s){const e=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${e}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>r.hits).catch(r=>(console.log(r),[]))}const y=document.querySelector(".search-form");document.querySelector(".search-button");const p=document.querySelector(".search-input");y.addEventListener("submit",g);function g(s){s.preventDefault();const e=p.value.trim();if(!e){c.error({title:"Error",message:"Please enter a search term."});return}d(),m(e).then(r=>{r.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):u(r)}).catch(r=>{console.error(r)}).finally(()=>{f()})}
//# sourceMappingURL=index.js.map
