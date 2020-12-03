export default{
    name: "TypeCar",
    props:["caritem", "ind", 'show'],
    data: function(){
        return {
        }
    },

    template: 
    `<div class="type-box-item" @click="clickImg(ind)">
        <img class="car" :src="getRealImgPath(caritem.Images)" :alt='caritem.Name'>
        <article  v-if="show == ind" :class="{ 'light': show }">
            <h5>{{ caritem.Name }}</h5>
            <h5>{{ caritem.Price }}</h5>
            <h5>{{ caritem.Description }}</h5>
        </article>
    </div>`,

        methods:{
            clickImg(ind) {

                // console.log(`fired from inside ${this.cooper.model} the component!`);
                this.$emit("change", ind)
            },

            getRealImgPath(imgName){
                return "images/"+imgName;
            }

            
        },
        mounted() {
         console.log('car',this.carItem);   
        },
        
}
