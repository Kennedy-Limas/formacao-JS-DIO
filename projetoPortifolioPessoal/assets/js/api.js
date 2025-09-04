

async function fetchProfileData() {
    // const url = 'https://api.github.com/users/YourGitHubUsername'; // Substitua 'YourGitHubUsername' pelo seu nome de usuário do GitHub
    const fatchinfo = await fetch(url);
    return await fatchinfo.json();

}