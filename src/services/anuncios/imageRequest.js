import api from './api';

class ImageRequest { 
    getImage(image) {
        return api.get(""+image);
    }
}

export default ImageRequest