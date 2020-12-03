import { fetchData } from "./modules/TheDataMiner.js";
import CooperCar from "./modules/TheCooperCar.js";
import TypeCar from "./modules/TheTypeCar.js";

(() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        // el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            showLight: false,
            car: {
                type: 3
            },
            show: 0,
            list: [{
                    img: "images/1-en.jpg",
                    alt: "1",
                },
                {
                    img: "images/cooper.jpg",
                    alt: "2"
                },
            ],
            carList: []
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function () {
            console.log("Vue is mounted!");
            // alert("Hey there! your vue instance is ready");

            this.list.push({
                img: "images/mini_c.jpg",
                alt: "3"
            })

             this.getData()
            // alert("you added Jarrod!")
        },

        // run a method when we change our view (update the DOM with Vue)
        updated: function () {
            console.log('Vue just updated the DOM');
        },

        methods: {
            getData () { // get all data
                this.list.forEach((element, index) => {
                    fetchData(`./includes/index.php?id=${index+1}`).then(data => {
                       
                         if(data.code){
                             alert(data.msg);
                        }else{
                            this.initHtml(data[0]);
                        } }).catch(err => {
                            console.log(err);  alert(err); 
                        }); //request data index.php

                });
            },
            initHtml (data) {
                this.carList.push(data);
                this.show = 0;
            },
            clickImg (index) {
                this.show = index;

                this.showLight = true;
            },
            changeVideo (index) {
                const videoTag = document.querySelector('.car-box>video')
                if (index == 1) {
                    videoTag.setAttribute('src', "video/header.mp4");
                } else {
                    videoTag.setAttribute('src', "video/top-header-en.mp4");
                }
                for (let item in this.list) {
                    document.querySelectorAll('.car-box>ul>li')[item].classList.remove('show-lightbox');
                }
                document.querySelectorAll('.car-box>ul>li')[index].classList.toggle('show-lightbox');
            },
        },
        components: {
            "cooper-car": CooperCar,
            "type-car": TypeCar,
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();