export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn:boolean = true;
    const hasPermission:boolean = false;

    if(!isLoggedIn){
        return navigateTo('/login');
    }
    if(!hasPermission){
        return abortNavigation({
                statusCode: 403,
                statusMessage:'無權限',
        })
    }
})
