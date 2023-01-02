const tsTabs = document.querySelectorAll('.ts-tab-header .ts-tab');
const tsTabsContent = document.querySelectorAll('.content-wrapper .ts-content');

const tabs = document.querySelectorAll('.tab-header .tab');
const tabs_content = document.querySelectorAll('.servers-content .content');
 
tsTabs.forEach((tstab, index) => {
  tstab.addEventListener('click', () => {
    if (! tsTabs[index].classList.contains('ts-active')) {
              tsTabs.forEach(tstab => { tstab.classList.remove('ts-active'); });
    tsTabsContent.forEach(tstab => { tstab.classList.remove('ts-active'); });
 
              tsTabs[index].classList.add('ts-active');
      tsTabsContent[index].classList.add('ts-active');     
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
