const toggleBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const form = document.querySelector('form');
const urlInput = document.querySelector('input[type="url"]');
const alertMsg = document.querySelector('.alert');
const urlList = document.querySelector('.url-list');

let urlCollection = JSON.parse(localStorage.getItem('urlCollection')) || [];

///////////////////////////////
// Functions //
///////////////////////////////

const fetchData = () => {
  const enteredUrl = urlInput.value;

  //If the input is empty...
  if(!enteredUrl.length){
    urlInput.classList.add('invalid');
    alertMsg.classList.add('show');
    return;
  }else{
    urlInput.classList.remove('invalid');
    alertMsg.classList.remove('show');
  }

  fetch(`https://api.shrtco.de/v2/shorten?url=${enteredUrl}`)
    .then((res) => res.json())
    .then((data) => {
        if(data.ok){
            urlCollection.unshift({url: enteredUrl, shortenUrl: data.result.short_link});
            localStorage.setItem('urlCollection', JSON.stringify(urlCollection));
            console.log(urlCollection); //testing
            displayUrlList({url: enteredUrl, shortenUrl: data.result.short_link});
        }else{
            throw new Error('Invalid URL.')
        }
    })
    .catch((err)=>console.log(err));
};

//Update UI
const displayUrlList = (urlData) =>{
    let html; 
    const sliceStr = (str) => str.length > 50 ? str.slice(0, 47).padEnd(50, '.'): str;
        
    if(Array.isArray(urlData)){
        html = urlData.map(urlItem=> {
            return `
              <div class="url-item">
                <div class="url">
                <p>${sliceStr(urlItem.url)}</p>
              </div>
              <div class="shorten-url">
                <a target="_blank" href="https://${urlItem.shortenUrl}">${urlItem.shortenUrl}</a>
              </div>
              <button class="btn-secondary btn-copy">Copy</button>
            </div>
            `
        }).join('');
    }else{
        html = `
          <div class="url-item">
            <div class="url">
              <p>${sliceStr(urlData.url)}</p>
            </div>
            <div class="shorten-url">
              <a target="_blank" href="https://${urlData.shortenUrl}">${urlData.shortenUrl}</a>
            </div>
            <button class="btn-secondary btn-copy">Copy</button>
          </div>
        `
    }
    urlList.insertAdjacentHTML('afterbegin', html);
}

///////////////////////////////
// Event Handler //
///////////////////////////////

// show & hide nav-menu
const handleToggleNav = () => {
  navMenu.classList.toggle('show');
};

const handleShorten = (e) => {
  e.preventDefault();
  fetchData();
  e.currentTarget.reset();
};

const handleCopy = (e) =>{
  if(!e.target.matches('button')) return;
  const text = e.target.previousElementSibling.querySelector('a').textContent;
  navigator.clipboard.writeText(text);

  e.target.textContent = 'Copied!';
  e.target.classList.add('clicked');

  //timer
  setTimeout(()=>{
      e.target.textContent = 'Copy!';
      e.target.classList.remove('clicked');
  }, 2000)
}   

///////////////////////////////
// Event Listener //
///////////////////////////////

window.onload = () => displayUrlList(urlCollection);

toggleBtn.addEventListener('click', handleToggleNav);

form.addEventListener('submit', handleShorten);

urlList.addEventListener('click', handleCopy)
