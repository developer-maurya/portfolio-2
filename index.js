
  function opentab(tabName) {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach(link => link.classList.remove('text-white', 'underline'));
    tabContents.forEach(content => content.classList.add('hidden'));

    document.querySelector(`#${tabName}`).classList.remove('hidden');
    event.target.classList.add('text-white', 'underline');
  }
  function showTab(event, tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');

    buttons.forEach(btn => btn.classList.remove('border-pink-500', 'text-pink-500'));
    event.currentTarget.classList.add('border-pink-500', 'text-pink-500');
  }

  document.addEventListener('DOMContentLoaded', () => {
    showTab({ currentTarget: document.querySelector('.tab-btn') }, 'all');
  });


// ---------------------------card--------------------------------    
function opentab1(event, tabName) {
    const tabs = document.querySelectorAll('.all-card');
    const tabLinks = document.querySelectorAll('.work-item');

    tabs.forEach(tab => tab.classList.add('hidden'));
    tabLinks.forEach(link => link.classList.remove('active-link1', 'bg-yellow-500', 'text-black'));

    document.getElementById(tabName).classList.remove('hidden');
    event.currentTarget.classList.add('active-link1', 'bg-yellow-500', 'text-black');
  }
