"# vue-ckeditor5-UploadAdapter" 

<template>
    <vue-ckeditor type="classic" v-model="work_log" :editors="editors" :uploadAdapter="uploadadapter"></vue-ckeditor>
</template>

import UploadAdapter from '../uploadadapter'

data() {
    return {
      ...
      uploadadapter: UploadAdapter
    }
  },