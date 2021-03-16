let tabs = document.getElementsByClassName("tab-bar__tab");
let mobileTabs = document.getElementsByClassName("content__header");
let contents = document.getElementsByClassName("content__body");

const resetActive = () => {
  for (let tab of tabs) {
    tab.classList.remove("active");
  }
  for (let content of contents) {
    content.classList.remove("active");
  }
  for (let mobileTab of mobileTabs) {
    mobileTab.classList.remove("active");
  }
};

const setActive = (tabIndex) => {
  tabs[tabIndex].classList.add("active");
  contents[tabIndex].classList.add("active");
  mobileTabs[tabIndex].classList.add("active");
};

const toggleMobileTab = (tabIndex) => {
  if (mobileTabs[tabIndex].classList.contains("open")) {
    mobileTabs[tabIndex].classList.remove("open");
    contents[tabIndex].classList.remove("open");
  } else {
    mobileTabs[tabIndex].classList.add("open");
    contents[tabIndex].classList.add("open");
  }
};

const onTabClick = (tabIndex) => {
  resetActive();
  setActive(tabIndex);
};

const onTabClickMobile = (tabIndex) => {
  onTabClick(tabIndex);
  toggleMobileTab(tabIndex);
};
