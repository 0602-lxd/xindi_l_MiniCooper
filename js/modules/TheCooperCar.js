export default{
    name: "TheCooperCar",
    props:["item", "index"],
    data: function(){
        return {
          
        }
    },

    template: 
    // `<div class="img-template" @click="logClicked">
    //     <p class="mini"> {{ cooper.model }} </p>
    //     <img class="car" :src="'images/' + cooper.img2" alt='cooper.model + " img"'>
    // </div>`,
    `<li @click.prevent="changeVideo(index)"><img :src="item.img" :alt="item.alt"></li>`,

        created: function(){
            // console.log(`created ${this.cooper.model} cars`);
        },

        methods:{
            changeVideo (index) {
                // console.log(`fired from inside ${this.cooper.model} the component!`);
                this.$emit("change", index)
            }
            
        }
        

}
