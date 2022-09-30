<script setup>
    import Flickity from 'flickity'
    import "flickity/css/flickity.css"
    
    const props = defineProps(['slides'])
    
    const slider = ref(null)
    
    const mutationObserver = new MutationObserver(() => {
        if (document.contains(slider.value)) {
            // console.log('Slideshow: Ready!');
    
            new Flickity(slider.value, {
                wrapAround: true,
                autoPlay: true,
                autoPlay: 6000,
                setGallerySize: false,
                on: {
                    'dragStart': () => {
                        slider.value.style.pointerEvents = 'none'
                    },
                    'dragEnd': () => {
                        slider.value.style.pointerEvents = 'all'
                    }
                }
            });
    
            mutationObserver.disconnect()
        }
    })
    mutationObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree:true})
    
    </script>
    
    <template>
        <div ref="slider" class="slider">
            <Slide
                v-for="(slide, i) in slides"
                :key="i"
                :title="slide.title"
                :image="slide.thumbnail || 'construction-sign.jpg'"
                :link="slide._path"
            ></Slide>
        </div>
    </template>
    
    
    <style lang="scss" scoped>
    
    .slider :deep() {
        width: 100%;
        height: 50vw;
        max-height: 300px;
        font-size: 6.4vw;
        margin-bottom: 80px;
    
        @media (min-width: 600px) {
            font-size: 2.5rem;
        }
    
        .flickity-button {
            top: unset;
            bottom: -42px;
            transform: scale(0.5);
            position: absolute;
            background: hsla(0, 0%, 0%, 0.5);
            border: none;
            color: hsla(0, 0%, 100%, 0.8);
            filter: brightness(100%);
            transition: 0.15s background; //0.15s filter; // BUG: Filter doesnt work with css transitions
    
            @media (min-width: 900px) {
                top: 50%;
                bottom: unset;
                transform: translateY(-50%);
                background: hsla(0, 0%, 100%, 0.3);
                color: hsla(0, 0%, 0%, 0.8);
    
                &:hover {
                    background: hsla(0, 0%, 100%, 0.5);
                    cursor: pointer
                }
    
                &:focus {
                    box-shadow: none;
                }
            }
    
            
    
            html.backdropfilter & {
    
                background: hsla(0, 0%, 0%, 0.1);
                color: hsla(0, 0%, 100%, 1);
                backdrop-filter: blur(8px);
    
                &:hover {
                    background: hsla(0, 0%, 0%, 0.2);
                }
    
                &:active {
                    opacity: 1;
                    filter: brightness(0.7);
                }
                
            }

            @media (max-width: 899px) {
                background: hsla(0, 0%, 50%, 1) !important;
                color: hsla(0, 0%, 100%, 1) !important;
            }
        }
    
        .flickity-prev-next-button.previous {
            @media (min-width: 1080px) {
                left: calc((100% - 1080px) / 2 + 10px)
            }  
        }
    
        .flickity-prev-next-button.next {
            @media (min-width: 1080px) {
                right: calc((100% - 1080px) / 2 + 10px)
            }
        }
    
        .flickity-page-dots {
            width: max-content;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    </style>
    