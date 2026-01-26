const newPostBtn = document.querySelector(".profile__add-but");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");
const newPostFormEl = newPostModal.querySelector(".modal__form");
const newPostUrlInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#caption-input");
const editProfileBtn = document.querySelector(".profile__edit-but");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button",
);
const editProfileFormEl = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileFormEl.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("Caption:", newPostCaptionInput.value);
  console.log("Image URL:", newPostUrlInput.value);
  newPostFormEl.reset();
  newPostModal.classList.remove("modal_is-opened");
}

newPostFormEl.addEventListener("submit", handleNewPostSubmit);
