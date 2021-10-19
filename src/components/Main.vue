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
        <main>
            <section class="about-section">
                <div id="nav-wrapper">
                    <b-navbar type="light">
                        <b-navbar-nav class="navbar navbar-default center">
                            <b-nav-item href="#">Home</b-nav-item>
                            <b-nav-item>
                                <router-link tag="li" class="nav-item" to="/resume">Career History</router-link>
                            </b-nav-item>
                            <b-nav-item>
                                <router-link tag="li" to="/contact">Links</router-link>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-navbar>
                </div>
                <div id="headshot-div">
                    <img id="headshot" src="../assets/dad-headshot.jpg">
                </div>
                <div id="bio-div">
                    <p class="bio-paragraph"> Hey, I'm Dylan. Thank you for stopping by my little website.</p>
                    <p class="bio-paragraph">I'm an application engineer based out of Detroit, MI. I currently work in the health insurance space where I build and improve applications that pharmacies rely on to process hundreds of thousands of pharmacy claims every month.</p>
                    <p class="bio-paragraph">I'm passionate about design, clean code, and trying my best to keep up with the constant barrage of new and exciting web dev tools. </p>
                    <p class="bio-paragraph">In my free time, I enjoy unironically supporting all <a href="https://fivethirtyeight.com/features/detroit-is-the-capital-of-bad-sports-right-now/" target="_blank">Detroit sports teams</a>, working around the house on DIY projects that I've poached from Instagram, and exploring the latest restaurants and bars that pop up around the city.</p>
                    <p class="bio-paragraph">Please poke around my site if you'd like to learn a little bit more about me and my work. If you're interested in working together, don't hesitate to get in touch!</p>
                </div>
            </section>
        </main>
        <footer>
           <p class="cp-text">
            © Copyright 2021 Dylan A. Dunne
        </p> 
        </footer>
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
    max-width: 100%;
    max-height: 80vh;
}

.navbar {
    display: block;
}

.navbar.center .navbar-inner .nav {
    float: none;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-weight: bold;
}

.about-section {
    width: 90%;
    display: inline-block;
    padding: 10px;
    height: 100vh;
}

.nav-link {
    padding: 1rem 1rem;
}

#bio-div {
    width: 80%;
    padding: 25px;
    margin: auto;
}

#nav-wrapper {
    padding: 1rem 1rem;
}

#headshot-div {
    width: 100%;
    margin: 4rem auto;
}

#headshot {
    max-width: 25%;
    border-style: solid;
    border-radius: 50%;
    border-color: #7d938a;
}

.bio-paragraph {
    text-align: left;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
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
    margin: 0 25px;
    font-weight: bold;
}

a {
    color: #7d938a;
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

.cp-text{ 
    color: #7d938a;
    text-shadow: 0 1px rgba(255, 255, 255, 0.1);
    height: 5rem;
}

footer {
    clear: both;
    position: relative;
    margin-top: 100px;
}

@media only screen and (max-width: 700px) {

    #headshot {
        max-width: 50%;
    }

    li {
        display: block;
    }

    #bio-div {
        width: 95%;
        padding: 15px;
    }
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