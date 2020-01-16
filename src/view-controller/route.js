import { components } from '../index.js';
const changeView = (route) => {
    const container = document.getElementById('container')
        container.innerHTML ="";
    switch (route ) {
        
        case "#/Home":
             { return container.appendChild( components.home())}
        case "#/Profile": { return container.appendChild( components.profile())}
        case "#/EditProfile": { return container.appendChild( components.editProfile())}

        
        default:
            break;
    }
    console.log(route)
}

export {changeView}