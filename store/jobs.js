import api from '@/services/api'

export const state = () => ({
  jobs: [
    {
      // icon: true,
      // jobid: "001",
      title: "React Native Developer",
      company: "Auchan",
      location: "London",
      salary: "70 000 - 120 000 ",
      contractType: "CDI",
      skills: [
        "Javascript",
        "Vuejs",
        "React js"
      ],
      isPublished: false,
      description: "Solides compétences en Javascript et vue js",
      imageUrl: "https://www.cap-nor.com/wp-content/uploads/AUCHAN-logo-300.png"
    },
  ],

})

export const mutations = {

  ADD_JOB(state, newJob) {
    state.jobs.push(newJob);
    console.log('Mutation: Ok, A job has been added');
  },
}

export const actions = {

  async ADD_JOB({ commit }, newJob) {
    console.log('Action: Trying to add newJob');
    if (!newJob || !newJob.title) {
      console.error('Invalid newJob item');
      return;
    }
    const result = await api.addJob(newJob);
    if (result === true) commit('ADD_JOB', newJob);
    else console.error('Could not add newJob');
  },

}

export const getters = {
  // ...
  getJobItems: (state) => {
    return state.jobs
  }

}



