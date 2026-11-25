import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const stops = [
  {id:'home', title:'The house on stilts', type:'LAND & HOME', kicker:'A PLACE TO GATHER', icon:'⌂', copy:'At the heart of the model, a raised home stands on sturdy posts beneath a thick thatched roof. The open space below lifts the living area off the ground and makes room for air to move.', note:'Kalinga communities are diverse. House forms and building materials vary from place to place.'},
  {id:'river', title:'A river through the valley', type:'WATER & PLACE', kicker:'FOLLOW THE WATER', icon:'≈', copy:'The bright stream winds between the slopes and homes. In real mountain watersheds, water links people, farms, forests, and communities downstream.', note:'The Chico River and its tributaries flow through Kalinga. This model river is a handmade interpretation.'},
  {id:'terraces', title:'Fields shaped by slope', type:'LAND & FOOD', kicker:'CULTIVATING THE HILLSIDE', icon:'⌁', copy:'The model’s green steps follow the mountain contours. In parts of Kalinga, wet rice terraces are one way people have adapted farming to sloping ground.', note:'Farming varies across Kalinga. Rice, sweet potato, corn, beans, taro, and other crops are part of the region’s agricultural story.'},
  {id:'people', title:'People make a place', type:'PEOPLE & KNOWLEDGE', kicker:'A LIVING CULTURE', icon:'✳', copy:'These small clay figures bring the landscape into focus. They invite us to think about the people whose knowledge, work, and relationships make a village—not just the scenery around it.', note:'Kalinga culture is living and diverse. Learn from Kalinga people and community voices for a fuller understanding.'}
];
stops[0].title = 'Indigenous Arts & Crafts (Mambabatok)';
stops[0].type = 'MAMBABATOK';
stops[0].kicker = 'INDIGENOUS ARTS & CRAFTS';
stops[0].copy = `The mambabatok (magbabatok) is an esteemed Kalinga elder and skilled practitioner of batok, a 1000 year old body piercing art form which originated in the Cordillera mountain region of the northern Philippines. Using a naturally sourced ‘gisi’ (citrus thorn) needle attached to a bamboo pole, a wooden pat-ik (tapping hammer) and merak (pine soot) ink, images of nature including centipedes, eagles, pythons and even rice paddies are pierced into the clients body. Warriors utilise batok to demonstrate bravery and honour, women use it to represent their aesthetic appeal and age and people have it done to spiritually guard against Kabuniyan. Because of it’s sacred status, batok skills are only ever transmitted within a family. It has been successfully maintained and has even attained global fame due to Apo Whang-Od Oggay of Buscalan, who trained her daughters in batok so that this valuable cultural practice could be continued.`;
stops[0].note = '';
stops[1].title = 'Customary Laws / Governance & Ritual Performance (Bodong Peace Pacts)';
stops[1].type = 'BODONG';
stops[1].kicker = 'CUSTOMARY LAWS & GOVERNANCE';
stops[1].copy = `The Bodong is Kalinga’s method of native governance and peace-keeping. It is a ‘peace treaty’ which is established and signed by two villages or sub-tribes in order to avoid conflict, define borders (known as bugis) and guarantee freedom of movement and collective security. Issues are resolved using the Bodong, alongside the community and a body of elders (Pangats), who uphold it. Peace-keepers (Nangdon si Bodong) also assist in its enforcement. Rather than re-vengeance, methods of conciliation, reparation and community decision making are utilised. Community members participate in vibrant ceremonies to sign and re-sign each Bodong. These involve percussive gong music (gangsa), courtship and solidarity dances (tadok and salidsid), ceremonial songs (ullalim) and communal dining. Legal arrangements are therefore transformed into powerful, personal and communal experiences.`;
stops[1].note = '';
stops[2].title = 'Livelihood & Technology (Rice Terraces & Crafts)';
stops[2].type = 'LIVELIHOOD & TECHNOLOGY';
stops[2].kicker = 'RICE TERRACES & CRAFTS';
stops[2].copy = `Kalinga people are centred around ecological mountain construction and independent production. A key component is the construction of stoned payaw rice terraces which follow the steep incline of the Cordillera. These are watered using complex hillside ‘mother-child’ hydraulic river diversion networks. Within these terraces, farmers grow native rice, coffee, and root vegetables and practice chemical free agroforestry. Handicrafts also form a large part of the Kalinga culture. These include inabel backstrap looms to weave coloured textiles (typically red, black and yellow) into colourful geometrical designs; bamboo weaving; woodwork; and foruy (or binayon) high wooden and thatched houses which are specially designed to endure mountain conditions.`;
stops[2].note = '';
stops[3].title = 'Indigenous Psychology (Kapwa & Core Values)';
stops[3].type = 'KAPWA & CORE VALUES';
stops[3].kicker = 'INDIGENOUS PSYCHOLOGY';
stops[3].copy = `Filipino's highly value the concept of Kapwa, which emphasises an intrinsic commonality and unity between people. Kalinga people apply ‘Bain’, ‘Paniyaw’ and ‘Ngilin’ to maintain group cohesion and ensure members behave ethically and care for the environment. Bain promotes a culture of high personal integrity and encourages compassion so that people do not cause disrepute or damage to their family, local community and those with whom they have agreements. Furthermore, Paniyaw is used to express respect and ethical duty towards Kabuniyan (God), ancestral spirits and older people. Together with Ngilin, which comprises of spiritual beliefs and codes of behaviour that dictate equitable distribution of water, communal farming efforts (ammoyo) and environmental appreciation, these key values unite the Kalinga group.`;
stops[3].note = '';
stops[0].references = [
  {title:'National Museum of the Philippines — Tattooing in Northern Philippines', url:'https://www.nationalmuseum.gov.ph/2022/03/23/body-modification-tattooing-in-northern-philippines/'},
  {title:'Philippine Information Agency — New generation continues batok', url:'https://pia.gov.ph/news/kultura-ng-pagbabatok-sa-cordillera-ipinagpapatuloy-ng-bagong-henerasyon/'}
];
stops[1].references = [
  {title:'Philippine News Agency — Kalinga tribes restore the bodong', url:'https://pna.gov.ph/article/kalinga-tribes-restore-bodong-end-decades-long-conflict'},
  {title:'Philippine Statistics Authority — Kalinga countryside profile', url:'https://rssocar.psa.gov.ph/system/files/publication/2025%20Countryside%20in%20Figures-%20Kalinga_0.pdf'}
];
stops[2].references = [
  {title:'National Commission for Culture and the Arts — Kalinga profile', url:'https://ncca.gov.ph/wp-content/uploads/2018/10/GLIMPSES-Peoples-of-the-Philippines.pdf'},
  {title:'Department of Agriculture — Kalinga rice terraces farmers', url:'https://prdp.da.gov.ph/krtfacs-heirloom-rice-business-seen-to-flourish-with-da-prdp-support/'},
  {title:'Philippine Information Agency — Kalinga Weaving Center', url:'https://pia.gov.ph/news/kalinga-weaving-center-inaugurated-in-lubuagan/'}
];
stops[3].references = [
  {title:'University of the Philippines — Kapwa and Filipino relational communication', url:'https://cids.up.edu.ph/wp-content/uploads/2024/10/Understanding-Pakikipagkapwa-Through-Analytics-Exploring-Filipino-Relational-Communication-in-Online-Spaces.pdf'},
  {title:'The Cordillera Review — Kalinga cultural values', url:'https://thecordillerareview.upb.edu.ph/wp-content/uploads/2025/04/7-Saboy-draft3.3.pdf'},
  {title:'Paniyaw, Ngilin and Ba-in — community research thesis', url:'https://emu.contentdm.oclc.org/digital/api/collection/p16154coll9/id/15712/download'}
];
stops[1].title = 'Customary Laws / Governance & Ritual Performance (Bodong Peace Pacts)';
stops[1].type = 'BODONG';
stops[1].kicker = 'CUSTOMARY LAWS & GOVERNANCE';
stops[1].copy = `The Bodong is Kalinga’s method of native governance and peace-keeping. It is a ‘peace treaty’ which is established and signed by two villages or sub-tribes in order to avoid conflict, define borders (known as bugis) and guarantee freedom of movement and collective security. Issues are resolved using the Bodong, alongside the community and a body of elders (Pangats), who uphold it. Peace-keepers (Nangdon si Bodong) also assist in its enforcement. Rather than re-vengeance, methods of conciliation, reparation and community decision making are utilised. Community members participate in vibrant ceremonies to sign and re-sign each Bodong. These involve percussive gong music (gangsa), courtship and solidarity dances (tadok and salidsid), ceremonial songs (ullalim) and communal dining. Legal arrangements are therefore transformed into powerful, personal and communal experiences.`;
stops[1].note = '';
let current = 0;
const $ = (id) => document.getElementById(id);
const topicStorageKey = 'kalinga-tribe-people-topics';
let customTopics = {};
try { customTopics = JSON.parse(localStorage.getItem(topicStorageKey) || '{}') || {}; } catch {}
function selectStop(index) {
  current = (index + stops.length) % stops.length;
  const stop = stops[current];
  if (scene && !scene.userData.layoutAdjusted) {
    scene.userData.layoutAdjusted = true;
    scene.updateMatrixWorld(true);
    const position = new THREE.Vector3();
    scene.traverse((object) => {
      if (!object.isMesh || !object.parent) return;
      if (object.userData.stop === 'home') {
        object.getWorldPosition(position);
        position.x -= 2.5;
        position.z -= 1.5;
        object.parent.worldToLocal(position);
        object.position.copy(position);
      }
    });
    scene.updateMatrixWorld(true);
  }
  const customTopic = current < 4 ? null : customTopics[stop.id];
  $('storyType').textContent = customTopic ? `PEOPLE SET ${String(current + 1).padStart(2, '0')}` : stop.type;
  $('storyTitle').textContent = customTopic?.title || stop.title;
  $('storyKicker').textContent = customTopic ? 'YOUR TOPIC' : stop.kicker;
  $('storyIcon').textContent = stop.icon;
  $('storyCopy').textContent = customTopic?.copy || stop.copy;
  const referenceList = $('storyReferences');
  referenceList.replaceChildren();
  if (stop.references?.length) {
    const heading = document.createElement('strong');
    heading.textContent = 'REFERENCES';
    referenceList.appendChild(heading);
    stop.references.forEach((reference) => {
      const link = document.createElement('a');
      link.href = reference.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = reference.title;
      referenceList.appendChild(link);
    });
  }
  const storyImage = $('storyImage');
  storyImage.hidden = current > 3;
  if (current === 0) {
    storyImage.src = 'asset/1001793378.jpg';
    storyImage.alt = 'A Kalinga mambabatok tattooing a seated client';
  } else if (current === 1) {
    storyImage.src = 'asset/1001793388.jpg';
    storyImage.alt = 'Kalinga village scene illustrating Bodong customary law';
  } else if (current === 2) {
    storyImage.src = 'asset/1001793382.jpg';
    storyImage.alt = 'Kalinga clay figure beside the model river and terraces';
  } else if (current === 3) {
    storyImage.src = 'asset/1001793383.jpg';
    storyImage.alt = 'Clay figures illustrating Kalinga core values and community';
  }
  $('storyNote').textContent = customTopic ? 'Your topic is saved for this people set.' : stop.note;
  $('storyNum').textContent = `${String(current + 1).padStart(2,'0')} / 04`;
  $('stageCount').textContent = `${String(current + 1).padStart(2,'0')} OF 04`;
  $('progressBar').style.width = `${(current + 1) * 25}%`;
  document.querySelectorAll('.landmark').forEach((button) => button.classList.toggle('active', button.dataset.stop === stop.id));
  scene?.traverse((object) => {
    if (!object.isMesh || !object.material?.emissive) return;
    let setIndex = null;
    let ancestor = object;
    while (ancestor) {
      if (Number.isInteger(ancestor.userData.topicSet)) {
        setIndex = ancestor.userData.topicSet;
        break;
      }
      ancestor = ancestor.parent;
    }
    const selected = object.userData.stop === 'people'
      ? setIndex === current
      : object.userData.stop === stop.id;
    object.material.emissive.set(selected ? '#98623e' : '#000000');
    object.material.emissiveIntensity = selected ? 0.32 : 0;
  });
}
function selectPeopleSet(index) {
  selectStop(index);
  const stop = stops[current];
  if (customTopics[stop.id]) return;
  $('storyType').textContent = `PEOPLE SET ${String(current + 1).padStart(2, '0')}`;
  if (index < 4 || customTopics[stop.id]) return;
  $('storyKicker').textContent = 'TOPIC TO COME';
  $('storyTitle').textContent = 'Topic not added yet';
  $('storyCopy').textContent = 'Send the topic and text for this set, and it will appear here when you select these people.';
}
$('prevStop').addEventListener('click', () => selectStop(current - 1));
$('nextStop').addEventListener('click', () => selectStop(current + 1));
document.querySelectorAll('.landmark').forEach((button) => button.addEventListener('click', () => selectStop(stops.findIndex((stop) => stop.id === button.dataset.stop))));
document.querySelectorAll('[data-jump]').forEach((button) => button.addEventListener('click', () => { selectStop(stops.findIndex((stop) => stop.id === button.dataset.jump)); $('diorama').scrollIntoView({behavior:'smooth'}); }));

const galleryPhotos = [
  1001793378, 1001793381, 1001793382, 1001793384,
  1001793386, 1001793389, 1001793390, 1001793393
].map((number, index) => ({
  src: `asset/${number}.jpg`,
  alt: `Handmade Kalinga diorama photograph ${String(index + 1).padStart(2, '0')}`
}));
const photoTrack = $('photoTrack');
const photoDots = $('photoDots');
let activePhoto = 0;
galleryPhotos.forEach((photo, index) => {
  const slide = document.createElement('figure');
  slide.className = 'photo-slide';
  slide.setAttribute('aria-label', `Photo ${index + 1} of ${galleryPhotos.length}`);
  const image = document.createElement('img');
  image.src = photo.src;
  image.alt = photo.alt;
  image.loading = index < 3 ? 'eager' : 'lazy';
  slide.appendChild(image);
  photoTrack.appendChild(slide);
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'photo-dot';
  dot.setAttribute('aria-label', `Show photo ${index + 1}`);
  dot.addEventListener('click', () => showPhoto(index));
  photoDots.appendChild(dot);
});
function showPhoto(index) {
  activePhoto = (index + galleryPhotos.length) % galleryPhotos.length;
  const slides = [...photoTrack.children];
  const slide = slides[activePhoto];
  const step = slide.offsetWidth + parseFloat(getComputedStyle(photoTrack).columnGap || '0');
  const offset = window.innerWidth <= 640
    ? activePhoto
    : Math.min(Math.max(activePhoto - 1, 0), Math.max(slides.length - 3, 0));
  photoTrack.style.transform = `translateX(${-offset * step}px)`;
  slides.forEach((item, i) => item.classList.toggle('is-active', i === activePhoto));
  [...photoDots.children].forEach((dot, i) => {
    dot.classList.toggle('is-active', i === activePhoto);
    if (i === activePhoto) dot.setAttribute('aria-current', 'true'); else dot.removeAttribute('aria-current');
  });
  $('photoCaption').textContent = `PHOTO JOURNAL · ${String(activePhoto + 1).padStart(2, '0')}`;
  $('photoCount').textContent = `${String(activePhoto + 1).padStart(2, '0')} / ${String(galleryPhotos.length).padStart(2, '0')}`;
}
$('photoPrev').addEventListener('click', () => showPhoto(activePhoto - 1));
$('photoNext').addEventListener('click', () => showPhoto(activePhoto + 1));
let galleryPointerX = null;
photoTrack.addEventListener('pointerdown', (event) => { galleryPointerX = event.clientX; photoTrack.setPointerCapture(event.pointerId); });
photoTrack.addEventListener('pointerup', (event) => {
  if (galleryPointerX === null) return;
  const delta = event.clientX - galleryPointerX;
  if (Math.abs(delta) > 45) showPhoto(activePhoto + (delta < 0 ? 1 : -1));
  galleryPointerX = null;
});
photoTrack.addEventListener('pointercancel', () => { galleryPointerX = null; });
window.addEventListener('resize', () => showPhoto(activePhoto));
showPhoto(0);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let galleryTimer = null;
  const carousel = $('photoCarousel');
  const stopGalleryMotion = () => { window.clearInterval(galleryTimer); galleryTimer = null; };
  const startGalleryMotion = () => { if (galleryTimer === null) galleryTimer = window.setInterval(() => showPhoto(activePhoto + 1), 5000); };
  carousel.addEventListener('mouseenter', stopGalleryMotion);
  carousel.addEventListener('mouseleave', startGalleryMotion);
  carousel.addEventListener('focusin', stopGalleryMotion);
  carousel.addEventListener('focusout', (event) => { if (!carousel.contains(event.relatedTarget) && !carousel.matches(':hover')) startGalleryMotion(); });
  startGalleryMotion();
}

window.addEventListener('load', () => {
  selectStop(current);
  setupDraggablePeople();
}, {once:true});

let scene, camera, renderer, controls, model, raycaster, pointer;

function setupDraggablePeople() {
  if (!model || !renderer || !raycaster || !camera) return;
  scene.updateMatrixWorld(true);
  const candidates = [];
  model.traverse((object) => {
    if (!object.isMesh) return;
    if (object.userData.stop === 'people' || /person|people|villager|farmer|figure/i.test(object.name)) {
      candidates.push({
        object,
        position: object.getWorldPosition(new THREE.Vector3()),
        quaternion: object.getWorldQuaternion(new THREE.Quaternion()),
        scale: object.getWorldScale(new THREE.Vector3())
      });
    }
  });

  const pending = new Set(candidates);
  const draggablePeople = [];
  while (pending.size) {
    const seed = pending.values().next().value;
    pending.delete(seed);
    const cluster = [seed];
    for (let index = 0; index < cluster.length; index++) {
      for (const candidate of [...pending]) {
        const dx = candidate.position.x - cluster[index].position.x;
        const dz = candidate.position.z - cluster[index].position.z;
        if (Math.hypot(dx, dz) < 0.38) {
          cluster.push(candidate);
          pending.delete(candidate);
        }
      }
    }
    const center = cluster.reduce((sum, item) => sum.add(item.position), new THREE.Vector3()).divideScalar(cluster.length);
    const localCenter = model.worldToLocal(center.clone());
    const person = new THREE.Group();
    person.name = 'draggable clay person';
    person.position.copy(localCenter);
    model.add(person);
    person.updateMatrixWorld(true);
    const inversePersonQuaternion = person.getWorldQuaternion(new THREE.Quaternion()).invert();
    const personWorldScale = person.getWorldScale(new THREE.Vector3());
    cluster.forEach((item) => {
      item.object.parent.remove(item.object);
      person.add(item.object);
      item.object.position.copy(person.worldToLocal(item.position.clone()));
      item.object.quaternion.copy(inversePersonQuaternion.clone().multiply(item.quaternion));
      item.object.scale.copy(item.scale.clone().divide(personWorldScale));
    });
    draggablePeople.push(person);
  }

  const savedPositionsKey = 'kalinga-tribe-diorama-people-near-house-individual-v2';
  let savedPositions = [];
  try {
    savedPositions = JSON.parse(localStorage.getItem(savedPositionsKey) || '[]');
  } catch {}
  const hasSavedPositions = Array.isArray(savedPositions) && savedPositions.length === draggablePeople.length && savedPositions.length > 0;
  if (hasSavedPositions) {
    draggablePeople.forEach((person, index) => {
      const saved = savedPositions[index];
      if (saved && [saved.x, saved.y, saved.z, saved.rotationY].every(Number.isFinite)) {
        person.position.set(saved.x, saved.y, saved.z);
        person.rotation.y = saved.rotationY;
      }
    });
  }
  if (draggablePeople.length >= 2 && !hasSavedPositions) {
    const houseCenter = new THREE.Vector3();
    let housePartCount = 0;
    model.traverse((object) => {
      if (!object.isMesh || object.userData.stop !== 'home') return;
      houseCenter.add(object.getWorldPosition(new THREE.Vector3()));
      housePartCount++;
    });
    if (housePartCount) houseCenter.divideScalar(housePartCount);
    const nearHouse = [...draggablePeople].sort((a, b) => {
      const distance = (person) => Math.hypot(person.position.x - houseCenter.x, person.position.z - houseCenter.z);
      return distance(a) - distance(b);
    }).slice(0, 2);
    nearHouse[0].rotation.y += Math.PI;
    try {
      localStorage.setItem(savedPositionsKey, JSON.stringify(draggablePeople.map((person) => ({
        x: person.position.x,
        y: person.position.y,
        z: person.position.z,
        rotationY: person.rotation.y
      }))));
    } catch {}
  }
  model.traverse((object) => {
    if (object.userData.stop && object.userData.stop !== 'people') {
      delete object.userData.stop;
      if (object.isMesh && object.material?.emissive) {
        object.material.emissive.set('#000000');
        object.material.emissiveIntensity = 0;
      }
    }
  });
  const peopleInOrder = [...draggablePeople].sort((a, b) => a.position.x - b.position.x);
  const setBoundaries = new Set();
  const xGaps = [];
  for (let index = 1; index < peopleInOrder.length; index++) {
    xGaps.push({boundary: index, gap: peopleInOrder[index].position.x - peopleInOrder[index - 1].position.x});
  }
  xGaps.sort((a, b) => b.gap - a.gap).slice(0, 3).forEach((gap) => setBoundaries.add(gap.boundary));
  let topicSet = 0;
  peopleInOrder.forEach((person, index) => {
    if (index > 0 && setBoundaries.has(index)) topicSet++;
    person.userData.topicSet = Math.min(topicSet, 3);
  });

  const stage = $('modelStage');
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hitPoint = new THREE.Vector3();
  const dragOffset = new THREE.Vector3();
  let draggedPerson = null;
  let dragMode = 'move';
  let lastPointerX = 0;
  let lastPointerY = 0;

  function setPointerFromEvent(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );
    raycaster.setFromCamera(pointer, camera);
  }

  stage.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 && event.button !== 2) return;
    setPointerFromEvent(event);
    const hit = raycaster.intersectObjects(draggablePeople, true)[0];
    if (!hit) return;
    draggedPerson = hit.object;
    while (draggedPerson.parent && !draggablePeople.includes(draggedPerson)) draggedPerson = draggedPerson.parent;
    if (Number.isInteger(draggedPerson.userData.topicSet)) selectPeopleSet(draggedPerson.userData.topicSet);
    controls.enabled = false;
    dragMode = event.button === 2 || event.altKey ? 'rotate' : event.shiftKey ? 'lift' : 'move';
    plane.constant = -draggedPerson.position.y;
    if (raycaster.ray.intersectPlane(plane, hitPoint)) dragOffset.copy(draggedPerson.position).sub(hitPoint);
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    stage.setPointerCapture(event.pointerId);
    stage.style.cursor = 'grabbing';
    event.preventDefault();
    event.stopPropagation();
  }, true);

  stage.addEventListener('pointermove', (event) => {
    if (!draggedPerson) return;
    event.preventDefault();
    event.stopPropagation();
    if (dragMode === 'rotate' || event.altKey) {
      draggedPerson.rotation.y += (event.clientX - lastPointerX) * 0.015;
      lastPointerX = event.clientX;
      return;
    }
    if (dragMode === 'lift' || event.shiftKey) {
      draggedPerson.position.y += (lastPointerY - event.clientY) * 0.018;
      plane.constant = -draggedPerson.position.y;
      lastPointerY = event.clientY;
      return;
    }
    setPointerFromEvent(event);
    if (raycaster.ray.intersectPlane(plane, hitPoint)) {
      draggedPerson.position.x = hitPoint.x + dragOffset.x;
      draggedPerson.position.z = hitPoint.z + dragOffset.z;
    }
    lastPointerY = event.clientY;
  }, true);
  stage.addEventListener('contextmenu', (event) => event.preventDefault());

  const finishDrag = (event) => {
    if (!draggedPerson) return;
    draggedPerson = null;
    controls.enabled = true;
    stage.style.cursor = '';
    try {
      localStorage.setItem(savedPositionsKey, JSON.stringify(draggablePeople.map((person) => ({
        x: person.position.x,
        y: person.position.y,
        z: person.position.z,
        rotationY: person.rotation.y
      }))));
    } catch {}
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    event.preventDefault();
    event.stopPropagation();
  };
  stage.addEventListener('pointerup', finishDrag, true);
  stage.addEventListener('pointercancel', finishDrag, true);
}
try {
  const stage = $('modelStage');
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#a52a24');
  scene.fog = new THREE.Fog('#a52a24', 15, 27);
  camera = new THREE.PerspectiveCamera(37, 1, 0.1, 100);
  camera.position.set(0, 8.4, 15);
  renderer = new THREE.WebGLRenderer({canvas:$('threeCanvas'), antialias:true, alpha:false});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.75, 0);
  controls.enableDamping = true;
  controls.dampingFactor = .065;
  controls.minDistance = 8;
  controls.maxDistance = 20;
  controls.minPolarAngle = .22;
  controls.maxPolarAngle = Math.PI * .48;
  controls.autoRotate = true;
  controls.autoRotateSpeed = .55;
  raycaster = new THREE.Raycaster();
  pointer = new THREE.Vector2();
  model = new THREE.Group();
  scene.add(model);
  scene.add(new THREE.HemisphereLight('#fff4dc','#66795c',2.0));
  const sun = new THREE.DirectionalLight('#ffe4ba',3.0);
  sun.position.set(-6,12,7); sun.castShadow=true; sun.shadow.mapSize.set(2048,2048); sun.shadow.camera.left=-12; sun.shadow.camera.right=12; sun.shadow.camera.top=12; sun.shadow.camera.bottom=-12; scene.add(sun);

  const mat = (color, roughness=.92) => new THREE.MeshStandardMaterial({color, roughness});
  const earth = mat('#9b7653'), earthSide=mat('#815c42'), grass=mat('#54734a'), grassLight=mat('#78945a'), grassDark=mat('#385b42'), water=mat('#63b6c3',.27), stone=mat('#77786b'), wood=mat('#8e5e3d'), thatch=mat('#a97b49'), dark=mat('#283b31'), clay=mat('#98553c'), wrap=mat('#bd493c'), cream=mat('#d5c6a1');
  function box(parent, name, material, size, position, feature) { const mesh=new THREE.Mesh(new THREE.BoxGeometry(...size), material); mesh.name=name; mesh.position.set(...position); mesh.castShadow=true; mesh.receiveShadow=true; if(feature)mesh.userData.stop=feature; parent.add(mesh); return mesh; }
  function sphere(parent,name,material,position,scale,feature) { const mesh=new THREE.Mesh(new THREE.SphereGeometry(1,16,12),material); mesh.name=name; mesh.position.set(...position); mesh.scale.set(...scale); mesh.castShadow=true; if(feature)mesh.userData.stop=feature; parent.add(mesh); return mesh; }
  // Open shoebox shell: brown board outside, green painted landscape inside.
  const plinth=box(model,'shoebox base',earthSide,[13,.62,7],[0,0,0]); plinth.castShadow=false;
  box(model,'diorama floor',mat('#a76d50'),[12.78,.12,6.78],[0,.36,0]);
  const wallBoard=mat('#b88b62');
  box(model,'front cutaway cardboard lip',wallBoard,[13,.24,.16],[0,.34,3.48]);
  box(model,'left shoebox wall',wallBoard,[.16,4.4,6.95],[-6.42,2.62,0]);
  box(model,'right shoebox wall',wallBoard,[.16,4.4,6.95],[6.42,2.62,0]);
  box(model,'back shoebox wall',wallBoard,[12.98,4.4,.16],[0,2.62,-3.48]);
  // A hand-painted paper mural on the inside back wall, like the photographed craft box.
  const mural=document.createElement('canvas'); mural.width=1200; mural.height=520;
  const paint=mural.getContext('2d');
  const sky=paint.createLinearGradient(0,0,0,520); sky.addColorStop(0,'#c8d0d2');sky.addColorStop(.58,'#d9d2c4');sky.addColorStop(1,'#66885e');paint.fillStyle=sky;paint.fillRect(0,0,1200,520);
  paint.fillStyle='#eee7d9'; paint.globalAlpha=.75;
  for(const [x,y,w,h] of [[120,90,240,75],[480,65,310,88],[870,105,250,70]]){paint.beginPath();paint.ellipse(x,y,w/2,h/2,0,0,Math.PI*2);paint.ellipse(x+45,y-13,w*.27,h*.34,0,0,Math.PI*2);paint.fill();}
  paint.globalAlpha=1;
  // Paint the valley as two steep green slopes meeting at the river, like the box photo.
  paint.fillStyle='#536f4d';paint.beginPath();paint.moveTo(0,205);paint.quadraticCurveTo(130,185,250,275);paint.quadraticCurveTo(420,360,600,462);paint.lineTo(600,520);paint.lineTo(0,520);paint.fill();
  paint.beginPath();paint.moveTo(600,462);paint.quadraticCurveTo(760,380,900,270);paint.quadraticCurveTo(1050,145,1200,112);paint.lineTo(1200,520);paint.lineTo(600,520);paint.fill();
  paint.fillStyle='#78935d';paint.beginPath();paint.moveTo(0,285);paint.quadraticCurveTo(175,250,340,345);paint.quadraticCurveTo(475,405,600,490);paint.lineTo(600,520);paint.lineTo(0,520);paint.fill();
  paint.beginPath();paint.moveTo(600,490);paint.quadraticCurveTo(760,405,920,315);paint.quadraticCurveTo(1080,200,1200,180);paint.lineTo(1200,520);paint.lineTo(600,520);paint.fill();
  paint.strokeStyle='#b39c70';paint.lineWidth=10;
  for(let i=0;i<6;i++){paint.beginPath();paint.moveTo(650+i*23,325+i*25);paint.quadraticCurveTo(890,300+i*23,1200,265+i*20);paint.stroke();}
  // Loose painted tree silhouettes echo the handmade backdrop in the reference.
  for(const [x,y,s] of [[90,285,1],[230,256,.75],[1030,260,.9],[1120,285,.7]]){paint.strokeStyle='#604c37';paint.lineWidth=12*s;paint.beginPath();paint.moveTo(x,y+85*s);paint.lineTo(x,y-15*s);paint.stroke();paint.fillStyle='#405d42';paint.beginPath();paint.ellipse(x,y-33*s,27*s,55*s,-.15,0,Math.PI*2);paint.fill();}
  const muralTexture=new THREE.CanvasTexture(mural); muralTexture.colorSpace=THREE.SRGBColorSpace;
  const muralMesh=new THREE.Mesh(new THREE.PlaneGeometry(12.82,4.24),new THREE.MeshBasicMaterial({map:muralTexture})); muralMesh.position.set(0,2.65,-3.385);model.add(muralMesh);
  // Soft, crumpled-paper cloud forms sit high in the box, echoing its handmade ceiling.
  const cloud=mat('#d2d5d0',.98);
  for(const [x,y,z,sx,sy,sz] of [[-5.2,4.38,-2.25,1.15,.3,.62],[-3.35,4.48,-2.55,1.3,.34,.55],[-1.15,4.4,-2.35,1.4,.29,.66],[1.2,4.47,-2.5,1.25,.32,.58],[3.45,4.38,-2.35,1.35,.3,.62],[5.3,4.46,-2.55,1.1,.34,.55]]){
    sphere(model,'clouded shoebox ceiling',cloud,[x,y,z],[sx,sy,sz]);
  }
  // Continuous rice terraces climb the right-hand hillside toward the back wall.
  for(let row=0;row<6;row++){
    const z=.2-row*.54, y=.65+row*.32, width=3.25;
    const x=3.3+row*.25;
    const terrace=box(model,'sloping green rice terrace',row%2?grass:grassLight,[width,.34,.76],[x,y,z],'terraces');
    terrace.rotation.set(.1,0,.1);
    const riser=box(model,'exposed earthen terrace riser',earthSide,[width,.2,.14],[x,y-.14,z+.35],'terraces');
    riser.rotation.set(.1,0,.1);
    for(let i=0;i<10;i++){
      const px=x-width/2+.22+i*(width-.44)/9;
      const shoot=sphere(model,'small terrace planting',grassDark,[px,y+.19,z+.04],[.045,.13,.04],'terraces');shoot.rotation.z=(i%2?-.2:.2);
    }
  }
  // Winding stream ribbon and rounded banks.
  const riverPoints=[new THREE.Vector3(.25,.49,3.15),new THREE.Vector3(.05,.49,2.35),new THREE.Vector3(-.15,.49,1.45),new THREE.Vector3(.3,.49,.55),new THREE.Vector3(.35,.49,-.35),new THREE.Vector3(.15,.49,-1.3),new THREE.Vector3(-.15,.49,-2.15),new THREE.Vector3(.15,.49,-3.15)];
  const riverCurve=new THREE.CatmullRomCurve3(riverPoints);
  const river=new THREE.Mesh(new THREE.TubeGeometry(riverCurve,100,.37,12,false),water); river.name='river'; river.userData.stop='river'; river.receiveShadow=true; model.add(river);
  for(let i=0;i<42;i++){
    const t=i/42, p=riverCurve.getPoint(t), side=i%2?1:-1;
    const pebble=sphere(model,'river stone',stone,[p.x+side*(.42+Math.random()*.13),.49,p.z],[.13+Math.random()*.12,.09,.12+Math.random()*.1],'river'); pebble.rotation.y=Math.random()*3;
  }
  // Raised timber home with a broad thatched gable roof.
  const hx=-2.65,hz=.72,hy=.58;
  for(const x of [-.9,.9]) for(const z of [-.62,.62]) box(model,'raised house post',wood,[.12,1.12,.12],[hx+x,hy+.56,hz+z],'home');
  box(model,'house floor',wood,[2.05,.16,1.55],[hx,1.22,hz],'home');
  box(model,'house wall',mat('#b99a6e'),[1.88,.9,1.38],[hx,1.72,hz],'home');
  box(model,'dark doorway',dark,[.48,.64,.045],[hx+.25,1.55,hz+.71],'home');
  for(const x of [-1.06,1.06]) for(const z of [-.76,.76]) box(model,'roof support',wood,[.1,.55,.1],[hx+x,2.35,hz+z],'home');
  const roofGeometry=new THREE.BufferGeometry();
  const roofVerts=new Float32Array([-1.3,0,-.95, 0,.78,-.95, 0,.78,.95, -1.3,0,-.95, 0,.78,.95, -1.3,0,.95, 1.3,0,-.95, 0,.78,-.95, 0,.78,.95, 1.3,0,-.95, 0,.78,.95, 1.3,0,.95]);
  roofGeometry.setAttribute('position',new THREE.BufferAttribute(roofVerts,3)); roofGeometry.computeVertexNormals();
  const roof=new THREE.Mesh(roofGeometry,new THREE.MeshStandardMaterial({color:'#956840',roughness:1,side:THREE.DoubleSide})); roof.name='thick thatched roof'; roof.position.set(hx,2.58,hz); roof.castShadow=true; roof.userData.stop='home'; model.add(roof);
  // Handmade clay figures: large oval heads, painted faces, cap-like hair,
  // red wraps and squat seated poses based on the supplied close-up photos.
  const eyePaint=mat('#f1dfc2'), pupilPaint=mat('#171513'), cheekPaint=mat('#a94437'), goldPaint=mat('#e4bd55'), tattooInk=mat('#30251f',.9);
  function limb(g,name,skin,a,b,r,feature){
    const start=new THREE.Vector3(...a), end=new THREE.Vector3(...b), delta=end.clone().sub(start);
    const mesh=new THREE.Mesh(new THREE.CapsuleGeometry(r,Math.max(.04,delta.length()-r*2),3,8),skin);
    mesh.position.copy(start.add(end).multiplyScalar(.5)); mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());
    mesh.name=name; mesh.castShadow=true; mesh.userData.stop=feature; g.add(mesh); return mesh;
  }
  function villager(x,z,feature='people',variant=0,pose='seated',baseY=.48,facing=0){
    const g=new THREE.Group(); g.position.set(x,baseY,z); g.userData.stop=feature; model.add(g);
    g.rotation.y=facing;
    const skin=mat(variant?'#a9684c':'#925039'), hair=mat('#252521'), wrapColor=mat(variant?'#c23d32':'#a9342e');
    const standing=pose==='standing'||pose==='tattooer'||pose==='spear';
    // Compact rounded torso and the bright wrapped lower body seen in the model.
    const torso=sphere(g,'rounded clay torso',skin,[0,standing?.62:.47,0],[.19,standing?.28:.23,.16],feature);
    const skirt=box(g,'red clay figure wrap',wrapColor,[.38,.2,.3],[0,.32,.015],feature);
    skirt.rotation.x=variant?.035:-.035;
    const sash=box(g,'yellow painted wrap detail',goldPaint,[.39,.045,.315],[0,.235,.015],feature);
    // Oversized egg-shaped head with simple hand-painted eyes and cheeks.
    const headY=standing?1.04:.91;
    sphere(g,'large oval clay head',skin,[0,headY,0],[.265,.29,.235],feature);
    sphere(g,'black cap-like clay hair',hair,[0,headY+.205,-.012],[.268,.13,.24],feature);
    sphere(g,'hair fringe',hair,[0,headY+.12,.185],[.19,.07,.085],feature);
    for(const side of [-1,1]){
      sphere(g,'side hair',hair,[side*.225,headY+.005,.005],[.065,.18,.12],feature);
      sphere(g,'painted white eye',eyePaint,[side*.09,headY+.005,.211],[.055,.067,.027],feature);
      sphere(g,'dark eye pupil',pupilPaint,[side*.09,headY+.002,.236],[.024,.035,.014],feature);
      sphere(g,'painted red cheek',cheekPaint,[side*.16,headY-.095,.18],[.052,.045,.025],feature);
    }
    // Seated figures have splayed legs and forward-set feet; one stands as in the reference.
    if(standing){
      for(const side of [-1,1]){
        limb(g,'clay leg',skin,[side*.09,.35,0],[side*.11,.08,.015],.075,feature);
        sphere(g,'clay foot',skin,[side*.11,.075,.09],[.09,.055,.15],feature);
      }
    }else{
      for(const side of [-1,1]){
        limb(g,'bent seated thigh',skin,[side*.105,.34,.02],[side*.25,.19,.22],.09,feature);
        limb(g,'lower seated leg',skin,[side*.25,.19,.22],[side*.29,.075,.42],.065,feature);
        sphere(g,'rounded clay foot',skin,[side*.29,.07,.47],[.095,.055,.14],feature);
      }
    }
    // Both arms rest across the body; varied elbow positions retain a hand-shaped feel.
    for(const side of [-1,1]){
      const elbow=pose==='tattooer'?(side<0?[-.2,.65,.35]:[.22,.64,.12]):[side*.26,standing?.67:.56,.035];
      const hand=pose==='tattooer'?(side<0?[-.3,.65,.67]:[.2,.58,.2]):[side*(variant?.07:.13),standing?.52:.42,.19];
      limb(g,pose==='tattooer'?'tattooing upper arm':'upper clay arm',skin,[side*.14,standing?.77:.64,pose==='tattooer'?.04:0],elbow,.065,feature);
      limb(g,pose==='tattooer'?'hand reaching toward back':'forearm across wrap',skin,elbow,hand,.06,feature);
      sphere(g,'clay hand',skin,hand,[.075,.065,.07],feature);
    }
    if(pose==='tattoo-recipient'){
      // Small pigment marks sit on the visible back when this figure turns away from the viewer.
      limb(g,'back tattoo line',tattooInk,[-.075,.54,-.17],[-.02,.59,-.18],.012,feature);
      limb(g,'back tattoo line',tattooInk,[-.02,.59,-.18],[.035,.54,-.18],.012,feature);
      limb(g,'back tattoo line',tattooInk,[.035,.54,-.18],[.085,.59,-.17],.012,feature);
      for(const side of [-1,1]) sphere(g,'back tattoo dot',tattooInk,[side*.11,.48,-.16],[.018,.018,.012],feature);
    }
    if(pose==='spear'){
      limb(g,'long wooden staff',wood,[.32,.05,.06],[.4,1.48,.06],.025,feature);
    }
  }
  // Seven figures placed to match the physical diorama: two on the terraces,
  // one in the stream, and four gathered around the raised house.
  // Two people work close together on neighboring levels in the back-right terraces.
  villager(3.55,-.88,'people',0,'seated',1.18);
  villager(4.4,-1.42,'people',1,'seated',1.50);
  // The staff-holding figure stands on the house-side bank beside the stream.
  villager(.82,1.15,'people',0,'spear');
  // Two seated neighbors face each other in conversation near the house.
  villager(-4.35,2.35,'people',0,'seated',.48,Math.PI/2);
  villager(-3.35,2.35,'people',1,'seated',.48,-Math.PI/2);
  // A seated person turns their back toward the viewer as another reaches to tattoo it.
  villager(-2.15,2.38,'people',0,'tattoo-recipient',.48,Math.PI);
  villager(-1.95,1.72,'people',1,'tattooer',.48,0);
  // Click any model feature to select its learning card.
  renderer.domElement.addEventListener('click',(event)=>{
    const bounds=renderer.domElement.getBoundingClientRect();
    pointer.x=((event.clientX-bounds.left)/bounds.width)*2-1;
    pointer.y=-((event.clientY-bounds.top)/bounds.height)*2+1;
    raycaster.setFromCamera(pointer,camera);
    const hit=raycaster.intersectObjects(model.children,true).find((item)=>item.object.userData.stop);
    if(hit) selectStop(stops.findIndex((item)=>item.id===hit.object.userData.stop));
  });
  function resize(){const rect=stage.getBoundingClientRect();renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/rect.height;camera.updateProjectionMatrix();}
  new ResizeObserver(resize).observe(stage); resize();
  $('resetView').addEventListener('click',()=>{camera.position.set(0,8.4,15);controls.target.set(0,1.75,0);controls.autoRotate=true;controls.update();selectStop(0);});
  function animate(){requestAnimationFrame(animate);controls.update();renderer.render(scene,camera);}
  selectStop(0); animate();
} catch(error) {
  console.error('Unable to start Three.js diorama:',error);
  $('webglError').hidden=false;
}
