<template>
    <div>
        <header>
            <img id="main-logo" alt="Main Logo" src="../assets/DAD-logo.png">
        </header>
        <section id="main-wrapper">
            <div id="resume-body">
                <ul>
                    <h1 class="section-title">Software Engineering</h1>
                    <li v-for="(job, index) in jobs" :key="index">
                        <ResumeEntry v-if="job.type === 'Information Technology' " :companyName="job.company" :jobTitle="job.jobTitle" :description="job.description" :startDate="job.startDate" :endDate="job.endDate"></ResumeEntry>
                    </li>
                    <h1>Leadership & Consulting</h1>
                    <li v-for="(job, index) in jobs" :key="'A' + index">
                        <ResumeEntry v-if="job.type === 'Other' " :companyName="job.company" :jobTitle="job.jobTitle" :description="job.description" :startDate="job.startDate" :endDate="job.endDate"></ResumeEntry>
                    </li>
                    <h1>Education</h1>
                    <li v-for="(job, index) in jobs" :key="'B' + index">
                        <ResumeEntry v-if="job.type === 'Education'" :companyName="job.company" :jobTitle="job.jobTitle" :description="job.description" :startDate="job.startDate" :endDate="job.endDate"></ResumeEntry>
                    </li>
                </ul>
            </div>
            <div id="resume-sidebar">
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
    width: 5rem;
}

#headshot {
    width: 5rem;

}
.section-title {
  margin: 5px; 
}

#resume-body {
    height: 100%;
    width: 75%;
    float: left;
    background-color: white;
    text-align: left;
}

#resume-sidebar {
    background-color: #ededed;
    color: #424040;
    height: 100%;
    width: 25%;
    float: right;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
</style>