<template>
    <div class="resume-item">
        <div class="job-specs">
            <h2 class="job-title">{{ this.jobTitle }} </h2>
            <p class="company-name">{{ this.companyName }} </p>
            <p class="startDate"> {{ this.startDate }} - </p>
            <p class="endDate"> {{ this.endDate }}</p>
        </div>
        <div class="job-desc">
        <li class="desc-p" v-for="(descrip, index) in description" :key="index">
            {{ descrip }}
        </li>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ResumeEntry',
    props: {
        companyName: String,
        jobTitle: String,
        description: Array,
        startDate: String,
        endDate: String
    }

};
</script>
<style scoped>
.resume-item {
    width: 100%;
    display: inline-flex;
    margin-bottom: 2rem;
    padding-left: 1rem;
}

.job-title {
    color: #7d938a;
    font-size: 1.5rem;
}
.job-specs {
    color: gray;
    text-transform: uppercase;
    width: 25%;
    font-weight: bold;
}

.job-specs p {
    margin: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.job-desc {
    width: 65%;
    margin: 0rem 0rem 0rem 3rem;
    text-align: left;
}

.company-name {
    color: gray;
    margin: 10px;
    padding-bottom: 10px;
    font-family: 'Playfair Display', sans-serif;
    font-size: 20px;
}

.desc-p {
    padding: 0 10px 10px 10px;
}
</style>