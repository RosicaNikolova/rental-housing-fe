var navigation=[];
console.log("hello from navigation");
const setNavigation = (role) =>{
    if(!role){
        navigation=[
            {
                id: 1,
                path: "/properties",
                text: "Rental Properties"
            },
            {
                id: 2,
                path: "/Property/:id",
                text: "Property"
            },
            {
                id: 3,
                path: "/login",
                text: "Login"
            },
            {
                id: 4,
                path: "/Register",
                text: "Register"
            },
            {
                id: 5,
                path: "Chatroom",
                text: "Chatroom"
            }
        ]
    }
    else{
        switch(role[0]){
            case 'ADMIN':
                navigation = [
                    {
                        id: 1,
                        path: "/properties",
                        text: "Rental Properties"
                    },
                    {
                        id: 2,
                        path: "/users",
                        text: "Users"
                    },
                    {
                        id: 3,
                        path: "/Property/:id",
                        text: "Property"
                    },
                    {
                        id: 4,
                        path: "/RequestsPage",
                        text: "Requests"
                    },
                    {
                        id: 5,
                        path: "/Logout",
                        text: "Logout"
                    }
                ]
            break;
    
            case 'HOMEOWNER':
                navigation = [
                    {
                        id: 1,
                        path: "/properties",
                        text: "Rental Properties"
                    },
                    {
                        id: 2,
                        path: "/Property/:id",
                        text: "Property"
                    },
                    {
                        id: 3,
                        path: "/createProperty",
                        text: "Create Property"
                    },
                    {
                        id: 4,
                        path: "/Logout",
                        text: "Logout"
                    }
                ]
            break;
    
            default:
                navigation = [
                    {
                        id: 1,
                        path: "/properties",
                        text: "Rental Properties"
                    },
                    {
                        id: 2,
                        path: "/Property/:id",
                        text: "Property"
                    },
                    {
                        id: 3,
                        path: "/login",
                        text: "Login"
                    },
                    {
                        id: 4,
                        path: "/Register",
                        text: "Register"
                    }
    
                ]
        }    

    }
    return navigation;
}


  export default setNavigation;