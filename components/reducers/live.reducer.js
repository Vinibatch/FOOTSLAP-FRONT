export default function(user ={}, action) {
    // console.log("ACTION ===>",action.user);
    if(action.type == 'getUserFromDB') {
        // console.log("ACTION.USER",action.user)
      //   var userCopy = [
      //     ...user
      // ]
      // userCopy.push(action.user)
          return action.user;    
    } else {
       return user;
     }
    }
    