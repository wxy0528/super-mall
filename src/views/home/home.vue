<template>
    <div class="home">
        <NavBar class="home-nav">
            <div slot="center">购物街</div>
        </NavBar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import 'assets/css/base.css'
export default {
    components:{
        NavBar
    }
}
</script>

<style  scoped>
.home-nav{
    background: var(--color-tint);
    color: #fff;
}
</style>