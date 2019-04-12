"# vue-ckeditor5-UploadAdapter" 

'# <vue-ckeditor type="classic" v-model="work_log" :editors="editors" uploadAdapter="uploadadapter"></vue-ckeditor>'

import UploadAdapter from '../uploadadapter'

data() {
    return {
      ...
      uploadadapter: UploadAdapter
    }
  },