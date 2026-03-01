/**
 * GETIVA — Motion: scroll-triggered reveals and count-up stats.
 * Subtle, corporate, one-time animations. Respects prefers-reduced-motion.
 */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  function addInView(entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }

  var observer = new IntersectionObserver(addInView, observerOptions);

  // Elements that get .in-view on scroll
  var scrollTargets = document.querySelectorAll(
    '.animate-on-scroll, .services-grid .service-card, .stats-grid .stat-item, ' +
    '.process-diagram .process-step, .process-diagram .process-connector, ' +
    '.audience-sections .audience-card, .testimonials-grid .testimonial-card, ' +
    '.industries-grid .industry-card-visual'
  );
  scrollTargets.forEach(function (el) { observer.observe(el); });

  // Count-up for numeric stats (run once when stats section is in view)
  var statsSection = document.querySelector('.stats-section');
  var statValues = document.querySelectorAll('.stat-value[data-count]');
  if (statsSection && statValues.length) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countObserver.unobserve(entry.target);
        statValues.forEach(function (el) {
          var count = parseInt(el.getAttribute('data-count'), 10);
          var suffix = el.getAttribute('data-suffix') || '';
          if (isNaN(count)) return;
          animateValue(el, 0, count, 1500, suffix);
        });
      });
    }, { threshold: 0.2 });

    countObserver.observe(statsSection);
  }

  function animateValue(el, start, end, duration, suffix) {
    el.textContent = start + suffix;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      progress = 1 - Math.pow(1 - progress, 2); // ease-out
      var value = Math.floor(progress * (end - start) + start);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  // ===============================
  // Testimonials Carousel
  // ===============================
  function initTestimonialsCarousel() {
    var carousel = document.getElementById('testimonials-carousel');
    var dotsContainer = document.getElementById('testimonials-dots');
    var prevBtn = document.querySelector('.testimonials-prev');
    var nextBtn = document.querySelector('.testimonials-next');
    
    if (!carousel || !dotsContainer) return;
    
    var slides = carousel.querySelectorAll('.testimonial-slide');
    if (slides.length === 0) return;
    
    var currentIndex = 0;
    var autoplayInterval = null;
    var autoplayDelay = 6000; // 6 seconds
    
    // Create dots
    slides.forEach(function(_, index) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (index === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (index + 1));
      dot.addEventListener('click', function() {
        goToSlide(index);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
    
    var dots = dotsContainer.querySelectorAll('.dot');
    
    // Initialize first slide
    slides[0].classList.add('active');
    
    function goToSlide(index) {
      slides[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      
      currentIndex = index;
      if (currentIndex >= slides.length) currentIndex = 0;
      if (currentIndex < 0) currentIndex = slides.length - 1;
      
      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }
    
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
      goToSlide(currentIndex - 1);
    }
    
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }
    
    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }
    
    // Event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        prevSlide();
        resetAutoplay();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextSlide();
        resetAutoplay();
      });
    }
    
    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      var swipeThreshold = 50;
      var diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide(); // Swipe left - next
        } else {
          prevSlide(); // Swipe right - prev
        }
        resetAutoplay();
      }
    }
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', function() {
      clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', function() {
      startAutoplay();
    });
    
    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoplay();
      }
    });
    
    // Start autoplay
    startAutoplay();
  }
  
  initTestimonialsCarousel();

  // ===============================
  // Industries Carousel (Same style as Testimonials)
  // ===============================
  function initIndustriesCarousel() {
    var carousel = document.getElementById('industries-carousel');
    var dotsContainer = document.getElementById('industries-dots');
    var prevBtn = document.querySelector('.industries-prev');
    var nextBtn = document.querySelector('.industries-next');
    
    if (!carousel || !dotsContainer) return;
    
    var slides = carousel.querySelectorAll('.industry-slide');
    if (slides.length === 0) return;
    
    var currentIndex = 0;
    var autoplayInterval = null;
    var autoplayDelay = 5000; // 5 seconds
    
    // Create dots
    slides.forEach(function(_, index) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (index === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to industry ' + (index + 1));
      dot.addEventListener('click', function() {
        goToSlide(index);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
    
    var dots = dotsContainer.querySelectorAll('.dot');
    
    // Initialize first slide
    slides[0].classList.add('active');
    
    function goToSlide(index) {
      slides[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      
      currentIndex = index;
      if (currentIndex >= slides.length) currentIndex = 0;
      if (currentIndex < 0) currentIndex = slides.length - 1;
      
      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }
    
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
      goToSlide(currentIndex - 1);
    }
    
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }
    
    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }
    
    // Event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        prevSlide();
        resetAutoplay();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextSlide();
        resetAutoplay();
      });
    }
    
    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
        resetAutoplay();
      }
    }, { passive: true });
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', function() {
      clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', function() {
      startAutoplay();
    });
    
    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoplay();
      }
    });
    
    // Start autoplay
    startAutoplay();
  }
  
  initIndustriesCarousel();

  // ===============================
  // Services Carousel (Same style as Testimonials)
  // ===============================
  function initServicesCarousel() {
    var carousel = document.getElementById('services-carousel');
    var dotsContainer = document.getElementById('services-dots');
    var prevBtn = document.querySelector('.services-prev');
    var nextBtn = document.querySelector('.services-next');
    
    if (!carousel || !dotsContainer) return;
    
    var slides = carousel.querySelectorAll('.service-slide');
    if (slides.length === 0) return;
    
    var currentIndex = 0;
    var autoplayInterval = null;
    var autoplayDelay = 5000; // 5 seconds
    
    // Create dots
    slides.forEach(function(_, index) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (index === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to service ' + (index + 1));
      dot.addEventListener('click', function() {
        goToSlide(index);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
    
    var dots = dotsContainer.querySelectorAll('.dot');
    
    // Initialize first slide
    slides[0].classList.add('active');
    
    function goToSlide(index) {
      slides[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      
      currentIndex = index;
      if (currentIndex >= slides.length) currentIndex = 0;
      if (currentIndex < 0) currentIndex = slides.length - 1;
      
      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }
    
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
      goToSlide(currentIndex - 1);
    }
    
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }
    
    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }
    
    // Event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        prevSlide();
        resetAutoplay();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextSlide();
        resetAutoplay();
      });
    }
    
    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
        resetAutoplay();
      }
    }, { passive: true });
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', function() {
      clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', function() {
      startAutoplay();
    });
    
    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoplay();
      }
    });
    
    // Start autoplay
    startAutoplay();
  }
  
  initServicesCarousel();
  
  // ===============================
  // Partners Section - Metrics Animation
  // ===============================
  function initPartnersMetrics() {
    var metricsSection = document.querySelector('.partners-metrics');
    var metricCards = document.querySelectorAll('.metric-card');
    var metricNumbers = document.querySelectorAll('.metric-number[data-count]');
    
    if (!metricsSection || metricCards.length === 0) return;
    
    // Animate metrics on scroll
    var metricsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        metricsObserver.unobserve(entry.target);
        
        // Animate each metric card with stagger
        metricCards.forEach(function(card, index) {
          setTimeout(function() {
            card.classList.add('animate');
          }, index * 150);
        });
        
        // Count up numbers
        metricNumbers.forEach(function(el, index) {
          var count = parseInt(el.getAttribute('data-count'), 10);
          if (isNaN(count)) return;
          
          setTimeout(function() {
            animateMetricValue(el, 0, count, 2000);
          }, index * 150);
        });
      });
    }, { threshold: 0.3 });
    
    metricsObserver.observe(metricsSection);
  }
  
  function animateMetricValue(el, start, end, duration) {
    el.textContent = start;
    var startTime = null;
    
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth ease-out cubic
      progress = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(progress * (end - start) + start);
      el.textContent = value;
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  
  initPartnersMetrics();
  
  // ===============================
  // Partners Cards - Interactive Effects
  // ===============================
  function initPartnerCards() {
    var partnerCards = document.querySelectorAll('.partner-card-rich');
    
    partnerCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        // Add active state
        this.style.zIndex = '10';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.zIndex = '';
      });
      
      // Mouse move effect for glow
      card.addEventListener('mousemove', function(e) {
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        
        var glow = this.querySelector('.card-glow');
        if (glow) {
          glow.style.left = (x - rect.width) + 'px';
          glow.style.top = (y - rect.height) + 'px';
        }
      });
    });
  }
  
  initPartnerCards();
})();
