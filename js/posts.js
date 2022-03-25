function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displyPosts(data))

}
loadPosts();

function displyPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = (`
        <h2>${post.title}</h2> 
        <p>${post.body}</p>
            `);
        postContainer.appendChild(div);
        console.log(post)

    }
}