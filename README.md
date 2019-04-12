"# vue-ckeditor5-UploadAdapter" 

{::nomarkdown}
<vue-ckeditor type="classic" v-model="editorData" :editors="editors" uploadAdapter="uploadadapter"></vue-ckeditor>
{:/}

import UploadAdapter from '../uploadadapter'

data() {
    return {
      ...
      uploadadapter: UploadAdapter
    }
  },