<template>
    <div>
        <div>
            <b-navbar type="light">
                <b-navbar-nav class="navbar navbar-default center">
                    <b-nav-item href="/">About</b-nav-item>
                    <b-nav-item href="#contact-wrapper">
                        <router-link to="/contact">Contact</router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <header>
            <img id="main-logo" alt="Main Logo" src="../assets/DAD-logo.png">
        </header>
        <section id="main-wrapper">
            <div id="resume-body">
                <ul>
                    <h1 class="section-title">Software Engineering</h1>
                    <li class="job-blob" v-for="(job, index) in filterJobsByType" :key="index">
                        <ResumeEntry v-if="job.type === 'Information Technology' " :companyName="job.company" :jobTitle="job.jobTitle" :description="job.description" :startDate="job.startDate" :endDate="job.endDate"></ResumeEntry>
                    </li>
                    <h1 class="section-title">Leadership & Consulting</h1>
                    <li class="job-blob" v-for="(job, index) in filterJobsByType2" :key="'A' + index">
                        <ResumeEntry v-if="job.type === 'Other' " :companyName="job.company" :jobTitle="job.jobTitle" :description="job.description" :startDate="job.startDate" :endDate="job.endDate"></ResumeEntry>
                    </li>
                    <h1 class="section-title">Education</h1>
                    <li class="job-blob" v-for="(job, index) in filterJobsByType3" :key="'B' + index">
                        <ResumeEntry v-if="job.type === 'Education'" :companyName="job.company" :jobTitle="job.jobTitle" :description="job.description" :startDate="job.startDate" :endDate="job.endDate"></ResumeEntry>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
import ResumeEntry from './ResumeEntry';
export default {
    name: 'Resume',
    data() {
        return {
            jobs: []
        };
    },

    async mounted() {
        this.jobs = await this.getJobExperience();
    },
    computed: {
        filterJobsByType: function() {
            return this.jobs.filter(jobs => jobs.type == "Information Technology")
        },
        filterJobsByType2: function() {
            return this.jobs.filter(jobs => jobs.type == "Other")
        },
        filterJobsByType3: function() {
            return this.jobs.filter(jobs => jobs.type == "Education")
        },
    },
    methods: {
        getJobExperience: async () => {
            const query = `{
        bioCollection(order: [startDateAsDate_DESC]){
          items {
            sys {
              id
            }
            company
            jobTitle
            type
            startDate
            endDate
            description
          }
        }
      }
      `;
            const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
            const fetchOptions = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query })
            };
            try {
                const response = await fetch(fetchUrl, fetchOptions).then(response =>
                    response.json()
                );
                return response.data.bioCollection.items;
            } catch (error) {
                throw new Error("Problem getting the data from Contentful");
            }
        }
    },

    components: {
        ResumeEntry
    }

}
</script>
<style scoped>

#main-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: Open Sans;
}

#main-logo {
    width: 30%;
}

#headshot {
    width: 5rem;

}
.section-title {
    text-align: center;
    margin: 15px;
    color: #7d938a; 
}

#resume-body {
    height: 100%;
    width: 75%;
    display: inline-block;
    background-color: white;
    text-align: left;
}

.job-blob {
    background-color: white;
    border-radius: 25%;
    margin: 5px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
@media only screen and (max-width: 650px) {

    .section-title {
        margin-bottom: 25px;
    }
}
</style>