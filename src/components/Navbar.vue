<template>
    <div class="navbar">
        <b-navbar type="">

            <b-navbar-nav class="first">
                <b-nav-item active-class="active" to="/" exact>Клапаны</b-nav-item>
                
                <b-nav-item active-class="active" to="masters" exact>Мастера</b-nav-item>

                <b-nav-item active-class="active" to="masterhub" exact>Мастер Хабы</b-nav-item>

                <b-nav-item active-class="active" to="settings" exact>Настройки</b-nav-item>      
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
    color: #777676;
    font-weight: 500;
    padding: 0;
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
    background: #808080;
    content: '';
    top: 0;
}
.first::before{
    height: 1px;
    position: absolute;
    width: 100%;
    background: #808080;
    content: '';
    bottom: 0;
}

nav{
    width: 100%;
}

</style>