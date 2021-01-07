
(function(){

    const profile = document.getElementById('profile');
    const url = 'https://api.github.com/users';
    const client_id = 'a3c4e3dcc9d206501a52';
    const client_secrets = '55a208c311e05344744934a2372ffa78209c2d4b';
    const user = 'patchelli';



    async function getUser(user){
        const ProfileResponse =  await fetch( `${url}/${user}?client_id=${client_id}&client_secrets=${client_secrets}`)
        console.log(ProfileResponse);
        
        const profile = ProfileResponse.json();

        return profile; 
    }

    getUser(user).then( res=>{console.log(res)
    }) ;
}())