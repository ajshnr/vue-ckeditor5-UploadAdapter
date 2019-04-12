export default class UploadAdapter {
    
    constructor(loader) {
      this.loader = loader;
    //   this.loader.file.then((res)=>{
    //       console.log(res)
    //   });
    }
  
    async upload() {
        //"data:image/png;base64,"+ btoa(binaryString) 
        await this.loader.file.then((res)=>{
            return this.readThis(res);
        });
    }
  
    readThis(file) {
        console.log("file: ", file);
      let imagePromise = new Promise((resolve, reject) => {
        var myReader= new FileReader();
        myReader.onloadend = (e) => {
          let image = myReader.result;
          console.log("image: ", image);
          return { default: "data:image/png;base64," + image };
          resolve({ default: "data:image/png;base64," + image });
        }
        myReader.readAsDataURL(file);
      });
      return imagePromise;
    }
  
  }