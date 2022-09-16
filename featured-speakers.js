/* eslint-disable camelcase */
function menuOpen() {
  document.getElementById('overlay').style.display = 'flex';
}

function menuClose() {
  document.getElementById('overlay').style.display = 'none';
}
menuOpen();
menuClose();
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const onboardSpeakers = [
  {
    feature_img: './images/speaker_01.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Ciceros 1st-century BC text De Finibus Bonorum et Malorum.',
  },
  {
    feature_img: './images/speaker_02.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Ciceros 1st-century BC text De Finibus Bonorum et Malorum.',
  },
  {
    feature_img: './images/speaker_03.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Ciceros 1st-century BC text De Finibus Bonorum et Malorum.',
  },
  {
    feature_img: './images/speaker_04.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Ciceros 1st-century BC text De Finibus Bonorum et Malorum.',
  },
  {
    feature_img: './images/speaker_05.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Ciceros 1st-century BC text De Finibus Bonorum et Malorum.',
  },
  {
    feature_img: './images/speaker_06.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Ciceros 1st-century BC text De Finibus Bonorum et Malorum.',
  },
];
const feature_speakers = document.getElementById('feature');

const createElementAndAppendToParent = (newElement, className, id, parent, HTMLtext) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${HTMLtext}`;
  parent.appendChild(element);
  return element;
};

// eslint-disable-next-line no-undef
const speaker_heading = createElementAndAppendToParent('h2', 'featured_speakers', 'featured-speaker', feature_speakers, 'Featured Speakers');
const featured_speakers = createElementAndAppendToParent('div', 'speakers', 'speakers', feature_speakers, '');

onboardSpeakers.forEach((i) => {
  const speakers = createElementAndAppendToParent('div', 'main-speakers', 'speaker-1', featured_speakers, ` <img src='${onboardSpeakers[onboardSpeakers.indexOf(i)].feature_img}' alt="" class="feature_img">`);
  const specific_speakers = createElementAndAppendToParent('div', 'name_speakers', 'name_speakers', speakers, '');
  const speaker_names = createElementAndAppendToParent('h5', 'name', 'name', specific_speakers, '');
  const official_name = createElementAndAppendToParent('strong', 'official_name', 'official_name', speaker_names, `${onboardSpeakers[onboardSpeakers.indexOf(i)].official_name}`);
  const speaker_title = createElementAndAppendToParent('p', 'speaker_title', 'speaker_title', specific_speakers, '');
  const title = createElementAndAppendToParent('small', 'title', 'title', speaker_title, `${onboardSpeakers[onboardSpeakers.indexOf(i)].speaker_title}`);
  const speaker_description = createElementAndAppendToParent('p', 'description', 'description', specific_speakers, '');
  const description = createElementAndAppendToParent('span', 'description', 'description', speaker_description, `${onboardSpeakers[onboardSpeakers.indexOf(i)].description}`);
});
// const button = createElementAndAppendToParent('div', 'btn-speaker', 'btn', feature_speakers, '');
// const button_span = createElementAndAppendToParent('span', 'button', 'button', button, `${button}`); 
