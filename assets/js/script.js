$(document).ready(function(){

  $('.scroll-top').hide();
  
  /*---------- Mobile-Navbar Toggler ----------*/
  let sideBar = document.querySelector('.mobile-menu');

  document.querySelector('.header #menu-btn').onclick = () =>{
      sideBar.classList.add('active');
  }
 
  document.querySelector('#close-side-bar').onclick = () =>{   
      sideBar.classList.remove('active');
      $(".nav-link .main-nav-link").removeClass("active");
      $(".nav-link .sub-nav-link").removeClass("active").slideUp()
      $(".nav-link .main-nav-link i").removeClass("fa-minus").addClass("fa-plus");
  }
  
  // On Load/Scroll
  $(window).on('load scroll',function(){
    sideBar.classList.remove('active');
    $(".nav-link .main-nav-link").removeClass("active");
    $(".nav-link .sub-nav-link").removeClass("active").slideUp()
    $(".nav-link .main-nav-link i").removeClass("fa-minus").addClass("fa-plus");	

    /*--------------- Sticky Header ---------------*/
    if($(window).scrollTop() > 68){
      $('header .header-2').addClass('active');
    }else{
      $('header .header-2').removeClass('active');
    }

    /*--------------- Scroll-Top ---------------*/
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  
  });

  /*--------------- Loader ---------------*/
  function loader(){
    document.querySelector(".loader-container").classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 1000)
  }

  window.onload = fadeOut;

});


document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
          item.classList.toggle('active');
      });
  });
});


<script>
document.addEventListener('DOMContentLoaded', function() {
    const topicSelect = document.getElementById('topic');
    const locationSelect = document.getElementById('location');
    const dateInput = document.getElementById('date');
    const searchBtn = document.getElementById('searchBtn');

    // Function to handle dropdown changes
    function handleDropdownChange(event) {
        const selectedValue = event.target.value;
        console.log(`Selected ${event.target.name}: ${selectedValue}`);
        // Here you can add logic to filter events based on the selection
    }

    // Add event listeners to dropdowns
    topicSelect.addEventListener('change', handleDropdownChange);
    locationSelect.addEventListener('change', handleDropdownChange);

    // Function to handle search button click
    function handleSearch() {
        const selectedTopic = topicSelect.value;
        const selectedLocation = locationSelect.value;
        const selectedDate = dateInput.value;

        console.log('Search criteria:');
        console.log(`Topic: ${selectedTopic}`);
        console.log(`Location: ${selectedLocation}`);
        console.log(`Date: ${selectedDate}`);

        // Here you can add logic to perform the search and update the UI with results
    }

    // Add event listener to search button
    searchBtn.addEventListener('click', handleSearch);
});
</script>