<template lang="html">
  <div class="1"  >
    <p>{{ name }}
      <span :class="validClass"
            v-if="true">
      </span>
    </p>
    <input :value="value"
          @input="onInput">
  </div>
</template>

<script>
export default {
  props: ['name', 'value', 'pattern'],
  data(){
    return{
      activated: this.value!= ''
    }
  },
  computed:{
    validClass(){
      return this.pattern.test(this.value) ? 'fa-1':'fa-2';
    }
  },
  methods: {
    onInput(e){
      this.activated = true;
      this.$emit('changedata', {
        value: e.target.value,
        valid: this.pattern.test(e.target.value)
      });
    }
  }
}
</script>

<style lang="css">
.fa-1{
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: green;
}
.fa-2{
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: red;
}
</style>
