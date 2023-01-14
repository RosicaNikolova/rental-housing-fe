var navigation=[];
console.log("hello from navigation");
const setNavigation = (role) =>{
    console.log("Role: " + role);
    if(!role){
        navigation=[
            {
                id: 1,
                path: "/properties",
                text: "Rental Properties"
            },
            {
                id: 2,
                path: "/login",
                text: "Login"
            },
            {
                id: 3,
                path: "/Register",
                text: "Register"
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
                        path: "/RequestsPage",
                        text: "Requests"
                    },
                    {
                        id: 4,
                        path: "Chatroom",
                        text: "Chatroom"
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
                        path: "/createProperty",
                        text: "Create Property"
                    },
                    {
                        id: 3,
                        path: "/MyInquiries",
                        text: "My requests"
                    },
                    {
                        id: 4,
                        path: "Chatroom",
                        text: "Chatroom"
                    },
                    {
                        id: 5,
                        path: "/Logout",
                        text: "Logout"
                    },
                ]
            break;

            case 'RENTER':
                navigation = [
                    {
                        id: 1,
                        path: "/properties",
                        text: "Rental Properties"
                    },
                    {
                        id: 2,
                        path: "Chatroom",
                        text: "Chatroom"
                    },
                    {
                        id: 3,
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