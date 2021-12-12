document.addEventListener('DOMContentLoaded', () => {
    // swiper.init
    const banner = new Swiper('.swiper.banner', {
        speed: 1000,
        spaceBetween: 100,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        passiveListeners: true,
        // Enable lazy loading
        preloadImages: false,
        lazy: true,
    });
    const recomendedSlider = new Swiper('.recomended-slider', {
        slidesPerView: 3,
        speed: 1000,
        spaceBetween: 40,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        passiveListeners: true,
        // autoHeight: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.recomended-slider__navigation .button-next',
            prevEl: '.recomended-slider__navigation .button-prev',
        },

        // Enable lazy loading
        preloadImages: false,
        lazy: true,
        centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 2.2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    })
    const articleSlider = new Swiper('.article-slider', {
        slidesPerView: 1.6,
        speed: 1000,
        spaceBetween: 40,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        passiveListeners: true,
        // autoHeight: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                translate: ['-40%', 0, 0],
                scale: 0.8,
            },
            next: {
                translate: ['43%', 0, 0],
                scale: 0.8,
            },
        },
        slideToClickedSlide: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.article .article-slider__navigation .button-next',
            prevEl: '.article .article-slider__navigation .button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            569: {
                slidesPerView: 1.6,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 1.6,
                spaceBetween: 40
            }
        },

        // Enable lazy loading
        preloadImages: false,
        lazy: true,
        centeredSlides: true,

    })
    const bestSellerProductSlider = new Swiper('.best-seller-product-slider', {
        slidesPerView: 2,
        speed: 1000,
        grid: {
            rows: 2,
            fill: 'row'
        },
        spaceBetween: 0,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        passiveListeners: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 0
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            570: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0
            },
        },

        // Enable lazy loading
        preloadImages: false,
        lazy: true,
    })
    const productThumbsSlider = new Swiper('.product__galery--thumb-slider .swiper', {
        slidesPerView: 2,
        speed: 1000,
        spaceBetween: 10,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        passiveListeners: true,
        // Enable lazy loading
        preloadImages: false,
        lazy: true,
        navigation: {
            nextEl: '.product__galery--thumb-slider .swiper__navigation .button-next',
        },
    })
    const productMainSlider = new Swiper('.product__galery--main-slider', {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        passiveListeners: true,
        // Enable lazy loading
        preloadImages: false,
        lazy: true,

        thumbs: {
            swiper: productThumbsSlider
        }
    })
    const contactUsSlider = new Swiper('.contact_us__slider', {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        passiveListeners: true,
        navigation: {
            nextEl: '.contact_us__slider .swiper__navigation .button-next',
            prevEl: '.contact_us__slider .swiper__navigation .button-prev',
        },
        effect: 'cards',
        cardsEffect: {
            slideShadows: false
        },

    })
    const catalogCategorySlider = new Swiper('.catalog-category-slider .swiper', {
        slidesPerView: 1.5,
        speed: 1000,
        spaceBetween: 0,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        passiveListeners: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.catalog-category-slider .button-next',
            prevEl: '.catalog-category-slider .button-prev',
        },

        // Enable lazy loading
        preloadImages: true,
        lazy: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,

            },
            425: {
                slidesPerView: 1.5,
                spaceBetween: 0,

            },
            570: {
                slidesPerView: 2.3,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 3.3,
                spaceBetween: 0,

            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 10,

            },

        },
        on: {
            init: function (swiper) {
                const params = swiper.params.breakpoints[swiper.currentBreakpoint]
                if (swiper.slides.length <= params.slidesPerView) {
                    swiper.$el[0].parentNode.classList.add('catalog-category-slider-disable')
                    swiper.disable()
                } else {
                    swiper.$el[0].parentNode.classList.remove('catalog-category-slider-disable')
                    swiper.enable()
                }
            },
            breakpoint: function (swiper, params) {
                if (swiper.slides.length <= params.slidesPerView) {
                    swiper.$el[0].parentNode.classList.add('catalog-category-slider-disable')
                    swiper.disable()
                } else {
                    swiper.$el[0].parentNode.classList.remove('catalog-category-slider-disable')
                    swiper.enable()
                }
            }
        }
    })
    // swiper.init
})