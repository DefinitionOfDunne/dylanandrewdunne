<template>
    <main>
        <div>
            <b-navbar type="light">
                <b-navbar-nav class="navbar navbar-default center">
                    <b-nav-item href="/">Home</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <div id="link-wrapper">
            <h1>Contact</h1>
            <div class="link-div">
                <li>
                    <a href="https://github.com/DefinitionOfDunne/" target="_blank">
                        <img class="link-img" src="../assets/GitHub-Mark-120px-plus.png">
                    </a>
                </li>
            </div>
            <div class="link-div">
                <li>
                    <img class="link-img" src="../assets/email_icon.png" @click="showEmailModal">
                </li>
            </div>
            <div class="link-div">
                <li>
                    <img class="link-img" src="../assets/icon-phone-18.jpg" @click="showPhoneModal">
                </li>
            </div>
            <h1>Freelance Projects</h1>
            <div class="link-div">
                <li>
                    <a href="https://sugarhoneytruck.com/" target="_blank">
                        <img class="link-img" src="../assets/SHMAINLOGO1TRANSPARENT-01.png">
                    </a>
                </li>
            </div>
        </div>
        <b-modal centered ref="phone-modal" hide-footer title="Cell Phone">
            <div class="d-block text-center">
                <h3>Text or call me at (231) 838-4805</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hidePhoneModal">Close</b-button>
        </b-modal>
        <b-modal centered info ref="email-modal" hide-footer title="Email">
            <div class="d-block text-center">
                <h3>Email me at
                    <a href="mailto:DylanADunne@gmail.com">DylanADunne@gmail.com </a></h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideEmailModal">Close</b-button>
        </b-modal>
    </main>
</template>
<script>
export default {
    name: 'Contact',
    methods: {
        showPhoneModal() {
            this.$refs['phone-modal'].show()
        },
        hidePhoneModal() {
            this.$refs['phone-modal'].hide()
        },
        showEmailModal() {
            this.$refs['email-modal'].show()
        },
        hideEmailModal() {
            this.$refs['email-modal'].hide()
        },
    }

}
</script>
<style scoped>
.link-div {
    max-height: 25%;
    display: block;
    margin: 5rem auto;
}

#link-wrapper {
    display: block;
    width: 80%;
    height: 80%;
    margin: auto;
    padding: 2rem;
    background-color: white;
    border-radius: 25px;
}

.link-img {
    height: 12rem;
    padding: 5px;
    margin: auto;
    border-radius: 50%;
    border-style: solid;
    transition: transform .2s;
}

.link-img:hover {
    transform: scale(1.1);
    color: black;
}

.link-div li {
    height: 100%;
}

.link-div li a {
    height: 100%;
}

li {
    list-style-type: none;
    width: 50%;
    display: inline-block;
}

a {
    display: inline-block;
    color: black;
}

a img {
    display: block;
}

h3 {
    font-family: Open Sans;
    padding: 1rem 0;
}

h1 {
    color: #7d938a;
}
</style>