// 01 Promise syntax
function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

    const loadPostsBtnElement = document.getElementById('btnLoadPosts');
    const viewCommentsBtnElement = document.getElementById('btnViewPost');

    const postsSelectElement = document.getElementById('posts');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const commentsUlElement = document.getElementById('post-comments');

    let allPosts;

    const loadPosts = function () {
        postsSelectElement.innerHTML = '';
        postTitleElement.textContent = '';
        postBodyElement.textContent = '';
        commentsUlElement.innerHTML = '';

        fetch(postsUrl)
            .then(res => res.json())
            .then(postData => {
                allPosts = Object.values(postData);

                allPosts.forEach(post => {
                    const postOption = document.createElement('option');

                    postOption.value = post.id;
                    postOption.textContent = post.title;

                    postsSelectElement.appendChild(postOption);
                })
            })
            .catch(err => console.error(err.message));
    }

    const viewComments = function () {
        const selectedPostId = postsSelectElement.value;
        const selectedPost = allPosts.find(post => selectedPostId === post.id);

        const postId = selectedPost.id;
        postTitleElement.textContent = selectedPost.title;
        postBodyElement.textContent = selectedPost.body;

        fetch(commentsUrl)
        .then(res => res.json())
        .then(commentsData => {
            const allComments = Object.values(commentsData);

            const filteredComments = allComments.filter(comment => comment.postId === postId);
            
            commentsUlElement.innerHTML = '';
            
            filteredComments.forEach(comment => {
                const commentLiElement = document.createElement('li');
                commentLiElement.textContent = comment.text;
                commentsUlElement.appendChild(commentLiElement);
            })
        })
        .catch(err => console.error(err.message));
    }

    loadPostsBtnElement.addEventListener('click', loadPosts);
    viewCommentsBtnElement.addEventListener('click', viewComments);
}

attachEvents();

// 02 Async / Await syntax
async function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const loadPostsBtnElement = document.getElementById('btnLoadPosts');
    const viewCommentsBtnElement = document.getElementById('btnViewPost');

    const postsSelectElement = document.getElementById('posts');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const commentsUlElement = document.getElementById('post-comments');

    let allPosts = [];

    const loadPosts = async () => {
        postsSelectElement.innerHTML = '';
        postTitleElement.textContent = '';
        postBodyElement.textContent = '';
        commentsUlElement.innerHTML = '';

        try {
            const res = await fetch(postsUrl);
            const postData = await res.json();
            allPosts = Object.values(postData);

            allPosts.forEach(post => {
                const postOption = document.createElement('option');
                postOption.value = post.id;
                postOption.textContent = post.title;
                postsSelectElement.appendChild(postOption);
            });
        } catch (err) {
            console.error(err.message);
        }
    };

    const viewComments = async () => {
        const postId = postsSelectElement.value;
        const post = allPosts.find(post => post.id === postId);

        // my check
        if (!post) {
            console.error('Post not found');
            return;
        }

        postTitleElement.textContent = post.title;
        postBodyElement.textContent = post.body;

        try {
            const res = await fetch(commentsUrl);
            const commentsData = await res.json();
            const comments = Object.values(commentsData)
                .filter(comment => comment.postId === postId);

            commentsUlElement.innerHTML = '';

            comments.forEach(comment => {
                const commentLiElement = document.createElement('li');
                commentLiElement.textContent = comment.text;
                commentsUlElement.appendChild(commentLiElement);
            });
        } catch (err) {
            console.error(err.message);
        }
    };

    loadPostsBtnElement.addEventListener('click', loadPosts);
    viewCommentsBtnElement.addEventListener('click', viewComments);
}

attachEvents();