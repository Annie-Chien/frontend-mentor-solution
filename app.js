let data;

//==================================//
//=========== initialize ===========//
//==================================//
const setHourForm = (totalHour) => {
  return totalHour > 1 ? 'hrs': 'hr';
}

const initRender = async () => {
  //fetch & store data
  const res = await fetch('./data.json');
  data = await res.json();

  const html = data
    .map((item, index) => {
      //deconstructuring
      const { title, timeframes } = item;
      //convert title string (e.g.: "Self Care") --to--> lowercased string connected by hyphen (e.g.: "seld-care")
      const editedTitle =
        title.split(' ').length > 1
          ? title.toLowerCase().split(' ').join('-')
          : title.toLowerCase();

      const cardStyle = `"background-color: var(--color-${editedTitle}); background-image: url('../images/icon-${editedTitle}.svg')";`;

      return `
          <div class="activity-card" style=${cardStyle}>
            <div class="activity-card__content">
              <h3 class="activity-card__title">${title}</h3>
              <button class="btn btn-detail">
                <img src="./images/icon-ellipsis.svg" alt="ellipsis icon" />
              </button>
              <p class="activity-card__time"><span id="current-time">${timeframes.daily.current}${setHourForm(timeframes.daily.current)}</span></p>
              <p class="activity-card__last-time"><span id="time-label">Yesterday</span> - <span id="previous-time">${timeframes.daily.previous}${setHourForm(timeframes.daily.previous)}</span></p>
            </div>
          </div>
        `;
    })
    .join('');

  document.querySelector('.container').insertAdjacentHTML('beforeend', html);
};

initRender();

//===================================================//
//==== update UI: click the time-selected button ====//
//===================================================//

const updateTimeLabel = (timeSelected) => {
  switch (timeSelected) {
    case 'daily':
      return 'Yesterday';
    case 'weekly':
      return 'Last week';
    case 'monthly':
      return 'Last month';
    default:
      return 'Yesterday';
  }
};

const updateUI = (timeSelected) => {
  const timeframes = data.map((d) => d.timeframes);
  const currentTime = document.querySelectorAll('#current-time');
  const previousTime = document.querySelectorAll('#previous-time');
  const timeLabel = document.querySelectorAll('#time-label');

  
  currentTime.forEach((item, index) => {
    item.textContent = timeframes[index][timeSelected].current + setHourForm(timeframes[index][timeSelected].current);
  });
  previousTime.forEach((item, index) => {
    item.textContent = timeframes[index][timeSelected].previous + setHourForm(timeframes[index][timeSelected].previous);
  });
  timeLabel.forEach(
    (item) => (item.textContent = updateTimeLabel(timeSelected))
  );
};

setBtnActive = (btn) => {
  document
    .querySelectorAll('.btn-select')
    .forEach((btn) => btn.classList.remove('active'));
  btn.classList.add('active');
};

const handleClick = (e) => {
  if (!e.target.matches('.btn-select')) return;

  setBtnActive(e.target);

  updateUI(e.target.textContent.toLowerCase());
};

//Event Listeners
document
  .querySelector('.time-selection')
  .addEventListener('click', handleClick);
