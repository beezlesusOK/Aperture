

(function () {
    const burgerItem = document.querySelector('.burger');
    const burgerClose = document.querySelector('.burger_close');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelector('.item__link')

    burgerItem.addEventListener(`click`, () => {
        menu.classList.add(`menu_active`);
    });
    burgerClose.addEventListener(`click`, () => {
        menu.classList.remove(`menu_active`);
    });
    menuLink.addEventListener(`click`, () => {
      menu.classList.remove(`menu_active`);
    });
}());

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


(function () {
    var square = document.querySelector('.monstera__info');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('monstera__info_view');
        }
      });
    });
  
    observer.observe(square);
  })();
  (function () {
    var square = document.querySelector('.sunset__info');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('sunset__info_view');
        }
      });
    });
  
    observer.observe(square);
  })();

  (function () {
    var square = document.querySelector('.star__info');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('star__info_view');
        }
      });
    });
  
    observer.observe(square);
  })();
  
  (function () {
    var square = document.querySelector('.card__subtitle');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('card__subtitle__view');
        }
      });
    });
  
    observer.observe(square);
  })();