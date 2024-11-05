<template>
    <h1>
        Favorite Video Games
    </h1>
    <div>
        <img src="/img/Celeste.jpg">
        <ol>
            <li>Celeste</li>
            <li>Elden Ring</li>
            <li>Satisfactory</li>
            <li>Terraria</li>
            <li>Hollow Knight</li>
        </ol>
        <img src="/img/Elden Ring.jpg">
    </div>
    <iframe src="https://www.youtube.com/embed/CbUjuwhQPKs"></iframe>
    <p>This is a link to <a href="https://vuejs.org/" target="_blank">VUE</a></p>
</template>

<style scoped>
h1 {
    color: hsl(0, 0%, 80%);
    margin: 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}

div {
    padding: 10px;
    background-color: hsl(0, 0%, 30%);
    justify-content: center;
    display: flex;
    align-items: center;
}

img {
    margin-inline: 100px;
    width:  400px;
    height: 200px;
    object-fit: cover;
}

ol {
    list-style-type: decimal;
    margin-left: 25px;
    font-size: 25px;
}

li {
    color: hsl(0, 0%, 80%);

}

img {
    display: flex;
}

iframe {
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    background-color: hsl(0, 0%, 30%);
    border-radius: 5px;
    width: 400px;
    height: 225px;
}

p {
    color: hsl(0, 0%, 80%);
    margin: 20px;
    text-align: center;
}

a {
    color: #42b883;
    text-decoration: underline;
}
</style>