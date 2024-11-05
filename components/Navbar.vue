<template>
    <nav class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/resume">Resume</a></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    margin: 0px;
    padding: 0px;
}

nav ul {
    margin: 0px;
    padding: 15px;
    background-color: hsl(0, 0%, 15%);
    list-style-type: none;
    text-align: center;
}

nav li {
    padding: 5px;
    display: inline;
}

nav a {
    padding: 10px;
    color: hsl(0, 0%, 80%);
    border-radius: 5px;
    text-decoration: none;
}

nav a:hover {
    background-color: hsl(0, 0%, 30%);
}
</style>