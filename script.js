const filterSidebar = document.getElementById('filter-sidebar');
  const showFilterBtn = document.getElementById('show-filter-btn');
  const closeFilterBtn = document.getElementById('close-filter-btn');
  const filterOverlay = document.getElementById('filter-overlay');

  function openFilter() {
    filterSidebar.classList.remove('hidden');
    filterOverlay.classList.remove('hidden');
    filterSidebar.classList.add('fixed', 'top-0', 'left-0', 'h-full', 'w-3/4', 'bg-white', 'p-4', 'overflow-y-auto', 'shadow-lg', 'animate-slideIn');
  }

  function closeFilter() {
    filterSidebar.classList.add('hidden');
    filterOverlay.classList.add('hidden');
    filterSidebar.classList.remove('fixed', 'top-0', 'left-0', 'h-full', 'w-3/4', 'bg-white', 'p-4', 'overflow-y-auto', 'shadow-lg', 'animate-slideIn');
  }

  if (showFilterBtn) showFilterBtn.addEventListener('click', openFilter);
  if (closeFilterBtn) closeFilterBtn.addEventListener('click', closeFilter);
  if (filterOverlay) filterOverlay.addEventListener('click', closeFilter);

   
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const searchBtn = document.getElementById('mobile-search-btn');
        const searchInput = document.getElementById('mobile-search');
       

        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            searchInput.classList.add('hidden'); // Hide search if menu is opened
            filterSidebar.classList.remove('open'); // Hide filter if menu is opened
        });

        searchBtn.addEventListener('click', () => {
            searchInput.classList.toggle('hidden');
            menu.classList.add('hidden'); // Hide menu if search is opened
            filterSidebar.classList.remove('open'); // Hide filter if search is opened
        });

        showFilterBtn.addEventListener('click', () => {
            filterSidebar.classList.add('open');
        });

        closeFilterBtn.addEventListener('click', () => {
            filterSidebar.classList.remove('open');
        });
   