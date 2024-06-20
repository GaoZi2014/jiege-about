function showSidebar() {
  window.scrollTo(0,0);
  setTimeout(
    function showSidebar2(){
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'flex';
    }
  , 500)
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

function downloadFile() {
  const url = 'About_Me.md';
  const Link = document.createElement('a');
  link.href = url;
  link.download = 'README.md';
  document.body.appendChild(Link);
  link.click();
  document.body.removeChild(Link);
}

setTimeout(() => {
  const loader = document.getElementById('loader');
  const admin = document.getElementById('admin');
  const admin_content = document.getElementById('admin_content');
  const pills = document.getElementById('pills');
  const back = document.getElementById('back_button');
  loader.style.width = '0px';
  loader.style.height = '0px';
  loader.style.borderTop = "8px solid tomato";
  loader.style.border = "8px solid tomato";
  admin_content.style.display = "block";
  pills.style.width = "70px"
  back.style.border = "8px solid #09ff00";
  back.style.borderTop = "8px solid #09ff00";
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    admin.style.backgroundColor = "#ffffffa2";
  } else {
    admin.style.backgroundColor = "#3f3f3fa2";
  }
}, 2000);