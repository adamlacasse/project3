import { FileUpload } from 'redux-file-upload'
 
<FileUpload
  allowedFileTypes={['jpg', 'pdf']}
  data={{ type: 'picture' }}
  dropzoneId="fileUpload"
  url="https:/url.org/api/docs/upload"
>
  <button>
    Click or drag here
  </button>
</FileUpload>