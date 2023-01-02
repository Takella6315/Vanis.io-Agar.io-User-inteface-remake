const tabs = document.querySelectorAll('.ts-tab-header .ts-tab');
const tabs_content = document.querySelectorAll('.content-wrapper .ts-content');
const tabs = document.querySelectorAll('.tab-header .tab');
const tabs_content = document.querySelectorAll('.servers-content .content');
 
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    if (! tabs[index].classList.contains('ts-active')) {
              tabs.forEach(tab => { tab.classList.remove('ts-active'); });
      tabs_content.forEach(tab => { tab.classList.remove('ts-active'); });
 
              tabs[index].classList.add('ts-active');
      tabs_content[index].classList.add('ts-active');     
    }
  })
});
 
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    if (! tabs[index].classList.contains('active')) {
              tabs.forEach(tab => { tab.classList.remove('active'); });
      tabs_content.forEach(tab => { tab.classList.remove('active'); });
 
              tabs[index].classList.add('active');
      tabs_content[index].classList.add('active');     
    }
  })
});
