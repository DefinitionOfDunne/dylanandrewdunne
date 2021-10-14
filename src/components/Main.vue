<template>
    <div>
        <header>
            <img id="main-logo" alt="Main Logo" src="../assets/DAD-logo.png">
            <div class="arrow bounce">
                <a @click="scrollToElement" class="arrow-link">
                    <img class="double-down" src="../assets/double-down.png">
                </a>
            </div>
        </header>
        <div>
            <b-navbar type="light">
                <b-navbar-nav class="navbar navbar-default center">
                    <b-nav-item href="#">About</b-nav-item>
                    <b-nav-item href="#contact-wrapper">
                        <router-link to="/resume">Career History</router-link>
                    </b-nav-item>
                    <b-nav-item href="#contact-wrapper">
                        <router-link to="/contact">Contact</router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <main>
            <section class="about-section">
                <div id="headshot-div">
                    <img id="headshot" src="../assets/dad-headshot.jpg">
                </div>
                <div id="bio-div">
                    <p class="bio-paragraph"> Hey, I'm Dylan. Thank you for stopping by my little website.</p>
                    <p class="bio-paragraph">I'm an application engineer based out of Detroit, MI. I currently work in the health insurance space where I build and improve applications that pharmacies rely on to process hundreds of thousands of pharmacy claims every month.</p>
                    <p class="bio-paragraph">I'm passionate about design, clean code, and trying my best to keep up with the constant barrage of new and exciting web dev tools. </p>
                    <p class="bio-paragraph">In my free time, I enjoy unironically supporting all <a href="https://fivethirtyeight.com/features/detroit-is-the-capital-of-bad-sports-right-now/" target="_blank">Detroit sports teams</a>, working around the house on DIY projects that I've poached from Instagram, and exploring the latest restaurants and bars that pop up around the city</p>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
export default {
    name: 'Main',
    props: {
        msg: String
    },
    data() {
        return {
            shows: []
        };
    },
    methods: {
        scrollToElement() {
            const el = this.$el.getElementsByClassName('about-section')[0];
            const dd = this.$el.getElementsByClassName('double-down')[0];
            const foo = this.$el.getElementsByClassName('arrow')[0];


            if (el) {
                // Use el.scrollIntoView() to instantly scroll to the element
                el.scrollIntoView({ behavior: 'smooth' });
            }
            this.deleteImg(dd, foo)
        },
        deleteImg(arrowElement, wrapperElement) {
        arrowElement.remove();
        wrapperElement.remove();
    }
    }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

header {
    height: 100vh;
}

#main-logo {
    width: auto;
    height: 80vh;
    ;
}

.navbar {
    display: block;
}

.navbar.center .navbar-inner .nav {
    float: none;
    display: inline-block;
    vertical-align: top;
    text-align: center;
}

.about-section {
    width: 90%;
    display: flex;
    padding: 10px;
}

#bio-div {
    width: 80%;
    padding: 10px;
}

#headshot-div {
    width: 20%;
    padding: 10px;
}

#headshot {
    max-width: 75%;
    border-radius: 50%;
}

.bio-paragraph {
    text-align: left;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.arrow {
    text-align: center;
    height: 20vh;
}

.bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
}

.arrow-link {
    display: inline-block;
}

.double-down {
    width: auto;
    height: 20vh;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}
</style>