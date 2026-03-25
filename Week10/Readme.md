## Storing of Files in our Application
- uploading files.

* we need to make content type as multipart/form-data to upload files.
* we can use multer package to upload files in our application.
* we will use cloudinary to store our files in the cloud.

- there are two ways to deal with this 
* store the file temporarily in our server/disk and then upload it to cloudinary.
    - problems: 
        * it will take more time to upload the file to cloudinary because we need to first store the file in our server/disk and then upload it to cloudinary.

* store the file in RAM/memory and then upload it to cloudinary.
    - problems:
        * it will take more memory to store the file in RAM/memory and then upload it to cloudinary.
        * we can put the file size restriction to avoid this problem.
        * we can also put restriction on the type of file that we want to upload to avoid this problem.