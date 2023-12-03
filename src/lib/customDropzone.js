import {Dropzone} from "dropzone";

Dropzone.options.image = {
    dictDefaultMessage:"Please load the selected images",
    acceptedFiles:".png, .jpg, .jpeg, .bmp, .svg",
    maxFilesize: 5,
    maxFiles: 1,
    paralelUploads: 1,
    autoProccessQueue: false,
    addRemoveLinks: true,
    //dictRemoveFile:"Borrar fotografia" para español
    //dictMaxFilesExceeded: "Solamente uno"
    
}
