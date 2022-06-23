const miniTwitter = {
    usuarios: [
        {
            username: 'paulo'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'paulo',
            content: 'Meu primeiro tweet'
        }
    ],
};
// CREATE
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({owner: 'paulo', content: 'segundo tweet'});
criaPost({owner: 'paulo', content: 'terceiro tweet'});

//console.log(miniTwitter.posts)

//READ
function pegaPosts() {
    return miniTwitter.posts;
}

console.log(pegaPosts())


//UPDATE
function updateContentPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    })
    console.log(postQueVaiSerAtualizado)
}

updateContentPost(1, 'Novo contéudo do post')
console.log(pegaPosts())


//DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizada;
}
apadaPost(1);
apadaPost(2);
apadaPost(3);
console.log(pegaPosts());