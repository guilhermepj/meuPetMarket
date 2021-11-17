import api from './api';

class StateService { 
    getState() {
        return api.get("api/states");
    }
}

export default StateService