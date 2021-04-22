<template>
    <div class="navbar">
        <b-navbar  type="">

            <b-navbar-nav class="first">
                <b-nav-item  to="/" exact>Клапаны</b-nav-item>
                
                <b-nav-item  to="masters" exact>Мастера</b-nav-item>

                <b-nav-item  to="masterhub" exact>Мастер Хабы</b-nav-item>

                <b-nav-item  to="settings" exact>Настройки</b-nav-item>      
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item to=""><b-icon icon="person-fill"></b-icon> Войти </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>        
export default {
    name: 'Navbar'
}
</script>

<style scoped>

*{
    color: #000000;
    font-weight: 500;
    padding: 0;
    font-size: 1.1rem;
}
.navbar{
    margin-top: 1rem;
    position: relative; 
}
    
a:hover{
    color: black;
    font-weight: bolder;
}
nav{
    width: 100%;
}
.first::after{
    height: 1px;
    position: absolute;
    width: 100%;
    background: rgb(53, 52, 52);
    content: '';
    top: 0;
}
.first::before{
    height: 1px;
    position: absolute;
    width: 100%;
    background: rgb(53, 52, 52);
    content: '';
    bottom: 0;
}

nav{
    width: 100%;
}
nav  { 
    background-color: color ; 
}
a.router-link-active {
    color: rgb(0, 0, 0);
    font-weight: bold;
}
</style>