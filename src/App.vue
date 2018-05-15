<template>
  <div>
        <form @submit.prevent="show = false" v-if="show">
          <app-input v-for="(item, index) in info"
                     :name="item.name"
                     :value="item.value"
                     :pattern="item.pattern"
                     :key="index"
                     @changedata="onFieldChange(index, $event)"
          >

          </app-input>
          <button class="but"
                  :disabled="done < info.length"
                  @click="show = !show">
              Send
          </button>
        </form>
        <table v-else>
            <tr v-for="mass in info">
              <td>{{ mass.name }}</td>
              <td>{{ mass.value }}</td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
          info:[
          {
            name: 'Name',
            value: '',
            pattern: /^[a-zA-z]{2,30}$/
          },
          {
            name: 'Phone',
            value: '',
            pattern: /^[0-9]{7,30}$/
          },
          {
            name: 'Email',
            value: '',
            pattern: /.+/
          },
          {
            name: 'Some Field 1',
            value: '',
            pattern: /.+/
          },
          {
            name: 'Some Field 2',
            value: '',
            pattern: /.+/
          }
        ],
        done: 0,
        show: true,
        controls: []
      }
      },
      beforeMount(){
        for(let i=0; i<this.info.length; i++){
          this.controls.push(false);
        }
      },
      methods:{
        onFieldChange(index, data){
          this.info[index].value = data.value;
          this.controls[index] = data.valid;
          let done = 0;
          for(let i=0; i<this.controls.length; i++){
            if(this.controls[i]) done++;
          }
          this.done = done;
        }
      }

}
</script>

<style>

</style>
