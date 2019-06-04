export default function(user ={}, action) {
    // console.log("ACTION ===>",action);
    if(action.type == 'getUserFromDB') {
        // console.log()
       return action.user;
    } else {
       return user;
     }
    }
    