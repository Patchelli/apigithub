(function () {

    'use strict';


    const profile = document.getElementById('profile');
    const url = 'https://api.github.com/users';
    const client_id = 'a3c4e3dcc9d206501a52';
    const client_secrets = '55a208c311e05344744934a2372ffa78209c2d4b';
    const user = 'Patchelli';
    const count = 7;
    const sort = "created: asc"

    console.log(profile);
    

    async function getUser(user) {
        
        const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secrets=${client_secrets}`);
        const resResponse = await fetch(`${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secrets=${client_secrets}`)
        
        
        const profile = await profileResponse.json();
        const repos = await resResponse.json();
        return {profile,repos};
    }

  


    function showProfile(user) {
        console.log(user);
        
        profile.innerHTML = ` <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card" >
                    <img class="card-img-top" src="${user.avatar_url}">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Repositorios <span class="badge badge-success">${user.public_repos}</span></li>
                        <li class="list-group-item">Biografia : <span class="badge"></span>${user.bio}</li>
                        <li class="list-group-item">Twitter<span class="badge"><a href="https://twitter.com/Patchelli" target="_blank">Patchelli</a></span></li>
                        <li class="list-group-item">Location  :<span class="badge">${user.location}</span></li>
                    </ul>
                    <div class="card-body">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">Perfil</a>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div id="repos"></div>
            </div>
        </div>
    </div>`
    }

    function showRepos(repos){
        let output = "";
    }

    getUser(user).then(res => showProfile(res) );

    
}())